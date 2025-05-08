const fs = require('fs');
const path = require('path');

function fixLinks(content) {
  // Fix links that start with /Content/
  let fixedContent = content.replace(/\(\/Content\/([^)]+)\)/g, '($1)');
  
  // Fix image paths
  fixedContent = fixedContent.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (match, alt, src) => {
    // If the image path starts with docs/, remove it
    if (src.startsWith('docs/')) {
      src = src.replace('docs/', '');
    }
    // If the image path starts with static/, keep it as is
    if (src.startsWith('static/')) {
      return `![${alt}](${src})`;
    }
    // For other paths, ensure they're relative to the static directory
    return `![${alt}](/static/${src})`;
  });

  return fixedContent;
}

function fixFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const fixedContent = fixLinks(content);
  fs.writeFileSync(filePath, fixedContent);
}

function fixDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      fixDirectory(fullPath);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      fixFile(fullPath);
    }
  }
}

function fixContent() {
  const contentDir = path.join(__dirname, '../docs');
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Content directory not found: ${contentDir}`);
    process.exit(1);
  }

  console.log('Fixing markdown links and image paths...');
  fixDirectory(contentDir);
  console.log('Markdown links and image paths fixed successfully!');
}

fixContent(); 