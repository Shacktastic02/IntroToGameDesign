class Engine{
    static currScene
    static nextScene
    static lastms = 0

    static tick(ms){
        Time.delta = (ms - Engine.lastms)/1000
        Engine.lastms = ms
        if(Engine.nextScene){
            Engine.curScene = Engine.nextScene
            Engine.nextScene = null
        }
        
        Engine.currScene.update()
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
        ctx.clearRect(0,0,canvas.width, canvas.height)
        Engine.currScene.draw()
        Input.update()
        requestAnimationFrame(Engine.tick)
    }

    static setup(){
        window.addEventListener("keydown", Input.keydown)
        window.addEventListener("keyup", Input.keyup)

        window.addEventListener("mousemove", Input.mousemove)
        window.addEventListener("mousedown", Input.mousedown)
        window.addEventListener("mouseup", Input.mouseup)

        document.addEventListener("wheel", Input.wheel)

        document.addEventListener("contextmenu", event => event.preventDefault());

        
       
        canvas = document.getElementById("canv")
        ctx = canvas.getContext("2d")
        
    }

    static start(){
        Engine.setup()
        requestAnimationFrame(Engine.tick)
    }
}