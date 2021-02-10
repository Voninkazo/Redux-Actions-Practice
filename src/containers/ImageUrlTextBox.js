import {connect} from 'react-redux';
import {setImgUrl} from '../actions';
import ImageUrlTextBox from '../components/ImageUrlTextBox';

export default connect(null, {set: setImgUrl}) (ImageUrlTextBox);