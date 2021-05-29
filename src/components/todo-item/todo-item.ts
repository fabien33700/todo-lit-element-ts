import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import TodoItemModel from "../../model/item";

import styles from "./todo-item.css";

@customElement("todo-item")
export default class TodoItemElement extends LitElement {
  static styles = styles;

  @property({ type: Object })
  todo: TodoItemModel;

  private _toggleDone() {
    this.dispatchEvent(new CustomEvent("toggle-done"));
  }

  private _deleteTodo() {
    this.dispatchEvent(new CustomEvent("delete-todo"));
  }

  protected render() {
    const { done } = this.todo;
    const classes = {
      check: { checkbox: true, done },
      text: { text: true, done },
    };

    return html`
      <div
        id="todo-check"
        class=${classMap(classes.check)}
        @click=${this._toggleDone}
      >
        ✓
      </div>
      <span id="todo-text" class=${classMap(classes.text)}>
        <slot></slot>
        <button id="delete-btn" class="delete-btn" @click=${this._deleteTodo}>⨯</button>
      </span>
    `;
  }
}
