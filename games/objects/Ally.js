class Ally extends GameObject{

    posX
    posY
    health

    constructor() {
        super()
        this.posX = 10
        this.posY = Math.floor(Math.random() * (400 - 100 + 1)) + 100
        this.health = 100
    }

    draw(){
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(this.posX, this.posY, 20, 0, 2* Math.PI)
    }


}
