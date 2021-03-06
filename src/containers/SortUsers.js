import {connect} from 'react-redux';
import { sortUsers } from '../actions';
import SortUsers from '../components/SortUsers';

const mapStateToProps = (state) => ({sortUser: state.currentUserSort});

const mapDispatchToProps  = {
    set: sortUsers,
}

export default connect(mapStateToProps, mapDispatchToProps) (SortUsers)