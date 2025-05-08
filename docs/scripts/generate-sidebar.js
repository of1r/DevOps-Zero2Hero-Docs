const fs = require('fs');
const path = require('path');

function generateSidebarItems(contentDir) {
  const items = [];
  const entries = fs.readdirSync(contentDir, { withFileTypes: true });

  // Sort entries: directories first, then files, both alphabetically
  entries.sort((a, b) => {
    if (a.isDirectory() && !b.isDirectory()) return -1;
    if (!a.isDirectory() && b.isDirectory()) return 1;
    return a.name.localeCompare(b.name);
  });

  for (const entry of entries) {
    const fullPath = path.join(contentDir, entry.name);
    
    // Skip hidden files and directories
    if (entry.name.startsWith('.')) continue;
    
    // Skip README.md files
    if (entry.name === 'README.md') continue;

    if (entry.isDirectory()) {
      // Check if directory has any markdown files
      const hasMarkdown = fs.readdirSync(fullPath).some(file => 
        file.endsWith('.md') || file.endsWith('.mdx')
      );

      if (hasMarkdown) {
        items.push({
          type: 'category',
          label: entry.name.split('_').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' '),
          items: generateSidebarItems(fullPath)
        });
      }
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      // Convert file path to relative path from content directory
      const relativePath = path.relative(path.join(__dirname, '../../content'), fullPath)
        .replace(/\\/g, '/') // Convert Windows paths to Unix style
        .replace(/\.(md|mdx)$/, ''); // Remove file extension
      
      items.push(relativePath);
    }
  }

  return items;
}

function generateSidebar() {
  const contentDir = path.join(__dirname, '../../content/Content');
  const sidebar = {
    tutorialSidebar: [
      {
        type: 'category',
        label: 'DevOps Zero2Hero',
        items: generateSidebarItems(contentDir)
      }
    ]
  };

  // Write the sidebar configuration
  const sidebarPath = path.join(__dirname, '../sidebars.js');
  const content = `/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
// This file is auto-generated. Do not edit manually.
const sidebars = ${JSON.stringify(sidebar, null, 2)};

module.exports = sidebars;`;

  fs.writeFileSync(sidebarPath, content);
  console.log('Sidebar generated successfully!');
}

generateSidebar(); 