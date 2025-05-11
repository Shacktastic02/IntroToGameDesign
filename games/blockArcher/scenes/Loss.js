class Loss extends Scene{

    constructor(){
        super("grey")
    }

    start(){

        //background
        this.addGameObject(new GameObject("sky", -10), canvas.width / 2, canvas.height/6, canvas.width, canvas.height / 3 + 40)
        this.findGameObject("sky").addComponent(new Rectangle("LightBlue", "transparent", 0))
        this.addGameObject(new GameObject("sun", -10), 3*canvas.width/4, canvas.height/6, 75, 0)
        this.findGameObject("sun").addComponent(new Circle("yellow", "transparent", 0))
        this.addGameObject(new GameObject("ground", -10), canvas.width / 2, (2*canvas.height)/3 + 20, canvas.width, (2*canvas.height)/3)
        this.findGameObject("ground").addComponent(new Rectangle("green", "green", 1))

        this.addGameObject(new GameObject().addComponent(new LossController()))

        //text
        this.addGameObject(new GameObject("textbox", 0), canvas.width/2, canvas.height/2, 250, 75)
        this.findGameObject("textbox").addComponent(new Rectangle("black", "transparent", 0))

        this.addGameObject(new GameObject("message"),  canvas.width/2 - 100, canvas.height/2 + 20)
        this.findGameObject("message").addComponent(new Text("white", "60px Calibri", "You lose"))

        this.addGameObject(new GameObject("score", 10), 10, 20, 1, 1)
        this.findGameObject("score").addComponent(new UIText("black", "30px Calibri", "Score: "+ Globals.score))

    }
}