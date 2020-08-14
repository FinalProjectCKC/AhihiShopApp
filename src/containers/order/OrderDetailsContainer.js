import React, { Component } from 'react';

import { connect } from 'react-redux';
import OrderDetailsComponent from '../../components/order/OrderDetailsComponent'
import { getOrderDetailAction, changeStatusOrderAction, getListOrderAction } from '../../redux/actions/order/OrderActions'

class OrderDetailContainer extends React.Component {
    componentDidMount() {
        const orderID = this.props.navigation.getParam("orderID");
        this.props.getOrderDetailAction({ orderID })
    }
    render() {
        return <OrderDetailsComponent {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListOrderAction: (input) => {
            dispatch(getListOrderAction(input))
        },
        getOrderDetailAction: (input) => {
            dispatch(getOrderDetailAction(input))
        },
        changeStatusOrderAction: (input) => {
            dispatch(changeStatusOrderAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.getOrderDetailReducers.error,
        orderData: state.getOrderDetailReducers.data,
        loading: state.getOrderDetailReducers.loading,

        error1: state.changeStatusOrderReducers.error,
        changeStatusData: state.changeStatusOrderReducers.data,
        loading1: state.changeStatusOrderReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailContainer);