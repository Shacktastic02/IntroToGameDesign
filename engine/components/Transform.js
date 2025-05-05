class Transform extends Component{
    x
    y
    r
    h

    get w(){
        return this.r
    }

    set w(val){
        this.r = val
    }

    get x2(){
        return this.r
    }

    set x2(val){
        this.r = val
    }

    get y2(){
        return this.h
    }

    set y2(val){
        this.h = val
    }

    set Position(vector){
        this.x = vector.x
        this.y = vector.y
    }

    move(vector){
        this.x += vector.x
        this.y += vector.y
    }

    get position(){
        return new Vector2(this.x, this.y)
    }

}