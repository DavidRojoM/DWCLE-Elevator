import { Door } from "./door";
import { Status } from "./status.enum";

export class Elevator {
  protected _serialNumber: string = "A123456B";
  private _currentFloor: number = 0;
  private _distanceFloors: number = 0;
  private _door = new Door();
  private _status: Status;

  constructor() {}

  get serialNumber(): string {
    return this._serialNumber;
  }

  set serialNumber(serialNumber: string) {
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