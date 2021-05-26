import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators'

import TodoItemModel from '../../model/item'
import TodoEvent from '../../model/events'

import styles from './todo-app.css'

import '../todo-list/todo-list'

@customElement('todo-app')
export default class TodoAppElement extends LitElement {
  static styles = styles

  @property({ attribute: false })
  todos: TodoItemModel[] = [
    { text: 'Faire les courses', done: true },
    { text: 'Présentation Web Components', done: false },
  ]

  toggleDone(index: number) {
    const actual = this.todos[index]
    if (!actual) return;

    const updated = { ...actual, done: !actual.done }

    this.todos = this.todos
      .map((todo, i) =>
        i === index ? updated : todo)
  }

  render() {
    return html`
      <h1>Todo List</h1>
      <div>
        <todo-list
          .todos=${this.todos}
          @toggle-done=${ (e: TodoEvent) => this.toggleDone(e.detail.index) }
        >
        </todo-list>
        <!-- <todo-add></todo-add> -->
        <hr/>
        <!-- <todo-progress value="50"></todo-progress> -->
      </div>
    `
  }
}
