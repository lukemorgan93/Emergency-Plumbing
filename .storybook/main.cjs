// .storybook/main.js|cjs|ts

const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@chakra-ui/storybook-addon',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
  },
  features: {
    emotionAlias: false,
    storyStoreV7: true,
  },
  async viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '../src/'),
    }
    return config
  },
}
