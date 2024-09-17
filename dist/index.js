import{LitElement as t,css as o,html as e}from"https://unpkg.com/lit@2.0.0?module";class r extends t{static styles=o`
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
  `;render(){return e`<button @click=${this._handleClick}>Click Me</button>`}_handleClick(){alert("Button clicked!")}}customElements.define("jowin-button",r);export{r as MyButton};
