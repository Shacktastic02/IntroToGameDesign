class Scene{

    subscenes = []

    constructor(){
        
    }


    update(){
        for(let subscene of this.subscenes){
            subscene.update()
        }
    }

    draw(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        for(let subscene of this.subscenes){
            subscene.draw()
        }
        
    }

    start(){
        
    }

}