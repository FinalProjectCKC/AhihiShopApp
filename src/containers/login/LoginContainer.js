import React, { Component } from 'react';

import { connect } from 'react-redux';
import LoginComponent from '../../components/login/Login'
import { loginAction, logoutAction } from '../../redux/actions/login/LoginActions'

class LoginContainer extends React.Component {
    componentDidMount() {

    }
    render() {
        return <LoginComponent {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        loginAction: (input) => {
            dispatch(loginAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.loginReducers.error,
        loginData: state.loginReducers.data,
        loading: state.loginReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);