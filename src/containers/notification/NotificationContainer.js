import React, { Component } from 'react';

import { connect } from 'react-redux';
import {userData} from "../../config/settings";
import NotificationComponent from '../../components/notification/NotificationComponent'
// import {loginAction,logoutAction} from '../../redux/actions/login/LoginActions'

class NotificationContainer extends React.Component {
    componentWillMount(){
        if(userData.token == ""){
          this.props.navigation.replace("Login")
        }
      }
    render() {
        return <NotificationComponent {...this.props} />;
        }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // loginAction: (user, password) => {
        //     dispatch(loginAction(user,password))
        // },
    };
}
const mapStateToProps = (state) => {
    return {
        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);