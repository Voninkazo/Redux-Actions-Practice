import {connect} from 'react-redux';
import {setDisplayModal} from '../actions';

import ShowModal from '../components/ShowModal';

const mapDispatchToProps = {
    toggleModal: setDisplayModal
}

export default connect(null, mapDispatchToProps) (ShowModal);
