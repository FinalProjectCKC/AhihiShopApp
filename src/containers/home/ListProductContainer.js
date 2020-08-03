import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListProduct from '../../components/home/ListProduct'
import { getListProductByTypeAction } from '../../redux/actions/home/HomeActions'

class ListProductContainer extends React.Component {
    componentDidMount() {
        const ProTypeId = this.props.navigation.getParam("ProTypeId");
        let input = {
            ProTypeId: ProTypeId,
            page: 0,
            limit: 5
        }
        this.props.getListProductByTypeAction(input)
    }
    render() {
        return <ListProduct {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getListProductByTypeAction: (input) => {
            dispatch(getListProductByTypeAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.getListProductByTypeReducers.error,
        listProductData: state.getListProductByTypeReducers.data,
        loading: state.getListProductByTypeReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProductContainer);