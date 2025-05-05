class Victory extends Scene{

    constructor(){
        super("grey")
    }

    start(){

        //background
        this.addGameObject(new GameObject("sky", -10), canvas.width / 2, canvas.height/6, canvas.width, canvas.height / 3 + 40)
        this.findGameObject("sky").addComponent(new Rectangle("LightBlue", "transparent", 0))
        this.addGameObject(new GameObject("sun", -10), 3*canvas.width/4, canvas.height/6, 20, 0)
        this.findGameObject("sun").addComponent(new Circle("yellow", "transparent", 0))
        this.addGameObject(new GameObject("ground", -10), canvas.width / 2, (2*canvas.height)/3 + 20, canvas.width, (2*canvas.height)/3)
        this.findGameObject("ground").addComponent(new Rectangle("green", "green", 1))

        this.addGameObject(new GameObject().addComponent(new DebugTool()))

        //text
        this.addGameObject(new GameObject("textbox", 0), canvas.width/2, canvas.height/2, 50, 25)
        this.findGameObject("textbox").addComponent(new Rectangle("black", "transparent", 0))

        this.addGameObject(new GameObject("message"),  canvas.width/2 - 18, canvas.height/2 + 2)
        this.findGameObject("message").addComponent(new Text("white", "Calibri", "You win!"))

    }
}