import { Door } from "./door";
import { Status } from "./status.enum";
import { Building } from "./building";

export class Elevator {
  protected _serialNumber!: string;
  private _currentFloor = 0;
  private _distanceFloors!: number;
  private _door = new Door();
  private _status: Status = Status.IDLE;
  private readonly _building: Building;

  constructor(
    building: Building,
    distanceFloors = 20,
    serialNumber = "A123456B"
  ) {
    this._building = building;
    this.distanceFloors = distanceFloors;
    this.serialNumber = serialNumber;
  }

  get serialNumber(): string {
    return this._serialNumber;
  }

  set serialNumber(serialNumber: string) {
    if (serialNumber.length < 8) {
      throw new Error("Serial Number incorrect!! It must have 8 characters!!");
    }
    this._serialNumber = serialNumber;
  }

  get currentFloor(): number {
    return this._currentFloor;
  }

  set currentFloor(floor: number) {
    this._currentFloor = floor;
  }

  get distanceFloors(): number {
    return this._distanceFloors;
  }

  private set distanceFloors(distanceFloors: number) {
    if (distanceFloors < 10) {
      throw new Error("Floor Distance incorrect!! It must be greater than 9!!");
    }
    this._distanceFloors = distanceFloors;
  }

  public isOpen(): boolean {
    return this.door.isOpen();
  }

  public getBuilding() {}

  get status(): Status {
    return this._status;
  }

  private set status(status: Status) {
    this._status = status;
  }

  private get door(): Door {
    return this._door;
  }

  private openDoor() {
    this.status = Status.OPENING;
    return this._door.setOpen(true).then(() => {
      this.status = Status.IDLE;
    });
  }

  private closeDoor() {
    this.status = Status.CLOSING;
    return this._door.setOpen(false).then(() => {
      this.status = Status.IDLE;
    });
  }

  public request(nextFloor: number) {
    if (this.currentFloor === nextFloor) {
      return this.door.setOpen(true).then(() => {
        this.status = Status.IDLE;
      });
    }

    if (this.door.isOpen()) {
      return this.closeDoor()
        .then(() => this.move(nextFloor))
        .then(() => this.openDoor());
    }

    return this.move(nextFloor).then(() => this.openDoor());
  }

  private async move(nextFloor: number) {
    const direction = nextFloor > this.currentFloor ? "up" : "down";
    const distance =
      this.distanceFloors * Math.abs(nextFloor - this.currentFloor);

    this.status = Status.MOVING;
    const steps: Promise<any>[] = [];
    for (let i = 1; i <= distance; i++) {
      steps.push(
        new Promise((resolve) => {
          setTimeout(() => {
            console.log(`Moving ${direction}`);
            resolve(i);
          }, i * 100);
        })
      );
    }
    await Promise.all(steps);
    this.currentFloor = nextFloor;
    return;
  }

  public reset() {
    this.currentFloor = this.currentFloor;
    this.closeDoor().then(() => {
      console.log("reset");
    });
  }

  public toString(): string {
    return `
    [
    serialNumber: ${this.serialNumber}, 
    currentFloor: ${this.currentFloor}, 
    distanceFloors: ${this.distanceFloors}, 
    door: ${this.door}, 
    status: ${this.status}, 
    building: ${this._building}
    ]
    `;
  }
}
