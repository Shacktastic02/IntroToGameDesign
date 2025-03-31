class NPCMovement extends Component{

    constructor(type){
        super()
        this.type = type
    }

    update(){
        if(this.type == "Ally"){
            this.transform.x += this.transform.speed * Time.delta
        }else{
            this.transform.x -= this.transform.speed * Time.delta
        }
    }

}