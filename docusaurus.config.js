// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'eShop Plus Documentation',
  tagline: 'Documentation for eShop Plus Panel & App',
  favicon: 'img/favicon.webp',

  // Set the production url of your site here
  url: 'https://wrteam-in.github.io', // GitHub Pages domain
  baseUrl: '/eshopplus_doc/',

  organizationName: 'WRTeam-in', // Usually your GitHub org/user name
  projectName: 'eshopplus_doc',  // Usually your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: true,
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // serve docs at root
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
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
      deployment: {
        useSSH: true,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'eShop Plus',
        logo: {
          alt: 'eShop Plus Logo',
          src: 'img/logo.png',
        },
        items: [

          {
            href: 'https://wrteam.in/',
            label: 'WRTeam',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',  
        copyright: `Copyright © ${new Date().getFullYear()} WRTeam. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
