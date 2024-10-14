import { LitElement, html, css } from 'lit';

export class HelloWorldLit4 extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--hello-world-lit4-text-color, blue);
    }
  `;

  render() {
    return html`<p>Hello, Lit 4!</p>`;
  }
}

customElements.define('hello-world-lit4', HelloWorldLit4);
