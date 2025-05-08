const fs = require('fs');
const path = require('path');

// Map of old file names to new file names
const fileMapping = {
  '01-intro': 'intro',
  '02-basic-commands': 'basic-commands',
  '03-dockerfile': 'dockerfile',
  '04-docker-compose': 'docker-compose',
  '02-copilot-kickstart': 'copilot-kickstart',
  '03-copilot-featurs': 'copilot-featurs',
  '04-copilot-settings': 'copilot-settings',
  '05-copilot-context': 'copilot-context'
};

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
      // Get all markdown files in the directory
      const markdownFiles = fs.readdirSync(fullPath)
        .filter(file => file.endsWith('.md') || file.endsWith('.mdx'))
        .filter(file => file !== 'README.md');

      if (markdownFiles.length > 0) {
        const subItems = generateSidebarItems(fullPath);
        
        // Only add the category if it has subitems
        if (subItems.length > 0) {
          items.push({
            type: 'category',
            label: entry.name.split('_').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
            items: subItems
          });
        }
      }
    } else if (entry.name.endsWith('.md') || entry.name.endsWith('.mdx')) {
      // Convert file path to relative path from docs directory
      const relativePath = path.relative(path.join(__dirname, '../docs'), fullPath)
        .replace(/\\/g, '/') // Convert Windows paths to Unix style
        .replace(/\.(md|mdx)$/, ''); // Remove file extension
      
      // Check if we need to map the file name
      const pathParts = relativePath.split('/');
      const fileName = pathParts[pathParts.length - 1];
      if (fileMapping[fileName]) {
        pathParts[pathParts.length - 1] = fileMapping[fileName];
        items.push(pathParts.join('/'));
      } else {
        items.push(relativePath);
      }
    }
  }

  return items;
}

function generateSidebar() {
  const contentDir = path.join(__dirname, '../docs');
  
  // Check if content directory exists
  if (!fs.existsSync(contentDir)) {
    console.error(`Content directory not found: ${contentDir}`);
    process.exit(1);
  }

  const items = generateSidebarItems(contentDir);
  
  // Only create sidebar if there are items
  if (items.length === 0) {
    console.error('No content found in the content directory');
    process.exit(1);
  }

  const sidebar = {
    tutorialSidebar: [
      {
        type: 'category',
        label: 'DevOps Zero2Hero',
        items: items
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