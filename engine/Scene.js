class Scene{

    subscenes = []


    update(){
        for(let subscene of this.subscenes){
            subscene.update()
        }
    }

    draw(){
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
       // ctx.clearRect(0, 0, canvas.width, canvas.height)
        for(let subscene of this.subscenes){
            subscene.draw()
        }
        
    }

    start(){
        
    }

}