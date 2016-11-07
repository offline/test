import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {showBanner} from '../actions/index';

class Banner extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        showBanner();
    }

    render(){
        return(
            this.props.banner.isVisible &&
            <div style="background-color: red">
                  ADVERT
            </div>
        );
    }
}

Banner.propTypes = {
    banner : React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
    return {
        banner : {
            isVisible: state.banner.isVisible
        }
    }
};

export default connect(mapStateToProps)(Banner);

