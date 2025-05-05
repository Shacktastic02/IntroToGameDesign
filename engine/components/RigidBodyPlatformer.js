class RigidBodyPlatformer extends RigidBody{

    constructor(gravity = 0){
        super(gravity)

        this.lastCollisionX
        this.lastCollisionY
    }

    update(){
        this.lastCollisionX = undefined
        this.lastCollisionY = undefined

        let origTransform = new Vector2(this.transform.x, this.transform.y)
        this.transform.x += this.vx * Time.delta
        
        let physicsStatics = Engine.currScene.gameObjects.filter(go => go.findComponent(PhysicsStatic))

        for(let physStat of physicsStatics){
            if(Physics.resolvePrecise(origTransform, this.parent, physStat))
                this.lastCollisionX = physStat
        }

        origTransform = new Vector2(this.transform.x, this.transform.y)

        this.vy += this.gravity * Time.delta
        this.transform.y += this.vy * Time.delta

        for(let physStat of physicsStatics){
            if(Physics.resolvePrecise(origTransform, this.parent, physStat))
                this.lastCollisionY = physStat
        }
    }
}
