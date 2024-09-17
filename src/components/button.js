import { LitElement, html, css } from 'https://unpkg.com/lit@2.0.0?module';

class MyButton extends LitElement {
  static styles = css`
    button {
      padding: 10px 20px;
      background-color: #6200ee;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
    button:hover {
      background-color: #3700b3;
    }
  `;

  render() {
    return html`<button @click=${this._handleClick}>Click Me</button>`;
  }

  _handleClick() {
    alert('Button clicked!');
  }
}

customElements.define('jowin-button', MyButton);

export { MyButton };

// No need to re-export here
