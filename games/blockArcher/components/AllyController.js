class AllyController extends Component{


    start(){
        this.timeTilSwing = 0
    }

    update(){
        if(this.parent.findComponent(RigidBody).vx == 0){
            if(this.timeTilSwing <= 0){
                Engine.currScene.addGameObject(new Hitbox("allyhitbox"), this.transform.x, this.transform.y, 13, 1)
                this.timeTilSwing = 10
            }
        }
        if(this.timeTilSwing > 0){
            this.timeTilSwing -= Time.delta
        }

        if(this.transform.x > canvas.width){
            this.parent.destroy()
            Engine.nextScene = new Victory()
        }
    }
}