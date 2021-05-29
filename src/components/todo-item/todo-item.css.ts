import {css} from 'lit';

export default css`
  :host {
    display: flex;
    flex-direction: row;
    margin-bottom: 3px;
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
    background: var(--todo-check-inactive-color-hover, none);
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
    background: var(--todo-check-inactive-color-hover, #eee);
  }

  .delete-btn:hover {
    background: var(--todo-check-delete-button-color, #c0392b);
    color: white;
  }

  .checkbox.done {
    background: var(--todo-check-active-color, #7dcea0);
    color: white;
  }

  .checkbox.done:hover {
    background-color: var(--todo-check-active-color-hover, #229954);
  }
`;
