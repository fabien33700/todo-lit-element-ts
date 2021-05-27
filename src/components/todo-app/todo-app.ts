import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators";

import TodoItemModel from "../../model/item";

import styles from "./todo-app.css";
import "../todo-list/todo-list";
import "../todo-add/todo-add";
import "../todo-progress/todo-progress";

@customElement("todo-app")
export default class TodoAppElement extends LitElement {
  static styles = styles;

  @property({ attribute: false })
  private _todos: TodoItemModel[] = [
    { text: "Faire les courses", done: true },
    { text: "Présentation Web Components", done: false },
  ];

  private _onToggleDone(e: CustomEvent) {
    const index = e.detail;
    this._todos = this._todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
  }

  private _onDeleteTodo(e: CustomEvent) {
    const index = e.detail;
    this._todos = this._todos.filter((_, i) => i !== index);
  }

  private _onTodoAdded(e: CustomEvent) {
    const text = e.detail;
    this._todos = [
      ...this._todos,
      {
        text,
        done: false,
      },
    ];
  }

  render() {
    const done = this._todos.filter(todo => todo.done).length;
    const total = this._todos.length;
    const percent = done / total * 100;

    return html`
      <div class="container">
        <h1>Todo List</h1>
        <div class="column">
          <todo-list
            .todos=${this._todos}
            @toggle-done=${this._onToggleDone}
            @delete-todo=${this._onDeleteTodo}
          >
          </todo-list>
          <todo-add @todo-added=${this._onTodoAdded}></todo-add>
          <todo-progress .percent=${percent}></todo-progress>
          <span>
            <b>${done}</b> out of <b>${total}</b> tasks done
          </span>
        </div>
      </div>
    `;
  }
}
