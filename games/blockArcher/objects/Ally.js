class Ally extends GameObject{

    start(){
        this.addComponent(new Circle("black", "grey", 1))
        this.addComponent(new HealthPool(10))
        this.addComponent(new RigidBody(0))
    }

    


}
