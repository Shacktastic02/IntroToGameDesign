class Line2{

    constructor(p1, p2){
        this.p1 = p1
        this.p2 = p2
    }

    equals(other){
        return this.p1.equals(other.p1) && this.p2.equals(other.p2)
    }

    static fromGameobject(line){
        return new Line2(new Vector2(line.transform.x, line.transform.y), new Vector2(line.transform.x2, line.transform.y2))
    }

    tangent(){
        return new Vector2(this.p2.x - this.p1.x, this.p2.y - this.p1.y)
    }

    tanNormalized(){
        return this.tangent.normalized()
    }

    normal(){
        return new Vector2(this.tanNormalized().y, -this.tanNormalized().x)
    }

    abc(){
        let A = this.p2.y - this.p1.y
        let B = -(this.p2.x - this.p1.x)
        let C = -new Vector2(A, B).dot(this.p1)

        return [A, B, C]
    }
}