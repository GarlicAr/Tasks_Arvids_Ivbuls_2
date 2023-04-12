class Agent{
    private position: Position;
    private name: String;
    private isAlive: boolean;

    constructor(name: String, position: Position, isAlive: boolean){
        this.name = name;
        this.position = position;
        this.isAlive = isAlive;
    }

    public move(position: Position){
        this.position = position;
    }

    public getName(): String{
        return this.name;
    }

    public setName(name: String){
        this.name = name;
    }

    public getPosition(): Position {
        return this.position;
    }

    public isStillAlive(): boolean {
        return this.isAlive;
    }

    public kill(){
        this.isAlive = false;
    }


}