class WASDMovement extends Component{
    
    speed

    constructor(speed){
        super()
        this.speed = speed
    }

    update(){
        if (Input.keysdown.includes("KeyW")) {
            this.posY -= this.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyS")) {
            this.posY += this.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyA")) {
            this.posX -= this.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyD")) {
            this.posX += this.speed * Time.delta
        }
    }
}