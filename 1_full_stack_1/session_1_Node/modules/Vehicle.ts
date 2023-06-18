export class Vehicle{
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