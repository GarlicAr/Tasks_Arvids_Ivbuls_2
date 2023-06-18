import { Vehicle } from "./Vehicle";
export class Bicycle extends Vehicle {
    public isLockAviable = false;
    constructor(){
        super();
        this.wheels = 2;
    }
}