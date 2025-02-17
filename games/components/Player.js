class Player extends Scene{

    posX
    posY
    health
    speed

    constructor(posX, posY) {
        this.posX = posX
        this.posY = posY
        health = 100
        speed = 5
    }



    getHP(){
        return health
    }

    setHP(damage){
        health -= damage
    }

    getSpeed(){
        return speed
    }

    setSpeed(newSpeed){
        this.speed = newSpeed
    }

    draw(ctx){

        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.strokeStyle = "White"
        ctx.lineWidth = 5
        ctx.rect(this.posX, this.posY, 50, 75)
        ctx.fill()
        ctx.stroke()
    }

    update(){

    }
}