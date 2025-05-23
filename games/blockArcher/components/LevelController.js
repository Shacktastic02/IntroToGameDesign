class LevelController extends Component{

    npcSpeed = 50

    constructor(nextScene){
        super()
        this.nextScene = nextScene

        Camera.main.transform.x = canvas.width /2
        Camera.main.transform.y = canvas.height / 2
        Camera.main.transform.w = canvas.width
        Camera.main.transform.h = canvas.height
        
        Globals.gravity = 450
        Globals.score = 0
    }

    update(){
        let allies = Engine.currScene.findGameObjects("ally")
        let enemies = Engine.currScene.findGameObjects("enemy")
        let player = Engine.currScene.findGameObject("player")
        let allyHitboxes = Engine.currScene.findGameObjects("allyhitbox")
        let enemyHitboxes = Engine.currScene.findGameObjects("enemyhitbox")
        let scoreText = Engine.currScene.findGameObject("score")


        //collision counts
        for(let ally of allies){
            for(let enemy of enemies){
                if(Collisions.inCollision(ally, enemy)){
                    ally.numCollisions++
                    enemy.numCollisions++
                }     
            }
        }
        for(let enemy of enemies){
            if(Collisions.inCollision(enemy, player)){
                enemy.numCollisions++
            }
        }
        //npc collision effects
        for(let ally of allies){
            if(ally.numCollisions > 0){
                ally.findComponent(RigidBody).vx = 0
            }else{
                ally.findComponent(RigidBody).vx = this.npcSpeed
            }
            ally.numCollisions = 0
        }
        for(let enemy of enemies){
            if(enemy.numCollisions > 0){
                enemy.findComponent(RigidBody).vx = 0
            }else{
                enemy.findComponent(RigidBody).vx = -this.npcSpeed
            }
            enemy.numCollisions = 0

        }

        //check attacks
        for(let hitbox of allyHitboxes){
            for(let enemy of enemies){
                if(Collisions.inCollision(hitbox, enemy)){
                    enemy.findComponent(HealthPool).hp -= 2
                }
            }
            hitbox.destroy()
        }
        for(let hitbox of enemyHitboxes){
            for(let ally of allies){
                if(Collisions.inCollision(hitbox, ally)){
                    ally.findComponent(HealthPool).hp -= 2
                }
            }
            hitbox.destroy()
        }

        scoreText.findComponent(UIText).text = ("Score: " + Globals.score)
        


        //generate random y value
        let posY = Math.floor(Math.random() * (325 - 550 + 1) + 550)

        // spawn allies
        if((Math.floor(Math.random() * (100 - 1 + 1)) + 1) <= 1){
            Engine.currScene.addGameObject(new Ally("ally"), -5, posY , 13, 1, 1, 1)
        }

        // spawn enemies
        if((Math.floor(Math.random() * (100 - 1 + 1)) + 1) <= 1){
            Engine.currScene.addGameObject(new Enemy("enemy"), canvas.width-5, posY , 13, 1, 1, 1)
        }


    }

}