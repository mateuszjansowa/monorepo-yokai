import { storybookPlugin } from '@web/dev-server-storybook';
import baseConfig from '../web-dev-server.config.mjs';
import path from 'path';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  ...baseConfig,
  open: '/',
  plugins: [
    storybookPlugin({
      type: 'web-components',
      configDir: path.resolve('.storybook/'), // Ensure this points to your .storybook directory,
      configFile: path.resolve('.storybook/main.js'), // Ensure this points to your .storybook/main.js file
    }),
    ...baseConfig.plugins,
  ],
});
