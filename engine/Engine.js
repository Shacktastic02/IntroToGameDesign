class Engine{
    static currScene
    static nextScene

    static tick(){
        if(Engine.nextScene){
            Engine.curScene = Engine.nextScene
            Engine.nextScene = null
            Engine.curScene.start()
        }
        Engine.currScene.update()
        Engine.currScene.draw()
        Input.update()
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
        canvas.width = 750
        canvas.height = 450
    }

    static start(){
        Engine.setup()
        Engine.currScene.start()
        setInterval(Engine.tick, Time.msBtwFrames)
    }
}