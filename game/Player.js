class Player {

    posX
    posY
    health

    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        health = 10
    }

    getPos() {
        return [posX, posY]
    }

    move(posX, posY){
        this.posX += posX
        this.posY += posY
    }

    getHP(){
        return health
    }

    setHP(damage){
        health -= damage
    }
}