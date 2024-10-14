import { html } from 'lit';
import '../src/monorepo-yokai.js';

export default {
  title: 'MonorepoYokai',
  component: 'monorepo-yokai',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <monorepo-yokai
      style="--monorepo-yokai-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </monorepo-yokai>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
