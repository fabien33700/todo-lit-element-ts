import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";

import TodoItemModel from "../../model/item";

import "../todo-item/todo-item";

@customElement("todo-list")
export default class TodoListElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `;

  @property() todos: TodoItemModel[];

  private toggleDone(index: number) {
    const event = new CustomEvent("toggle-done", { detail: index });
    this.dispatchEvent(event);
  }

  private deleteTodo(index: number) {
    const event = new CustomEvent("delete-todo", { detail: index });
    this.dispatchEvent(event);
  }

  protected render() {
    return this.todos.map(
      (todo, index) => html`
        <todo-item
          .todo=${todo}
          @toggle-done=${() => this.toggleDone(index)}
          @delete-todo=${() => this.deleteTodo(index)}
        >
          ${todo.text}
        </todo-item>
      `
    );
  }
}
