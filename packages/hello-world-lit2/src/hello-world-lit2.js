import { LitElement, html, css } from 'lit';

export class HelloWorldLit2 extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
      color: var(--hello-world-lit2-text-color, black);
    }
  `;

  render() {
    return html`<p>Hello, Lit 2!</p>`;
  }
}

customElements.define('hello-world-lit2', HelloWorldLit2);
