class RigisBodyReflective extends RigidBody{

    constructor(gravity = 0){
         super(gravity)

         this.lastCollision
    }

    update(){
        this.lastCollision = undefined

        let origTransform = new Vector2(this.transform.x, this.transform.y)

        this.transform.x += this.vx * Time.delta
        this.vy += gravity * Time.delta
        this.transform.y += this.vy * Time.delta

        let physicsStatics = Engine.currScene.gameObjects.filter(go => go.findComponent(PhysicsStatic))

        for(let physStat of physicsStatics){
            if(Physics.resolvePrecise(origTransform, this.parent, physStat))
                this.lastCollision = physStat
        }

        if(this.lastCollision){
            let N = Line2.fromGameObject(this.lastCollision).normal()
            let speed = new Vector2(this.vx, this.vy).length()
            let V = new Vector2(this.vx, this.vy).normalized()

            if(V.dot(N)>= 1) N = N.scaled(-1)
            
            let R = V.minus(N.scaled(2*V.dot(N)))

             this.vx = R.x * speed * .9
             this.vy = R.y * speed * .9
        }
    }

}