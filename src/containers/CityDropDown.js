import {connect} from 'react-redux';
import { setCurrectCity} from '../actions';
import CityDropDown from '../components/CityDropDown';

const mapDispatchToProps = {
    set: setCurrectCity,
}

export default connect(null, mapDispatchToProps)(CityDropDown)