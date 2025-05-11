class ProjectileController extends Component{


    constructor(){
        super()
        this.initialHeight = Engine.currScene.findGameObject("player").transform.y
        this.inFlight = true
        this.timeSinceLanded = 0
    }

    update(){
        if(this.inFlight){
            //check ground collision
            if(this.transform.y > this.initialHeight+2){
                this.parent.findComponent(RigidBody).vx = 0
                this.parent.findComponent(RigidBody).vy = 0
                this.parent.findComponent(RigidBody).gravity = 0
                this.inFlight = false
            }
            let enemies = Engine.currScene.findGameObjects("enemy")
            for(let enemy of enemies){
                if(Collisions.inCollision(this.parent, enemy)){
                    enemy.findComponent(HealthPool).hp -= 50
                    this.parent.destroy()
                    if(enemy.findComponent(HealthPool).hp <= 0){
                        Globals.score += 5
                    }
                }
            }
        }else{
            this.timeSinceLanded += Time.delta
            if(this.timeSinceLanded >= 3)
                this.parent.destroy()
        }
    }
}