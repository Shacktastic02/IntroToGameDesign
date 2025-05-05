class Projectile extends GameObject{

    constructor(){
        super()
        this.addComponent(new Circle("black", "transparent", 0))
        this.addComponent(new RigidBody(Globals.gravity))
        this.addComponent(new ProjectileController())
    }

    start(){
        this.transform.r = 1
        this.transform.h = 1
    }

}