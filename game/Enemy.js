class Enemy{
    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        let health = 10

        function getPos() {
            return [posX, posY]
        }

        function setPos(posX, posY){
            this.posX = posX
            this.posY = posY
        }

        function getHP(){
            return health
        }

        function setHP(damage){
            health -= damage
        }

    }
}