import { html, LitElement } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import TodoItemModel from '../../model/item'
import TodoEvent from '../../model/events'

import styles from './todo-item.css'

@customElement('todo-item')
export default class TodoItemElement extends LitElement {
  static styles = styles

  @property()
  private todo: TodoItemModel

  private toggleDone() {
    this.dispatchEvent(
      new TodoEvent('toggle-done')
    )
    this.todo = {
      ...this.todo,
      done: !this.todo.done
    }
  }

  protected render() {
    const { done } = this.todo
    const classes = {
      check: { checkbox: true, done },
      text: { text: true, done },
    }

    return html`
      <div id="todo-check"
        class=${classMap(classes.check)}
        @click=${this.toggleDone}
      >✓</div>
      <span id="todo-text" class=${classMap(classes.text)}>
        <slot></slot>
        <button id="delete-btn" class="delete-btn"
        >⨯</button>
      </span>
    `
  }
}
