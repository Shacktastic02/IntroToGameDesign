class WASDMovement extends Component{

    constructor(speed){
        super()
        this.speed = speed
    }

    update(){
        if (Input.keysdown.includes("KeyW")) {
            this.transform.y -= this.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyS")) {
            this.transform.y += this.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyA")) {
            this.transform.x -= this.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyD")) {
            this.transform.x += this.speed * Time.delta
        }
    }
}