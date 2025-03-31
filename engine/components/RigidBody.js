class RigidBody extends Component{

    constructor(gravity = 0){
        super()

        this.gravity = gravity
        this.vx = 0
        this.vy = 0
    }

    update(){
        this.vy += gravity * Time.delta

        this.transform.x += vx * Time.delta
        this.teansform.y += vy * Time.delta
    }
}