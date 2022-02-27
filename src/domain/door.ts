export class Door {
  private open = false;

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
    const state = this.open ? "open" : "closed";
    return `The door is ${state}`;
  }
}
