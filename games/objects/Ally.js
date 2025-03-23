class Ally extends GameObject{

    start(){
        this.addComponent(new Circle("black", "grey", 5))
        this.addComponent(new NPCMovement("Ally"))
        this.addComponent(new NumCollisions())
    }

    


}
