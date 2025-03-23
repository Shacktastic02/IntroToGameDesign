class Level extends Scene{

    start(){
       this.addGameObject(new Player("player"), 200 , 250, 1, 50, 25, 20)
       this.addGameObject(new Ally("ally"), 200, 400, 10, 1, 1, 10)
       this.addGameObject(new Enemy("enemy"), 250, 400, 10, 1, 1, 10)
       this.addGameObject(new GameObject().addComponent(new LevelController()))


       super.start()
    }

}