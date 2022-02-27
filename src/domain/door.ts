export class Door {
  private _open = false;

  constructor() {}

  isOpen(): boolean {
    return this.open;
  }

  setOpen(open: boolean) {
    console.log((open ? "opening" : "closing") + " the door...");
    return new Promise((resolve) => {
      setTimeout(() => {
        this.open = open;
        console.log("Door " + open ? "opened" : "closed");
        resolve(open);
      }, 2000);
    });
  }

  public toString() {
    return `The door is ${this._open}`;
  }
}
