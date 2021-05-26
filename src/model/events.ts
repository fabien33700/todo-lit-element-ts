
export declare type EventType = 'toggle-done' | 'delete'

export default class TodoEvent extends CustomEvent<{ index?: number }> {
  constructor(
    eventType: EventType,
    index?: number
  ) {
    super(eventType, {
      detail: { index: index ?? -1 },
      bubbles: true,
      composed: true,
    });
  }
}
