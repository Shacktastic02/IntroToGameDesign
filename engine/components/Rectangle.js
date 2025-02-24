class Rectangle extends Component{

    constructor(fillStyle, strokeStyle, lineWidth){
        super()
        this.fillStyle = fillStyle
        this.strokeStyle = strokeStyle
        this.lineWidth = lineWidth
    }

    draw(){
        ctx.beginPath()
        ctx.fillStyle = this.fillStyle
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.lineWidth
        ctx.rect(this.transform.x, this.transform.y, this.transform.wid, this.transform.len)

        ctx.fill()
        ctx.stroke()
    }
}