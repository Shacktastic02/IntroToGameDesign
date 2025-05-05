class Hitbox extends GameObject{

    start(){
        this.team = 0
        this.addComponent(new Circle("transparent", "transparent", 2))
    }
}