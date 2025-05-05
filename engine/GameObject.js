class GameObject{
    
    components
    started
    markToDestroy
    shown
    layer

    constructor(name, layer = 0){
        this.name = name
        this.components = []
        this.addComponent(new Transform())
        this.started = false
        this.markToDestroy = false
        this.numCollisions = 0
        this.shown = true
        this.layer = layer
    }

    get transform(){
        return this.components[0]
    }

    show(){
        this.shown = true
    }

    hide(){
        this.shown = false
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
            if(this.shown)component.draw()
        }
    }

    drawUI(){
        for(let component of this.components){
            if(this.shown)component.drawUI()
        }
    }

    destroy(){
        this.markToDestroy = true
    }

    findComponent(classType){
        for(let component of this.components){
            if(component instanceof classType)
                return component
        }
    }

    findComponents(classType){
        let toReturn = []
        for(let component of this.components){
            if(component instanceof classType){
                toReturn.push(component)
            }
        }
        return toReturn
    }

}