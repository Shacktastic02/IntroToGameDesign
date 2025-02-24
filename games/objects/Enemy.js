class Enemy{

    posX
    posY
    health

    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        let health = 100

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