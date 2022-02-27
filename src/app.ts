import { Elevator } from "./domain/elevator";
import { Building } from "./domain/building";
const building = new Building("Politecnico");
const elevator = new Elevator(building, 20, "11111111");
const elevator2 = new Elevator(building, 15, "22222222");

building.addElevator(elevator);
building.addElevator(elevator2);

console.log(elevator.toString());
console.log(elevator2.toString());

elevator
  .request(1)
  .then(() => {
    console.log(elevator.toString());
  })
  .then(() => elevator.request(6))
  .then(() => console.log(elevator.toString()))
  .then(() => elevator.request(1))
  .then(() => console.log(elevator.toString()));

elevator2.request(7).then(() => {
  console.log(elevator2.toString());
});
