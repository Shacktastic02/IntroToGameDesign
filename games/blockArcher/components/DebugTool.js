class DebugTool extends Component{

    start(){
        Camera.main.transform.x = canvas.width / 2
        Camera.main.transform.y = canvas.height / 2
        Camera.main.transform.w = canvas.width
        Camera.main.transform.h = canvas.height
    }
}