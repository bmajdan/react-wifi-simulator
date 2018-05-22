class Radio extends React.Component {

    constructor(props){
        super(props);
    }

    onChangeHandler = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className="radio">
                <p className="radio__header">Radio</p>
                <label className="radio__label" >2.4 GHz
                    <input className="radio__label--input" type="radio" name="radioType" value="2.4" 
                        checked={this.props.value == 2.4}
                        onChange={this.onChangeHandler}
                    />
                    <span className="radio__label--checkmark"></span>
                </label>

                <label className="radio__label" >5 GHz
                    <input className="radio__label--input" type="radio" name="radioType" value="5" 
                        checked={this.props.value == 5}
                        onChange={this.onChangeHandler}
                    />
                    <span className="radio__label--checkmark"></span>
                </label>
            </div>
        );
    }
}

export default Radio;