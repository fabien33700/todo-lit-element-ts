import { css } from "lit-element";

export default css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: var(--todo-app-width, 45vw);
  }

  .column:first-child {
    margin-top: 10px;
  }

  .column > * {
    margin-bottom: 10px;
  }
`
