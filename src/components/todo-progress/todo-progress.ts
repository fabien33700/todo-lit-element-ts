import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators";
import { styleMap } from "lit/directives/style-map";

import styles from "./todo-progress.css";

/**
 * Bounds a number between min and max.
 * @param value The value
 * @param range A tuple of the [min, max] bounds
 * @returns The value between min and max
 */
function bound(value: number, range: [number, number]) {
  let [min, max] = range;
  if (max < min) [min, max] = [max, min];
  return value < min ? min : value > max ? max : value;
}

@customElement("todo-progress")
export default class TodoProgressElement extends LitElement {
  static styles = styles;

  @property({
    type: Number,
  })
  percent: number = 0;

  render() {
    const percent = bound(this.percent, [0, 100]);
    const style = { width: `${percent}%` };
    return html`
      <div class="progress">
        <div class="todo-progress" style=${styleMap(style)}>&nbsp;</div>
      </div>
    `;
  }
}
