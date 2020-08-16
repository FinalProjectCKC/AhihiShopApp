import React, { Component } from 'react';

import { connect } from 'react-redux';
import ProfileComponent from '../../components/profile/ProfileComponent'
import { getUserDataAction } from "../../redux/actions/profile/ProfileActions";
import { userData } from "../../config/settings";

class ProfileContainer extends React.Component {
    componentWillMount() {
        if (userData.token == "") {
            this.props.navigation.replace("Login")
        } else {
            this.props.getUserDataAction()
        }
    }
    render() {
        return <ProfileComponent {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserDataAction: (input) => {
            dispatch(getUserDataAction(input));
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.getUserDataReducers.error,
        loading: state.getUserDataReducers.loading,
        userData: state.getUserDataReducers.userData,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);