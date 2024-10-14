import { join, dirname } from 'path';

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')));
}

/** @type { import('@storybook/web-components-vite').StorybookConfig } */
const config = {
  // Update the stories path to point to your `packages` folder
  stories: [
    '../packages/**/*.mdx',
    '../packages/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
  ],
  framework: {
    name: getAbsolutePath('@storybook/web-components-vite'),
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
