import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";

import styles from './todo-add.css'

@customElement("todo-add")
export default class TodoAppDocument extends LitElement {
  static styles = styles

  private _addTodo(e: KeyboardEvent) {
    if (e.key !== "Enter") return;

    const text = (e.target as HTMLInputElement).value;

    if (text && text.trim()) {
      const event = new CustomEvent('todo-added', { detail: text })
      this.dispatchEvent(event);
    }
  }

  render() {
    return html`
      <input type="checkbox" disabled />
      <input
        type="text"
        placeholder="Add a new task"
        class="add-todo"
        @keyup=${this._addTodo}
      />
    `;
  }
}
