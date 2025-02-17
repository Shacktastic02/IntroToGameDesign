class Input{
    static keysdown = []
    
    static keydown(event){
        if(!Input.keysdown.includes(event.code)){
            Input.keysdown.push(event.code)
        }       
    }

    static keyup(event){
        if(Input.keysdown.includes(event.code)){
            let i = Input.keysdown.indexOf(event.code)
            Input.keysdown.splice(i,1)
        }
    }
}