import { connect } from "react-redux";
import ImagePreview from '../components/ImagePreview';
//https://picsum.photos/id/1/200/300
function mapStateToProps(state) {
    return {
        imageUrl: state.imageUrl,
        scale: state.imageScale
    }
}
export default connect(mapStateToProps, null)(ImagePreview); 