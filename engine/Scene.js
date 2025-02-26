class Scene{

    gameObjects = []


    update(){
        for(let gameObject of this.gameObjects){
            gameObject.update()
        }
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
        }
    }

    addGameObject(gameObject, x = 0, y = 0, r = 1, len = 1, wid = 1){
        this.gameObjects.push(gameObject)
        gameObject.transform.x = x
        gameObject.transform.y = y
        gameObject.transform.r = r
        gameObject.transform.len = len
        gameObject.transform.wid = wid
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