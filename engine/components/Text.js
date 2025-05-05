class Text extends Component{

    constructor(fill, font, text){
        super()

        this.fill = fill
        this.font = font
        this.text = text
    }

    draw(){
        ctx.fillStyle = this.fill
        ctx.font = this.font
        ctx.fillText(this.text, this.transform.x, this.transform.y)
    }
}

class UIText extends Comment{
    constructor(fill, font, text){
        super()

        this.fill = fill
        this.font = font
        this.text = text
    }

    drawUI(){
        ctx.fillStyle = this.fill
        ctx.font = this.font
        ctx.fillText(this.text, this.transform.x, this.transform.y)
    }
}