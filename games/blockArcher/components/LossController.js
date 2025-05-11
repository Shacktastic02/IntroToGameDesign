class LossController extends Component{

    constructor(){     
        super()
        Camera.main.transform.x = canvas.width /2
        Camera.main.transform.y = canvas.height / 2
        Camera.main.transform.w = canvas.width
        Camera.main.transform.h = canvas.height
    }

    update(){
        if(Input.keysdown.includes("KeyR")){
            Engine.nextScene = new Level()
        }
    }
}