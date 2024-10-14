import { html } from 'lit';
import '../src/hello-world-lit2.js'; // Import the component

export default {
  title: 'HelloWorldLit2',
  component: 'hello-world-lit2',
  argTypes: {
    color: { control: 'color' },
  },
};

function Template({ color }) {
  return html`
    <hello-world-lit2 style="color: ${color || 'black'}"></hello-world-lit2>
  `;
}

export const Default = Template.bind({});
Default.args = {
  color: 'blue',
};
