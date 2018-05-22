class Dot extends React.Component {
    
    render() {

        let x = (this.props.x + (this.props.dot_size / 2)) - (this.props.access_x + (this.props.access_size / 2));
        let y = (this.props.y + (this.props.dot_size / 2)) - (this.props.access_y + (this.props.access_size / 2));

        let dist = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        

        let color = "client__dot client__dot--red"
        if(dist <= Math.abs((this.props.dot_size / 2) - (this.props.radius))){
            color = "client__dot client__dot--green"
        }

        return (
            <div 
                className={color}
                style={{
                    left: this.props.x,
                    top: this.props.y,
                    width: this.props.dot_size,
                    height: this.props.dot_size
                }} 
            />
        );
    }
}

export default Dot;