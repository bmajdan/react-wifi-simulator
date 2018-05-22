class TxPower extends React.Component {

    constructor(props){
        super(props);
    }

    onChangeHandler = (e) => {
        this.props.onChange(e.target.value)
    }

    render() {
        return (
            <div className="txPower">
                <p className="txPower__header">TX Power</p>
                <select value={this.props.value} onChange={this.onChangeHandler} className="txPower__select">
                    <option value="4" >High 4dBm</option>
                    <option value="-6" >Medium -6dBm</option>
                    <option value="-16" >Low -16dBm</option>
                </select>
            </div>
        );
    }
}

export default TxPower;