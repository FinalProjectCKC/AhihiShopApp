import React, { Component } from "react";

import { connect } from "react-redux";
import Information from "../../components/profile/Information";
// import {
// 	postInformation,
// 	clearInformation,
// } from "../../redux/actions/profiles/informationActions";
// import { getProfiles } from "../../redux/actions/profiles/profilesActions";
import { objectIsNull } from "@dungdang/react-native-basic/src/Functions";
class InformationContainer extends React.Component {
	componentDidUpdate() {}
	render() {
		return <Information {...this.props} />;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		// getProfiles: (id) => {
		// 	dispatch(getProfiles(id));
		// },
	};
};
const mapStateToProps = (state) => {
	return {
		// result: state.profilesReducers.result,
		// status: state.informationReducers.status,
		// description: state.informationReducers.description,
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InformationContainer);
