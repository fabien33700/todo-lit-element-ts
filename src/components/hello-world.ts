import { LitElement, html, property, customElement } from 'lit-element'

@customElement('hello-world')
export class HelloWorldElement extends LitElement {
  @property() public name: string

  render() {
    return html`
      <h1>Hello, ${this.name ?? 'World'}</h1>
    `
  }
}
