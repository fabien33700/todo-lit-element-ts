import { css } from 'lit';

export default css`
  .progress {
    border-radius: var(--todo-progress-border-radius);
    background-color: var(--todo-progress-inactive-color);
    height: var(--todo-progress-height);
  }
  .todo-progress {
    height: var(--todo-progress-height);
    border-radius: var(--todo-progress-border-radius);
    background-color: var(--todo-progress-active-color);
    transition: 0.3s;
  }
`;
