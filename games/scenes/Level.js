class Level extends Scene{

    player

    start(){
        player = new Player(200, 500)
        this.subscenes.push(player)
    }


}