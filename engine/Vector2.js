class Vector2{

    constructor(x, y){
        this.x = x
        this.y = y
    }

    static fromGameObject(object){
        return new Vector2(object.transform.x, object.transform.y)
    }

    length(){
        return Math.sqrt(this.x**2 + this.y**2)
    }

    normalized(){
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
    
}