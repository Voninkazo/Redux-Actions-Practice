import {connect} from 'react-redux';
import ScaleImage from '../components/ScaleImage';

import {setImageScale} from '../actions';

export default connect(null, {set: setImageScale})(ScaleImage);