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
        ctx.lineTo(this.transform.x2, this.transform.y2)

        ctx.stroke()
    }

    abc(){
        let tan = this.tangent()
        let leng = this.length()
        let normed = tan.normalized()

        let orthogX = normed.y
        let orthogY = normed.x

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

class UILine extends Component{
    constructor(strokeStyle, width){
        super()

        this.strokeStyle = strokeStyle
        this.width = width
    }

    drawUI(){
        ctx.beginPath()
        ctx.strokeStyle = this.strokeStyle
        ctx.lineWidth = this.width
        ctx.moveTo(this.transform.x, this.transform.y)
        ctx.lineTo(this.transform.x2, this.transform.y2)

        ctx.stroke()
    }

    abc(){
        let tan = this.tangent()
        let leng = this.length()
        let normed = tan.normalized()

        let orthogX = normed.y
        let orthogY = normed.x

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