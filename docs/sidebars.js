/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: [
        'intro',
        {
          type: 'category',
          label: 'Basics',
          items: [
            'tutorial-basics/create-a-page',
            'tutorial-basics/create-a-document',
            'tutorial-basics/create-a-blog-post',
            'tutorial-basics/markdown-features',
            'tutorial-basics/deploy-your-site',
            'tutorial-basics/congratulations',
          ],
        },
        {
          type: 'category',
          label: 'Extras',
          items: [
            'tutorial-extras/manage-docs-versions',
            'tutorial-extras/translate-your-site',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars; 