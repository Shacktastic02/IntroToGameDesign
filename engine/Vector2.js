class Vector2{

    constructor(x, y){
        this.x = x
        this.y = y
    }

    static Zero = new Vector2(0,0)


    static fromGameObject(object){
        return new Vector2(object.transform.x, object.transform.y)
    }

    equals(other){
        return this.x == other.x && this.y == other.y
    }

    length(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    normalized(){
        if(this.x == 0 && this.y == 0)
            return new Vector2(this.x, this.y)
        let leng = this.length()
        return new Vector2(this.x/leng, this.y/leng)
    }

    add(other){
        return new Vector2(this.x + other.x, this.y + other.y)
    }

    minus(other){
        return new Vector2(this.x - other.x, this.y - other.y)
    }

    dot(other){
        return this.x * other.x + this.y * other.y
    }

    scaled(scalar){
        return new Vector2(this.x * scalar, this.y * scalar)
    }

    negate(){
        return new Vector2(-this.x, -this.y)
    }

    perp(){
        return new Vector2(this.y, -this.x)
    }

    get dom(){
        return new DOMPoint(this.x, this.y)
    }

    
    
}