class Enemy extends GameObject{

    start(){
        this.addComponent(new Circle("Red", "grey", 5))
        this.addComponent(new HealthPool(100))
        this.addComponent(new RigidBody(0))
        this.addComponent(new EnemyController())
    }

}