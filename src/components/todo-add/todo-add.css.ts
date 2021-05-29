import { css } from 'lit'

export default css`
  .add-todo {
    border: none;
    border-bottom: solid 1px #ccc;
    background: none;
    outline: none;
    margin-top: 5px;
    padding-bottom: 5px;
    width: 100%;
    transition: 0.3s;
  }
  .add-todo::placeholder {
    font-style: italic;
  }
  .add-todo:hover {
    border-bottom: solid 1px #5bc0de;
  }
`;
