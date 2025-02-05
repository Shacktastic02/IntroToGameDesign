class Input{
    static keysdown = []
    
    static keydown(event){
        //console.log(event.code)
        if(!keysdown.includes(event.code)){
            keysdown.push(event.code)
        }       
    }

    static keyup(event){
       console.log(event.code)
        if(keysdown.includes(event.code)){
            let i = keysdown.indexOf(event.code)
            keysdown.splice(i,1)
        }
    }
}