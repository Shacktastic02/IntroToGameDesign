class Level extends Scene{

    player

    start(){
        this.player = new Player(200, 250)
        this.subscenes.push(this.player)
    }


}