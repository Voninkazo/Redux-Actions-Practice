import {connect} from 'react-redux';
import Modal from '../components/Modal';

import {setDisplayModal} from '../actions';

const mapStateToProps = (state) => {
    return {
        displayModal: state.displayModal
    }
}

export default connect(mapStateToProps, {toggleModal: setDisplayModal}) (Modal);
