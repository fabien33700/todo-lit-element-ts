import { css, html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators'

import TodoItemModel from '../../model/item'
import TodoEvent from '../../model/events'

import '../todo-item/todo-item'

@customElement('todo-list')
export default class TodoListElement extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
    }
  `

  @property() todos: TodoItemModel[];

  private toggleDone(index: number) {
    this.dispatchEvent(
      new TodoEvent('toggle-done', index)
    )
  }

  protected render() {
    return this.todos.map((todo, index) => html`
      <todo-item
        .todo=${todo}
        @toggle-done=${() => this.toggleDone(index)}
      >
        ${todo.text}
      </todo-item>
    `)
  }
}
