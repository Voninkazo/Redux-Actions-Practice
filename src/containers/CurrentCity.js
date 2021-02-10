import {connect} from 'react-redux';
import CurrentCity from '../components/CurrentCity';

function mapStateProps(state) {
    return {
        text: state.currentCity
    }
}

export default connect(mapStateProps,null)(CurrentCity)