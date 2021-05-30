import { css } from "lit";

export default css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    width: 60vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 45vw;
  }

  .column:first-child {
    margin-top: 10px;
  }

  .column > * {
    margin-bottom: 10px;
  }

  .todo-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 3px;
  }

  .add-todo {
    border: none;
    border-bottom: solid 1px #ccc;
    background: none;
    outline: none;
    margin-top: 5px;
    padding-bottom: 5px;
    transition: 0.3s;
  }
  .add-todo::placeholder {
    font-style: italic;
  }
  .add-todo:hover {
    border-bottom: solid 1px #5bc0de;
  }

  .todo-list {
    display: flex;
    flex-direction: column;
  }

  .text {
    transition: 0.3s;
  }

  .text.done {
    text-decoration: line-through;
    font-style: italic;
    color: #666;
  }

  .checkbox, .delete-btn {
    background: none;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
    padding: 2px 6px;
    margin-right: 5px;
    cursor: pointer;
  }

  .delete-btn {
    font-size: 12pt;
  }

  .checkbox:hover {
    background-color: #eee;
  }

  .delete-btn:hover {
    background-color: #c0392b;
    color: white;
  }

  .checkbox.done {
    background-color: #7dcea0;
    color: white;
  }

  .checkbox.done:hover {
    background-color: #229954;
  }

  .progress {
    border-radius: 3px;
    background-color: #eee;
    height: 5px;
  }
  .todo-progress {
    height: 5px;
    border-radius: 3px;
    background-color: #5bc0de;
    transition: 0.3s;
  }
`
