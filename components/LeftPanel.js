import AccesPoint from './AccesPoint';
import Dots from './Dots';

class LeftPanel extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            panel_w: undefined,
            panel_h: undefined,
            access_x: undefined,
            access_y: undefined,
            is_clicked: false,
            clicked_x: undefined,
            clicked_y: undefined,
            radius: this.props.distance,
            access_size: 50,
            dot_size: 10,
            client_dots: []
        }
    }

    componentWillReceiveProps(newProps, oldProps){
        if(newProps != oldProps){
            console.log(newProps.distance)
            this.setState({
                radius: newProps.distance
            })
        }
    }

    componentDidMount(){
        this.setState({
            panel_w: window.innerWidth - 350,
            panel_h: window.innerHeight,
            access_x: (window.innerWidth - 350) / 2 - (this.state.access_size / 2),
            access_y: window.innerHeight / 2 - (this.state.access_size / 2)
        }, () => {
            let buffArr = []
            
            for(let i = 0; i < 10; i++){
                buffArr.push({
                    x: Math.floor(Math.random() * (this.state.panel_w - 20) + 10),
                    y: Math.floor(Math.random() * (this.state.panel_h - 20) + 10)
                })
            }

            this.setState({
                client_dots: buffArr
            })
        })
    }

    onMouseDownHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            is_clicked: true,
            clicked_x: e.nativeEvent.offsetX,
            clicked_y: e.nativeEvent.offsetY
        })
    }

    onMouseUpHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({
            is_clicked: false
        })
    }

    onMouseMoveHandler = (e) => {
        if(this.state.is_clicked){
            if(e.clientX - this.state.clicked_x > 0 && 
                e.clientY - this.state.clicked_y > 0 && 
                e.clientX + this.state.clicked_x < this.state.panel_w && 
                e.clientY + this.state.clicked_y < this.state.panel_h){
                this.setState({
                    access_x: e.clientX - this.state.clicked_x,
                    access_y: e.clientY - this.state.clicked_y
                })
            }
            
        }
        
    }

    render() {

        return (
            <div className="left" onMouseUp={this.onMouseUpHandler} onMouseMove={this.onMouseMoveHandler}>
                <AccesPoint 
                    onMouseDown={this.onMouseDownHandler} 
                    onMouseUp={this.onMouseUpHandler}
                    access_x={this.state.access_x} 
                    access_y={this.state.access_y}
                    access_size={this.state.access_size}
                    radius={this.state.radius}
                />
                <Dots 
                    access_x={this.state.access_x} 
                    access_y={this.state.access_y} 
                    access_size={this.state.access_size}
                    dot_size={this.state.dot_size}
                    radius={this.state.radius}
                    clients={this.state.client_dots}
                />
            </div>
        );
    }
}

export default LeftPanel;