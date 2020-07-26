import React, { Component } from 'react';

import { connect } from 'react-redux';
import RegisComponent from '../../components/login/RegisComponent'
import { regisAction } from '../../redux/actions/login/RegisActions';
import { postOtpRegis, clearOtp } from '../../redux/actions/login/OtpActions'
class RegisContainer extends React.Component {
    render() {
        return <RegisComponent {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        regisAction: (input) => {
            dispatch(regisAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.registerReducers.error,
        regisData: state.registerReducers.data,
        loading: state.registerReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisContainer);