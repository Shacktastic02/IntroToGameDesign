class Player extends Scene{

    posX
    posY
    health
    speed

    constructor(x, y) {
        super()
        this.posX = x
        this.posY = y
        this.health = 100
        this.speed = 5
    }

    draw(){

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.strokeStyle = "grey"
        ctx.lineWidth = 5
        ctx.rect(this.posX, this.posY, 50, 75)
        ctx.fill()
        ctx.stroke()
    }

}