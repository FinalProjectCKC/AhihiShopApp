import React, { Component } from 'react';

import { connect } from 'react-redux';
import {userData} from "../../config/settings";
import Headers from '../../components/custom/Headers'
import { getcartAction } from '../../redux/actions/cart/CartActions'

class HeaderContainer extends React.Component {
    componentWillMount(){
            // this.props.getcartAction()
      }
    render() {
        return <Headers {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getcartAction: () => {
            dispatch(getcartAction())
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error1: state.getCartReducers.error,
        dataGetCart: state.getCartReducers.data,
        loading1: state.getCartReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);