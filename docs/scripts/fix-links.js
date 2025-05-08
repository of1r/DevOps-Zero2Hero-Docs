const fs = require('fs');
const path = require('path');

function fixLinks(content) {
  // Fix links that start with /Content/
  return content.replace(/\(\/Content\/([^)]+)\)/g, '($1)');
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

  console.log('Fixing markdown links...');
  fixDirectory(contentDir);
  console.log('Markdown links fixed successfully!');
}

fixContent(); 