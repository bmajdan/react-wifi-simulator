import '../style.css'
import RightPanel from '../components/RightPanel';
import LeftPanel from '../components/LeftPanel';

class index extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            distance: 0
        }
    }

    distanceHandler = (distance) => {
        this.setState({
            distance
        })
    }

    render() {
        return (
            <div className='application'>
                <LeftPanel distance = {this.state.distance} />
                <RightPanel distanceHandler = {this.distanceHandler} />
            </div> 
        );
    }
}

export default index;