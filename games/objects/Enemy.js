class Enemy extends GameObject{

    start(){
        this.addComponent(new Circle("Red", "grey", 5))
        this.addComponent(new NPCMovement("Enemy"))
        this.addComponent(new NumCollisions())
    }

}