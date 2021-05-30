import { html, LitElement } from "lit";
import { customElement } from "lit/decorators";

import styles from "./todo-add.css";

@customElement("todo-add")
export default class TodoAddElement extends LitElement {
  static styles = styles;

  /**
   * Handle event fired when user press Enter key, and
   * fire a 'todo-added' event to the parent element
   * @param e The keyup event from the task input
   */
  private _addTodo(e: KeyboardEvent) {
    if (e.key !== "Enter") return;

    const text = (e.target as HTMLInputElement).value;

    if (text && text.trim()) {
      const event = new CustomEvent("todo-added", { detail: text });
      this.dispatchEvent(event);
      (e.target as HTMLInputElement).value = '';
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
