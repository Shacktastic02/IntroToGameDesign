class Level extends Scene{

    start(){

       this.addGameObject(new Player("player"), 200 , 100, 1, 50, 25, 20)
       this.addGameObject(new Ally("ally"), 200, 200, 10, 1, 1, 10)
       this.addGameObject(new Enemy("enemy"), 250, 200, 10, 1, 1, 10)
       this.addGameObject(new GameObject().addComponent(new LevelController()))


       super.start()
    }

}