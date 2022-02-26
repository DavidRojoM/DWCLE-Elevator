export class Door {
  private _open = false;

  constructor() {}

  get open(): boolean {
    return this._open;
  }

  set open(value: boolean) {
    this._open = value;
  }

  public toString() {
    return `The door is ${this._open}`;
  }
}
