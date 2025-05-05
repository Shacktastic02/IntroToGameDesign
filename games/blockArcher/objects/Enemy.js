class Enemy extends GameObject{

    start(){
        this.addComponent(new Circle("Red", "grey", 1))
        this.addComponent(new HealthPool(10))
        this.addComponent(new RigidBody(0))
    }

}