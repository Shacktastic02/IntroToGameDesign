class Collisions{

    
    static inCollision(obj1, obj2){
        if(obj1.findComponent(Circle) && obj2.findComponent(Circle)) return Collisions.circleCircle(obj1, obj2)
        if(obj1.findComponent(Circle) && obj2.findComponent(Rectangle)) return Collisions.circleRectangle(obj1, obj2)
        if(obj1.findComponent(Circle) && obj2.findComponent(Line)) return Collisions.circleLine(obj1, obj2)
        if(obj1.findComponent(Rectangle) && obj2.findComponent(Circle)) return Collisions.rectangleCircle(obj1, obj2)
        if(obj1.findComponent(Rectangle) && obj2.findComponent(Rectangle)) return Collisions.rectangleRectangle(obj1, obj2)
        if(obj1.findComponent(Rectangle) && obj2.findComponent(Line)) return Collisions.rectangleLine(obj1, obj2)
        if(obj1.findComponent(Line) && obj2.findComponent(Circle)) return Collisions.lineCircle(obj1, obj2)
        if(obj1.findComponent(Line) && obj2.findComponent(Rectangle)) return Collisions.lineRectangle(obj1, obj2)
        if(obj1.findComponent(Line) && obj2.findComponent(Line)) return Collisions.lineLine(obj1, obj2)
        
    }


    //////////////////////////////////////////// Primary Functions ///////////////////////////////////////

    static circleCircle(obj1, obj2){
        return Vector2.fromGameObject(obj1).minus(Vector2.fromGameObject(obj2)).length() < obj1.transform.r + obj2.transform.r
    }

    static circleRectangle(circ, rect){
        let circCenter = Vector2.fromGameObject(circ)
        let r = circ.transform.r
        let [left, right, top, bottom] = Collisions.getRectangleSides(rect)
        let [ul, ur, lr, ll] = Collisions.getRectCorners(rect)

        if (Collisions.isPointInRectangle(circCenter, left, right, top, bottom)) return true
        if (Collisions.circleLineSegment(circCenter, r, ul, ur)) return true
        if (Collisions.circleLineSegment(circCenter, r, ur, lr)) return true
        if (Collisions.circleLineSegment(circCenter, r, lr, ll)) return true
        if (Collisions.circleLineSegment(circCenter, r, ll, ul)) return true
        return false

    }

    static circleLine(circ, line){
        let circCenter = Vector2.fromGameObject(circ)
        let r  = circ.transform.r
        let [p1, p2] = Collisions.getLineEnds(line)

        return Collisions.circleLineSegment(circCenter, r, p1, p2)
    }

    static rectangleCircle(rect, circ){
        return Collisions.circleRectangle(circ, rect)
    }

    static rectangleRectangle(rect1, rect2){
        let [left1, right1, top1, bottom1] = Collisions.getRectangleSides(rect1)
        let [left2, right2, top2, bottom2] = Collisions.getRectangleSides(rect2)

        return !(left1 > right2 || right1 < left2 || top1 > bottom2 || bottom1 < top2)
    }

    static rectangleLine(rect, line){
        let [left, right, top, bottom] = Collisions.getRectangleSides(rect)
        let [ul, ur, lr, ll] = Collisions.getRectangleSegments(rect)
        let [p1, p2] = Collisions.getLineEnds(line)

        if (Collisions.segmentSegment(p1, p2, ul, ur)) return true
        if (Collisions.segmentSegment(p1, p2, ur, lr)) return true
        if (Collisions.segmentSegment(p1, p2, lr, ll)) return true
        if (Collisions.segmentSegment(p1, p2, ll, ul)) return true

        return false
    }

    static lineCircle(line, circ){
        return Collisions.circleLine(circ, line)
    }

    static lineRectangle(line, rect){
        return Collisions.rectangleLine(rect, line)
    }

    static lineLine(line1, line2){
        let [start1, end1] = getLineEnds(line1)
        let [start2, end2] = getLineEnds(line2)
        return Collisions.segmentSegment(start1, end1, start2, end2)  
    }


/////////////////////////////////////////////////// Helper Functions ////////////////////////////////////////////////////



    static getRectangleSides(rect){
        let left = rect.transform.x - rect.transform.w / 2
        let right = rect.transform.x + rect.transform.w / 2
        let top = rect.transform.y - rect.transform.h / 2
        let bottom = rect.transform.y + rect.transform.h / 2

        return [left, right, top, bottom]
    }

    static getRectCorners(rect){
        let [left, right, top, bottom] = this.getRectangleSides(rect)
        let ul = new Vector2(left, top)
        let ur = new Vector2(right, top)
        let lr = new Vector2(right, bottom)
        let ll = new Vector2(left, bottom)
        return [ul, ur, lr, ll]
    }

    static getRectangleSegments(rect){
        let [ul, ur, lr, ll] = this.getRectCorners(rect)
        return[
            new Line2(ul, ur),
            new Line2(ur, lr),
            new Line2(lr, ll),
            new Line2(ll, ul)
        ] 
    }

    static getLineEnds(line){
        let p1 = new Vector2(line.transform.x, line.transform.y)
        let p2 = new Vector2(line.transform.x2, line.transform.y2)

        return [p1, p2]
    }

    static closestPointInfLine(point, p1, p2){
        let pointMinusp1 = point.minus(p1)
        let tan = p2.minus(p1)
        let normTan = tan.normalized()
        let pointOnLine = p1.add(normTan.scaled(normTan.dot(pointMinusp1)))

        return pointOnLine
    }

    static closestPointLineSeg(point, p1, p2){
        let pointOnLine = Collisions.closestPointInfLine(point, p1, p2)
        let tan = p2.minus(p1)
        let normTan = tan.normalized()
        let leng = tan.length
        let toPoint = pointOnLine.minus(p1)
        let toPointLeng = normTan.dot(toPoint)

        if (toPointLeng < 0) return p1
        if (toPointLeng > leng) return p2
        return pointOnLine
    }

    static findABC(p1, p2){
        let a = p2.y - p1.y
        let b = -(p2.x - p1.x)
        let c = - new Vector2(a, b).dot(p1)

        return [a, b, c]
    }

    static isPointInRectangle(point, left, right, top, bottom){
        return point.x > left && point.x < right && point.y > top && point.y < bottom
    }

    static isPointOnLineWithinSegment(point, p1, p2){
        let tan = p2.minus(p1)
        let normTan = tan.normalized()
        let leng = tan.length
        let toPoint = pointOnLine.minus(p1)
        let toPointLeng = normTan.dot(toPoint)

        return toPointLeng >= 0 && toPointLeng <= leng
    }

    static segmentSegment(start1, end1, start2, end2){
        let [a1, b1, c1] = Collisions.findABC(start1, end1)
        let [a2, b2, c2] = Collisions.findABC(start2, end2)

        let x = b1 * c2 - b2 * c1
        let y = c1 * a2 - c2 * a1
        let z = a1 * b2 - a2 * b1

        if (z == 0) return false

        let collision = new Vector2(x/z, y/z)

        return Collisions.isPointOnLineWithinSegment(collision, start1, end1) && Collisions.isPointOnLineWithinSegment(collision, start2, end2)
    }

    static circleLineSegment(circCenter, r, p1, p2){
        let closestPoint = this.closestPointLineSeg(circCenter, p1, p2)
        let diff = circCenter.minus(closestPoint)
        let leng = diff.length()
        if(leng < r) return true
        return false
    }

}