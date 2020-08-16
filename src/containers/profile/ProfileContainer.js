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
    // {"data": {"address": null, "avatarUrl": null, "email": "tunxgatrssssasasxd@gmail.com", "fullName": "", "phone": null, "userID": "5f3604cc76746012aa8cf55a", "username": "asssss"}, "message": "Lấy thông tin thành công", "status": 1}
    // console.log("userData", state.getUserDataReducers.userData)
    return {
        error: state.getUserDataReducers.error,
        loading: state.getUserDataReducers.loading,
        userData: state.getUserDataReducers.userData,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);