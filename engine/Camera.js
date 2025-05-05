class Camera{
    static get main(){
        return Engine.currScene.gameObjects[0]
    }

    static getTransform(){
        let transform = new DOMMatrix()
        transform = transform.translate(canvas.width / 2, canvas.height / 2)
        let xratio = canvas.width / Camera.main.transform.w
        let yratio = canvas.height / Camera.main.transform.h
        let ratio = Math.min(xratio, yratio)
        transform = transform.scale(ratio, ratio)
        transform = transform.translate(-Camera.main.transform.x, -Camera.main.transform.y)
        return transform
    }
}