class EnemyController extends Component{


    start(){
        this.timeTilSwing = 0
    }

    update(){
        if(this.parent.findComponent(RigidBody).vx == 0){
            if(this.timeTilSwing <= 0){
                Engine.currScene.addGameObject(new Hitbox("enemyhitbox"), this.transform.x, this.transform.y, 13, 1)
                this.timeTilSwing = 8
            }
        }
        if(this.timeTilSwing > 0){
            this.timeTilSwing -= Time.delta
        }

        if(this.transform.x < 0){
            this.parent.destroy()
            Engine.nextScene = new Loss()
        }
    }
}