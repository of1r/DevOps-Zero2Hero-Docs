const fs = require('fs');
const path = require('path');

function cleanFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Remove invalid HTML tags
  let cleanedContent = content
    // Remove self-closing img tags
    .replace(/<img[^>]*\/>/g, '')
    // Remove closing img tags
    .replace(/<\/img>/g, '')
    // Remove any remaining img tags
    .replace(/<img[^>]*>/g, '')
    // Remove any paragraph tags
    .replace(/<\/?p>/g, '')
    // Remove any div tags
    .replace(/<\/?div[^>]*>/g, '')
    // Remove any span tags
    .replace(/<\/?span[^>]*>/g, '')
    // Remove any br tags
    .replace(/<br\s*\/?>/g, '\n')
    // Remove any hr tags
    .replace(/<hr\s*\/?>/g, '\n---\n')
    // Remove any remaining HTML tags
    .replace(/<[^>]*>/g, '')
    // Clean up multiple newlines
    .replace(/\n{3,}/g, '\n\n');

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