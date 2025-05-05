class Circle extends Component{

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
        ctx.lineWidth = this.lineWidth / this.transform.r


        ctx.save()

            ctx.translate(this.transform.x, this.transform.y)
            ctx.scale(this.transform.r, this.transform.r)
            ctx.arc(0, 0, 1, 0, Math.PI * 2)
            ctx.fill()
            ctx.stroke()

        ctx.restore()
    }
}