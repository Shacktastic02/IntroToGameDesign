class Scene{

    gameObjects = []
    started

    constructor(backgroundColor = "white"){
        this.backgroundColor = backgroundColor
        this.started = false
    }

    update(){
        //start if not already started
        if(!this.started){
            this.start()
            this.started = true
        }

        //start objects if not started
        for(let gameObject of this.gameObjects){
            if(!gameObject.started){
                gameObject.start()
                gameObject.started = true
            }
        }

        //update objects
        for(let gameObject of this.gameObjects){
            gameObject.update()
        }

        //filter out objects to destroy
        let keptGameObjects = []
        for(let gameObject of this.gameObjects){
            if(!gameObject.markToDestroy){
                keptGameObjects.push(gameObject)
            }
        }
        this.gameObjects = keptGameObjects

    }

    draw(){
        ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.fillStyle = this.backgroundColor
        ctx.beginPath()
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fill()
        for(let gameObject of this.gameObjects){
            gameObject.draw()
        }
    }

    start(){ 
        for(let gameObject of this.gameObjects){
            gameObject.start()
            gameObject.started = true
        }
        this.started = true
    }

    addGameObject(gameObject, x = 0, y = 0, r = 1, h=1){
        this.gameObjects.push(gameObject)
        gameObject.transform.x = x
        gameObject.transform.y = y
        gameObject.transform.r = r
        gameObject.transform.h = h
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