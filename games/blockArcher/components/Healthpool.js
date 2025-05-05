class HealthPool extends Component{
    

    constructor(hp){
        super()
        this.hp = hp
    }

    update(){
        if(this.hp<=0){
            this.parent.markToDestroy = true
        }
    }
}