import { Elevator } from "./elevator";

export class Building {
  private elevators: Elevator[] = [];
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  public addElevator(elevator: Elevator) {
    this.elevators = [...this.elevators, elevator];
  }

  public removeElevator(elevator: Elevator) {
    this.elevators = this.elevators.filter(
      (buildingElevator) =>
        elevator.serialNumber !== buildingElevator.serialNumber
    );
  }

  public toString(): string {
    return `
    Building: ${this.name},
    Elevators: [${this.elevators.map((elevator) => elevator.serialNumber)}]`;
  }
}
