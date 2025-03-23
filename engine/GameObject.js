class GameObject{
    
    components
    started
    markToDestroy

    constructor(name){
        this.name = name
        this.components = []
        this.addComponent(new Transform())
        this.started = false
        this.markToDestroy = false
        this.numCollisions = 0
    }

    get transform(){
        return this.components[0]
    }

    addComponent(component){
        this.components.push(component)
        component.parent = this
        return this
    }


    start(){
        for(let component of this.components){
            if(!component.started){
                component.start()
                component.started = true
            }
        }
    }

    update(){

        for(let component of this.components){
            if(!component.started){
                component.start()
            }
        }

        for(let component of this.components){
            component.update()
        }
    }

    draw(){
        for(let component of this.components){
            component.draw()
        }
    }

}