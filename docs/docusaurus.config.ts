import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'DevOps Zero2Hero',
  tagline: 'A comprehensive guide to DevOps',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://of1r.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/DevOps-Zero2Hero-Docs/',

  // GitHub pages deployment config.
  organizationName: 'of1r', // Usually your GitHub org/user name.
  projectName: 'DevOps-Zero2Hero-Docs', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          editUrl:
            'https://github.com/of1r/DevOps-Zero2Hero-Docs/tree/main/docs/',
          // Important: Set the docs path to use the content from the submodule
          path: '../content',
          routeBasePath: '/',
        },
        blog: false, // Disable the blog feature
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'DevOps Zero2Hero',
      logo: {
        alt: 'DevOps Zero2Hero Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://github.com/nirgeier/DevOps-Zero2Hero',
          label: 'Original Repository',
          position: 'right',
        },
        {
          href: 'https://github.com/of1r/DevOps-Zero2Hero-Docs',
          label: 'Documentation Repository',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Home',
              to: '/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Original Repository',
              href: 'https://github.com/nirgeier/DevOps-Zero2Hero',
            },
            {
              label: 'Documentation Repository',
              href: 'https://github.com/of1r/DevOps-Zero2Hero-Docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevOps Zero2Hero Docs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;