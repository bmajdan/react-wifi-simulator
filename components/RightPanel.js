import TxPower from './TxPower';
import Radio from './Radio';

class RightPanel extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            tx_power: 4,
            radio: 5,
            tx_buf: 4,
            radio_buf: 5,
            prx: -80,
            rc_power: 1
        }
    }

    distanceCalculator = () => {
        const K = -27.55;
        let FSPL = parseFloat(this.state.tx_power) + parseFloat(this.state.rc_power) - parseFloat(this.state.prx);
        let distance = Math.pow(10, (FSPL - K - (20 * Math.log10(parseFloat(this.state.radio) * 1000)) ) / 20)
        this.props.distanceHandler(distance)
    }

    componentDidMount(){
        this.distanceCalculator();
    }

    txPowerHandler = (tx_power) => {
        this.setState({ tx_power })
    }

    radioHandler = (radio) => {
        this.setState({ radio })
    }

    saveProperties = () => {
        this.setState({
            tx_buf: this.state.tx_power,
            radio_buf: this.state.radio
        }, () => {
            this.distanceCalculator();
        })
    }

    discardProperties = () => {
        this.setState({
            tx_power: this.state.tx_buf,
            radio: this.state.radio_buf
        })
    }

    render() {
        return (
            <div className="right">
                <TxPower onChange={this.txPowerHandler} value={this.state.tx_power}></TxPower>
                <Radio onChange={this.radioHandler} value={this.state.radio}></Radio>
                <hr />
                
                <button className="button button--cancel" onClick={this.discardProperties}>Cancel</button>
                <button className="button button--save" onClick={this.saveProperties}>Save</button>
            </div>
        );
    }
}

export default RightPanel;