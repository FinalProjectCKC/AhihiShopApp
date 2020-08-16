import React, { Component } from "react";

import { connect } from "react-redux";
import Information from "../../components/profile/Information";
import { updateUserAction, getUserDataAction } from "../../redux/actions/profile/ProfileActions";
import { objectIsNull } from "@dungdang/react-native-basic/src/Functions";
class InformationContainer extends React.Component {
	render() {
		return <Information {...this.props} />;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateUserAction: (input) => {
			dispatch(updateUserAction(input));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		loading: state.updateUserReducers.loading,
    updateData: state.updateUserReducers.data,
    error: state.updateUserReducers.error,
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InformationContainer);
