class Scene{

    gameObjects = []
    started

    constructor(backgroundColor = "white"){
        this.backgroundColor = backgroundColor
        this.started = false

        if(typeof Camera !== undefined){
            this.addGameObject(new GameObject("Camera"))
        }
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

        ctx.fillStyle = this.backgroundColor
        ctx.beginPath()
        ctx.rect(0, 0, canvas.width, canvas.height)
        ctx.fill()
        ctx.save()
        {
            if(typeof Camers !== undefined){
                ctx.setTransform(Camera.getTransform())
            }

            let sorted = this.gameObjects.toSorted((a, b) => a.layer - b.layer)
            sorted.forEach(g => g.draw())

        }
        ctx.restore()

        let xratio = canvas.width / Camera.main.transform.w
        let yratio = canvas.height / Camera.main.transform.h
        let ratio = Math.min(xratio, yratio)

        ctx.fillStyle = "black"
        ctx.beginPath()
        if(xratio > yratio){
            let size = (canvas.width - Camera.main.transform.w * ratio) / 2
            ctx.rect(0, 0, size, canvas.height)
            ctx.rect(canvas.width - size, 0, size,  canvas.height)
        }
        else{
            let size = (canvas.height - Camera.main.transform.h * ratio) / 2
            ctx.rect(0, 0, canvas.width, size)
            ctx.rect(0, canvas.height - size, canvas.width, size)
        }
        ctx.fill()
        
        this.gameObjects.toSorted((a, b) => a.layer - b.layer).forEach(g => g.drawUI())
    }

    start(){ 
        for(let gameObject of this.gameObjects){
            if(!gameObject.started){
                gameObject.start()
                gameObject.started = true
            }
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