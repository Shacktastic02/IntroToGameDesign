class Level extends Scene{

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

        //actual objects
        this.addGameObject(new Player("player", 0), 400, 500, 25, 25)
        this.addGameObject(new GameObject().addComponent(new LevelController()))

        this.addGameObject(new GameObject("score", 10), 10, 20, 1, 1)
        this.findGameObject("score").addComponent(new UIText("black", "30px Calibri", "Score: "+ Globals.score))

       super.start()
    }

}