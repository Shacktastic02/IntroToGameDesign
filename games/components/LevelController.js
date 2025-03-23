class LevelController extends Component{

    constructor(nextScene){
        super()
        this.nextScene = nextScene
    }

    update(){
        let allies = Engine.currScene.findGameObjects("ally")
        let enemies = Engine.currScene.findGameObjects("enemy")


        //collisions
        for(let ally of allies){
            for(let enemy of enemies){
                if(Collisions.inCollision(ally.transform.x, ally.transform.y, ally.transform.r, enemy.transform.x, enemy.transform.y, enemy.transform.r)){
                    
                    ally.numCollisions++
                    enemy.numCollisions++

                }
                    
            }
        }
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
        let posY = Math.floor(Math.random() * (500 - 400 + 1) + 400)
        if((Math.floor(Math.random() * (100 - 1 + 1)) + 1) < 7){
            Engine.currScene.addGameObject(new Ally("ally"), 200, posY , 10, 1, 1, 10)
        }

        //spawn enemies
        if((Math.floor(Math.random() * (100 - 1 + 1)) + 1) < 7){
            Engine.currScene.addGameObject(new Enemy("enemy"), 250, posY , 10, 1, 1, 10)
        }

    }

}