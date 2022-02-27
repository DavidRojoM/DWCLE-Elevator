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
    this._distanceFloors = distanceFloors;
  }

  public isOpen(): boolean {
    return this._door.open;
  }

  public getBuilding() {}

  get status(): Status {
    return this._status;
  }

  private set status(value: Status) {
    this._status = value;
  }

  private get door(): Door {
    return this._door;
  }

  private openDoor() {
    this._door.open = true;
  }

  private closeDoor() {
    this._door.open = false;
  }

  public request(nextFloor: number) {}

  private move(nextFloor: number) {}

  public reset() {}

  public toString() {}
}
