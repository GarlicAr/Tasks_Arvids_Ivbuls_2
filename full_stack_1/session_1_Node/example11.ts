import { Vehicle } from "./modules/Vehicle";
import { Bicycle } from "./modules/Bicycle";

let w1 = new Vehicle();

w1.setWheels(6);

console.log(w1.getWheels());
/*
let simpleV = new Vehicle();

simpleV = new Vehicle;
*/



let bicyle = new Bicycle();

console.log(bicyle.getWheels(), bicyle.isLockAviable);