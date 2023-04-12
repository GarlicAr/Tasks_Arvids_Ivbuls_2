class Vehicle{
    protected wheels: number = 0;

    constructor(){
        this.wheels= 4;
    }

    public getWheels(): number{
        return this.wheels;
    }

    public setWheels(wheels: number):void {
        this.wheels = wheels;
    }
}

let w1 = new Vehicle();

w1.setWheels(6);

console.log(w1.getWheels());
/*
let simpleV = new Vehicle();

simpleV = new Vehicle;
*/