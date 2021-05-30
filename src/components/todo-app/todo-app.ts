import { html, LitElement } from "lit";
import { customElement, state } from "lit/decorators";
import { classMap } from "lit/directives/class-map";
import { styleMap } from "lit/directives/style-map";

import TodoItemModel from "../../model/item";
import styles from "./todo-app.css";

import TodoService from "../../services/todos.service";

@customElement("todo-app")
export default class TodoAppElement extends LitElement {
  static styles = styles;

  @state()
  private _todos: TodoItemModel[] = TodoService.load();

  /**
   * Toggle a todo done state
   * @param index The item index in the list
   */
  private _onToggleDone(index: number) {
    this._todos = this._todos.map((todo, i) =>
      i === index ? { ...todo, done: !todo.done } : todo
    );
  }

  /**
   * Delete a todo item from the list
   * @param index The item index in the list
   */
  private _onDeleteTodo(index: number) {
    this._todos = this._todos.filter((_, i) => i !== index);
  }

  /**
   * Add a todo in the list
   * @param e The event
   */
  private _onTodoAdded(e: KeyboardEvent) {
    if (e.key !== "Enter") return;

    const text = (e.target as HTMLInputElement).value;
    if (!text?.trim?.()) return;

    // Filter predicates
    if (this._todos.find((todo) => todo.text === text)) return;

    this._todos = [
      ...this._todos,
      {
        text,
        done: false,
      },
    ];
    (e.target as HTMLInputElement).value = "";
  }

  updated() {
    TodoService.save(this._todos);
  }

  renderAddTodo() {
    return html`
      <div>
        <input type="checkbox" disabled />
        <input
          type="text"
          placeholder="Add a new task"
          class="add-todo"
          @keyup=${this._onTodoAdded}
        />
      </div>
    `;
  }

  renderTodoList() {
    return html`
      <div class="todo-list">
        ${this._todos.map((todo, i) => this.renderTodo(todo, i))}
      </div>
    `;
  }

  renderTodo(todo: TodoItemModel, index: number) {
    const classes = {
      check: { checkbox: true, done: todo.done },
      text: { text: true, done: todo.done },
    };

    return html`
      <div class="todo-item">
        <div
          id="todo-check"
          class=${classMap(classes.check)}
          @click=${() => this._onToggleDone(index)}
        >
          ✓
        </div>
        <span id="todo-text" class=${classMap(classes.text)}>
          ${todo.text}
          <button
            id="delete-btn"
            class="delete-btn"
            @click=${() => this._onDeleteTodo(index)}
          >
            ⨯
          </button>
        </span>
      </div>
    `;
  }

  renderProgress() {
    const done = this._todos.filter((todo) => todo.done).length;
    const total = this._todos.length;
    const percent = (done / total) * 100;

    const style = { width: `${percent}%` };
    return html`
      <div class="progress">
        <div class="todo-progress" style=${styleMap(style)}>&nbsp;</div>
      </div>
      <span> <b>${done}</b> out of <b>${total}</b> tasks done </span>
    `;
  }

  // Main rendering function
  render() {
    return html`
      <div class="container">
        <h1>Todo List</h1>
        <div class="column">
          <div>${this.renderTodoList()}</div>
          <div>${this.renderAddTodo()}</div>
          <div>${this.renderProgress()}</div>
        </div>
      </div>
    `;
  }
}
