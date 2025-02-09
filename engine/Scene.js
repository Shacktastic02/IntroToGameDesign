class Scene{

    subscenes = []



    update(){
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        for(let i=0; i<this.subscenes.length(); i++){
            subscenes[i].update()
        }
    }

    draw(){
        for(let i=0; i<this.subscenes.length(); i++){
            subscenes[i].draw()
        }
    }

    start(){
        
    }

}