class Ally extends GameObject{

    start(){
        this.addComponent(new Circle("black", "grey", 1))
        this.addComponent(new HealthPool(100))
        this.addComponent(new RigidBody(0))
        this.addComponent(new AllyController())
    }

    


}
