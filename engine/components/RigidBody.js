class RigidBody extends Component{

    constructor(gravity = 0){
        super()

        this.gravity = gravity
        this.vx = 0
        this.vy = 0
    }

    update(){
        this.vy += this.gravity * Time.delta

        this.transform.x += this.vx * Time.delta
        this.transform.y += this.vy * Time.delta
    }
}