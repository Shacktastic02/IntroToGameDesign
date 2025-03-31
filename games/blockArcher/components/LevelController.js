class LevelController extends Component{

    constructor(nextScene){
        super()
        this.nextScene = nextScene
    }

    update(){
        let allies = Engine.currScene.findGameObjects("ally")
        let enemies = Engine.currScene.findGameObjects("enemy")


        //collision counts
        for(let ally of allies){
            for(let enemy of enemies){
                if(Collisions.inCollision(ally.transform.x, ally.transform.y, ally.transform.r, enemy.transform.x, enemy.transform.y, enemy.transform.r)){
                    ally.numCollisions++
                    enemy.numCollisions++
                }      
            }
        }
        //npc collision effects
        for(let ally of allies){
            if(ally.numCollisions > 0){
                ally.transform.speed = 0
            }else{
                ally.transform.speed = 10
            }
            ally.numCollisions = 0
        }
        for(let enemy of enemies){
            if(enemy.numCollisions > 0){
                enemy.transform.speed = 0
            }else{
                enemy.transform.speed = 10
            }
            enemy.numCollisions = 0
        }
        


        //spawn allies
        let posY = Math.floor(Math.random() * (200 - 300 + 1) + 300)
        if((Math.floor(Math.random() * (100 - 1 + 1)) + 1) <= 1){
            Engine.currScene.addGameObject(new Ally("ally"), 0, posY , 10, 1, 1, 10)
        }

        //spawn enemies
        if((Math.floor(Math.random() * (100 - 1 + 1)) + 1) <= 1){
            Engine.currScene.addGameObject(new Enemy("enemy"), 750, posY , 10, 1, 1, 10)
        }

    }

}