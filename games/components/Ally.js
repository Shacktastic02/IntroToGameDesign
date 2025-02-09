class Ally{

    posX
    posY
    health

    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        let health = 100
    }

        getPos(){
            return [posX, posY]
        }

        setPos(posX, posY){
            this.posX = posX
            this.posY = posY
        }

        getHP(){
            return health
        }

        setHP(damage){
            health -= damage
        }

}
