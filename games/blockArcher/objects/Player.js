class Player extends GameObject{

    start(){
        this.addComponent(new Rectangle("Black", "Grey", 5))
        this.addComponent(new RigidBody(0))
        this.addComponent(new HealthPool(100))
        this.addComponent(new PlayerController(10))
        super.start()
    }

}