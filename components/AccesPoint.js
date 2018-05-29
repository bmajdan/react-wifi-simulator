class AccesPoint extends React.Component {

    onMouseDownHandler = (e) => {
        this.props.onMouseDown(e)
    }

    onMouseUpHandler = (e) => {
        this.props.onMouseUp(e)
    }

    render() {
        return (
            this.props.access_x ?
            <div>
                <div 
                    className="accessPoint--radioBorder" 
                    style={{ 
                        left: this.props.access_x - (this.props.radius - (this.props.access_size / 2)), 
                        top: this.props.access_y - (this.props.radius - (this.props.access_size / 2)),
                        width: this.props.radius * 2,
                        height: this.props.radius * 2
                    }}
                />
                <img
                    src="https://unifi-hd.ubnt.com/5b30823e7da7b814bb226a9fc0802a19.png"
                    className="accessPoint--element"
                    id="accessPoint"
                    style={{ 
                        left: this.props.access_x, 
                        top: this.props.access_y,
                        width: this.props.access_size,
                        height: this.props.acces_size
                    }}
                    onMouseDown={this.onMouseDownHandler}
                    onMouseUp={this.onMouseUpHandler}
                />
            </div>
            
            : <div></div>
        );
    }
}

export default AccesPoint;