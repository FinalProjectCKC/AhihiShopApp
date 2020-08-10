import React, { Component } from "react";

import { connect } from "react-redux";
import InfoShippingComponent from "../../components/cart/InfoShippingComponent";
import { getUserDataAction } from "../../redux/actions/profile/ProfileActions";
import { objectIsNull } from "@dungdang/react-native-basic/src/Functions";
import { createOrderAction } from '../../redux/actions/cart/CartActions'

class InfoShippingContainer extends React.Component {
	componentDidMount() {
		this.props.getUserDataAction()
	}
	render() {
		return <InfoShippingComponent {...this.props} />;
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createOrderAction: (input) => {
			dispatch(createOrderAction(input))
	},
		getUserDataAction: (input) => {
			dispatch(getUserDataAction(input));
		},
	};
};
const mapStateToProps = (state) => {
	return {
		error: state.getUserDataReducers.error,
		loading: state.getUserDataReducers.loading,
		userData: state.getUserDataReducers.userData,

		error1: state.createOrderReducers.error,
		dataCreateOrder: state.createOrderReducers.data,
		loading1: state.createOrderReducers.loading,
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InfoShippingContainer);
