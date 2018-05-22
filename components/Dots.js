import Dot from './Dot';

class Dots extends React.Component {

    render() {

        const Client_dots = this.props.clients.map((value, key) =>
            <Dot 
                key={key} 
                access_x={this.props.access_x} 
                access_y={this.props.access_y}
                radius={this.props.radius}
                access_size={this.props.access_size}
                dot_size={this.props.dot_size}
                x={value.x} 
                y={value.y} 
            />
        )
        
        return (
            <div className="client">{Client_dots}</div>
        );
    }
}

export default Dots;