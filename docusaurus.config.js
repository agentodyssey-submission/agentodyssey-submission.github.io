// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AgentOdyssey",
  tagline: "Open-Ended Long-Horizon Text Game Generation for Test-Time Continual Learning Agents",
  favicon: "img/favicon.ico",

  future: {
    v4: true,
  },

  url: "https://agentodyssey-submission.github.io",
  baseUrl: "/",

  organizationName: "agentodyssey-submission",
  projectName: "agentodyssey-submission",
  trailingSlash: false,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/agentodyssey-social-card.jpg",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "AgentOdyssey",
        items: [],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} AgentOdyssey Team`,
        links: [],
      },
      prism: {
        theme: prismThemes.github,
        additionalLanguages: ['bash', 'json', 'python'],
      },
    }),
};

export default config;
