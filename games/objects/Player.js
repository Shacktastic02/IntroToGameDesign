class Player extends GameObject{

    start(){
        this.addComponent(new Rectangle("Black", "Grey", 5))
        this.addComponent(new WASDMovement(50))
        super.start()
    }

    // takeDamage(dmg){
    //     this.health -= dmg
    //     if(this.health <= 0){
    //         this.isDead = true
    //     }
    // }

}