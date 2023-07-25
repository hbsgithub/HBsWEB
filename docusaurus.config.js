// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "HB's WEB",
  tagline: "Welcome to HB's WEB",
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.hbio.me',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hbsgithub', // Usually your GitHub org/user name.
  projectName: 'HBSWEB', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: ["@docusaurus/theme-live-codeblock"],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "HB's WEB",
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Note',
          // },
          {
            type: "dropdown",
            label: "Docs",
            position: "left",
            to: "docs/Note/intro",
            items: [
              {
                to: "docs/Note/intro",
                label: "Note",
              },
              {
                to: "docs/玩转Armbian盒子/intro",
                label: "Armbian",
              },
            ],
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/hbsgithub',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,

      },

      algolia: {
        apiKey : "dca4e61640644f378eb8ffd7390f75e2" ,
        appId : "HJ4QHMH01Y" ,
        indexName : "HBSWEB" ,
      },

      announcementBar: {
        id: 'support_us', // Any value that will identify this message.
        content:
          '🌟 如果我的网站内容有帮助到你的话，可以考虑到我的<a target="_blank" rel="noopener noreferrer" href="https://github.com/hbsgithub/HBsWEB">Github</a>点个Star哦！🌟',
        backgroundColor: "#fafbfc", // Defaults to `#fff`.
        textColor: '#fff', // Defaults to `#000`.
        isCloseable: true, // Defaults to `true`.
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Note',
                to: '/docs/Note/intro',
              },
              {
                label: 'Armbian',
                to: '/docs/玩转Armbian盒子/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hbsgithub',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} HB's WEB.`,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: require('prism-react-renderer/themes/dracula'),
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],
        magicComments: [
          {
            className: "theme-code-block-highlighted-line",
            line: "highlight",
            block: { start: "highlight-start", end: "highlight-end" },
          },
          {
            className: "code-block-error-line",
            line: "error",
          },
        ],
      },
    }),
};

module.exports = config;
