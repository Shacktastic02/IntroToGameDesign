class Event{
    static eventListeners = []

    static addEventListener(type, listenerClass){
        Events.eventListeners.push({type, listenerClass})
    }

    static handleEvent(type, event){
        for(let listener of Events.eventListeners){
            if(listener.type == type){
                listener.listenerClass.handleEvent(type, event)
            }
        }
    }
}