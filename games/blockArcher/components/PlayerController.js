class PlayerController extends Component{


    start(speed = 100){
        this.speed = speed
        this.power = 550
    }

    update(){
        //movement
        let body = this.parent.findComponent(RigidBody)
        body.vx = 0
        body.vy = 0
        let v = new Vector2(0,0)
        if (Input.keysdown.includes("KeyW")) v.y = -1
        if (Input.keysdown.includes("KeyS")) v.y = 1
        if (Input.keysdown.includes("KeyA")) v.x  = -1
        if (Input.keysdown.includes("KeyD")) v.x = 1

        body.vx = v.normalized().x * this.speed
        body.vy = v.normalized().y * this.speed

        //player bounds
        if(this.transform.y < 300) this.transform.y = 300   
        if(this.transform.y > 575) this.transform.y = 575

        if(this.transform.x < 15) this.transform.x = 15
        if(this.transform.x > canvas.width - 15) this.transform.x = canvas.width - 15


        //shooting
        if(Input.mouseUpThisFrame){
            let projectile = new Projectile("projectile", -1)
            let screenMouse = new Vector2(Input.lastMouseX, Input.lastMouseY)
            let screenToWorld = Camera.getTransform().inverse()
            let worldMouse = screenToWorld.transformPoint(new DOMPoint(screenMouse.x, screenMouse.y))
            let worldMouseLoc = new Vector2(worldMouse.x, worldMouse.y)
            let dir = worldMouseLoc.minus(this.transform.position).normalized()

            projectile.findComponent(RigidBody).vx = dir.x * this.power
            projectile.findComponent(RigidBody).vy = dir.y * this.power

            Engine.currScene.addGameObject(projectile, this.transform.x + dir.x, this.transform.y + dir.y)
        }
        
    }
}