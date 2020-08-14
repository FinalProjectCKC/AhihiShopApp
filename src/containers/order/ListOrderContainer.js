import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListOrderComponent from '../../components/order/ListOrderComponent'
import { getListOrderAction } from '../../redux/actions/order/OrderActions'

class ListOrderContainer extends React.Component {
    componentDidMount() {
        let input = {
            limit: 5,
            status : 999,
            page: 0
        }
        this.props.getListOrderAction(input)
    }
    render() {
        return <ListOrderComponent {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListOrderAction: (input) => {
            dispatch(getListOrderAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    // console.log("=>>", state.getListOrderReducers.data)
    return {
        error: state.getListOrderReducers.error,
        listOrderData: state.getListOrderReducers.data,
        loading: state.getListOrderReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOrderContainer);