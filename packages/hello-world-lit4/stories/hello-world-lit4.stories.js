import { html } from 'lit';
import '../src/hello-world-lit4.js'; // Import the component

export default {
  title: 'HelloWorldLit4',
  component: 'hello-world-lit4',
  argTypes: {
    color: { control: 'color' },
  },
};

function Template({ color }) {
  return html`
    <hello-world-lit4 style="color: ${color || 'black'}"></hello-world-lit4>
  `;
}

export const Default = Template.bind({});
Default.args = {
  color: 'green',
};
