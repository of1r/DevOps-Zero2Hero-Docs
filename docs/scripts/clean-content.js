const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Remove invalid </img> tags
  const cleanedContent = content.replace(/<\/img>/g, '');
  fs.writeFileSync(filePath, cleanedContent);
}

function cleanDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      cleanDirectory(fullPath);
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      cleanFile(fullPath);
    }
  }
}

function cleanContent() {
  const contentDir = path.join(__dirname, '../docs');
  
  if (!fs.existsSync(contentDir)) {
    console.error(`Content directory not found: ${contentDir}`);
    process.exit(1);
  }

  console.log('Cleaning content files...');
  cleanDirectory(contentDir);
  console.log('Content files cleaned successfully!');
}

cleanContent(); 