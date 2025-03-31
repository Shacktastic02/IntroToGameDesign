class Line extends Component{

    constructor(strokeStyle, width){
        super()

        this.strokeStyle = strokeStyle
        this.width = width
    }

    draw(){
        ctx.beginPath()
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.width
        ctx.moveTo(this.transform.x, this.transform.y)
        ctx.moveTo(this.transform.x2, this.transform.y2)

        ctx.stroke()
    }

    abc(){
        let tan = this.tangent()
        let leng = this.length()
        let normTan = tan.normalized()

        let orthogX = normalized.y
        let orthogY = normalized.x

        let a = orthogX
        let b = orthogY

        let aPlusB = a * this.parent.transform.x + b * this.parent.transform.y

        let c = -aPlusB

        return {a, b, c}
    }

    tangent(){
        let deltaX = this.transform.x - this.trandform.x2
        let deltaY = this.trandform.y - this.trandform.y2

        return new Vector2(deltaX, deltaY)
    }

    length(){
        return this.tangent().length()
    }
}