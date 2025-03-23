class Scene{

    gameObjects = []


    update(){

        for(let gameObject of this.gameObjects){
            if(!gameObject.started){
                gameObject.start()
                gameObject.started = true
            }
        }

        for(let gameObject of this.gameObjects){
            gameObject.update()
        }

        let keptGameObjects = []
        for(let gameObject of this.gameObjects){
            if(!gameObject.markToDestroy){
                keptGameObjects.push(gameObject)
            }
        }
        this.gameObjects = keptGameObjects

    }

    draw(){
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0,0,canvas.width, canvas.height)
        for(let gameObject of this.gameObjects){
            gameObject.draw()
        }
    }

    start(){ 
        for(let gameObject of this.gameObjects){
            gameObject.start()
            gameObject.started = true
        }
    }

    addGameObject(gameObject, x = 0, y = 0, r = 1, len = 1, wid = 1, speed = 10){
        this.gameObjects.push(gameObject)
        gameObject.transform.x = x
        gameObject.transform.y = y
        gameObject.transform.r = r
        gameObject.transform.len = len
        gameObject.transform.wid = wid
        gameObject.transform.speed = speed
    }

    findGameObject(name){
        for(let gameObject of this.gameObjects){
            if(gameObject.name == name){
                return gameObject
            }
        }
        return null
    }

    findGameObjects(name){
        let toReturn = []
        for(let gameObject of this.gameObjects){
            if(gameObject.name == name){
                toReturn.push(gameObject)
            }
        }
        return toReturn
    }

}