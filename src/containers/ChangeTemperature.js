import {connect} from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {setCurrentTemperature} from '../actions';

const mapDispatchToProps = {
    set : setCurrentTemperature
  }
  export default connect(null, mapDispatchToProps)(ChangeTemperature)