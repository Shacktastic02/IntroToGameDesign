class Level extends Scene{

    start(){
       this.addGameObject(new Player("player"), 200 , 250, 1, 50, 25)
       //this.addGameObject(new Ally("ally"), 200, 300, 10, 1, 1)

       super.start()
    }

}