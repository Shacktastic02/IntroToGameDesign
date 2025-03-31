class Input{
    static keysdown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseX
    static mouseY

    static mouseDown
    static mouseDownThisFrame
    static mouseUpThisFrame

    static lastMouseX
    static lastMouseY

    static lastWheelDelta


    
    static keydown(event){
        if(!Input.keysdown.includes(event.code))
            Input.keysdown.push(event.code)
        if(!Input.keysDownThisFrame.includes(event.code))
            Input.keysDownThisFrame.push(event.code)    
    }

    static keyup(event){
        let i = Input.keysdown.indexOf(event.code)
        Input.keysdown.splice(i,1)
        if(Input.keysUpThisFrame.includes(event.code))
            Input.keysUpThisFrame.push(event.code)
    }

    static mousemove(event){
        Input.mouseX = event.clientX
        Input.mouseY = event.clientY
    }

    static mouseup(event){
        Input.mouseDown = false
        Input.mouseUpThisFrame = true
    }

    static mousedown(event){
        Input.mouseDown = true
        Input.mouseDownThisFrame = true
    }

    static wheel(event){
        Input.lastWheelDelta = event.lastWheelDelta
    }

    static update(){
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []

        Input.keysDownThisFrame = false
        Input.keysUpThisFrame = false

        Input.lastMouseX = mouseX
        Input.lastMouseY = mouseY

        Input.lastWheelDelta = 0

    }
    
}