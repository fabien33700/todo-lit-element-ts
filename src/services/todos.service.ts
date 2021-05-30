import TodoItemModel from "../model/item";

const key = "webcomponents-todoapp";
const defaultTodos = [
  { text: "Faire les courses", done: true },
  { text: "Présentation Web Components", done: false },
];

export default class TodoService {
  private static checkLocalStorage() {
    if (!localStorage)
      throw new Error("Your browser does not support localStorage");
  }

  static load() {
    this.checkLocalStorage();

    const data = localStorage.getItem(key);
    const model = JSON.parse(data) as { todos: TodoItemModel[] };
    return model?.todos ?? [...defaultTodos];
  }

  static save(todos: TodoItemModel[]) {
    this.checkLocalStorage();

    if (!todos) return;
    localStorage.setItem(key, JSON.stringify({ todos }));
  }
}
