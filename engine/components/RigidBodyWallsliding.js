class RigidBodyWallsliding extends RigidBody{

    update(){

        let physicsStatics = Engine.currScnene.gameObjects.filter(go => go.findComponent(PhysicsStatic))

        let origPosition = this.transform.position

        this.vy += this.gravity * Time.delta

        let velocity = new Vector2(this.vx, this.vy)
        let maxComponent = Math.max(Math.abs(this.vx), Math.abs(this.vy))
        velocity = velocity.normalized().scaled(maxComponent)

        this.transform.move(velocity.scaled(Time.delta))

        let tries = 0

        while(true){
            if(tries++ >= 3){
                this.transform.position = origPosition
                break
            }

            let [minDistance, minObstcle, minFinalLocation] = Physics.findNearestCollisionTime(origPosition, this.parent, physicsStatics)

            this.transform.position = minFinalLocation

            if(!minObstcle) break

            let line2 = new Line2().fromGameObject(minObstcle)
            let circCenter = new Vector2.fromGameObject(this.parent)
            let closestPoint = Collisions.closestPointLineSeg(circCenter, line2.p1, line2.p2)
            let toClosePoint = circCenter.minus(closestPoint).normalized
            let tan = new Vector2(toClosePoint.y, -toClosePoint.x)

            if(velocity.dot(tan)<0) tan = tan.scaled(-1)

            let perp = toClosePoint
            this.transform.move(perp.scaled(.0001))
            let distTraveled = velocity.dot(tan)
            let direcTraveled = tan.scaled(distTraveled).scaled(Time.delt)

            this.transform.move(direcTraveled)

        }
        
    }
}