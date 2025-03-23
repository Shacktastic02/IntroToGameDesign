class WASDMovement extends Component{

    update(){
        if (Input.keysdown.includes("KeyW")) {
            this.transform.y -= this.transform.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyS")) {
            this.transform.y += this.transform.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyA")) {
            this.transform.x -= this.transform.speed * Time.delta
        }
        if (Input.keysdown.includes("KeyD")) {
            this.transform.x += this.transform.speed * Time.delta
        }
    }
}