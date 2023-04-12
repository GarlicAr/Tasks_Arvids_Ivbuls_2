class Wumpus{
    private position: Position;


    public move(position: Position): void {
        this.position.hasStench = false;
        this.position = position;
        this.position.hasStench = true;
      }

    public getPosition(): Position{
        return this.position;
    }

    public setPosition(position: Position){
        this.position = position;
    }
}