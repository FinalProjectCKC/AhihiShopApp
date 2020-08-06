import React, { Component } from 'react';

import { connect } from 'react-redux';
import DetailsProduct from '../../components/home/DetailsProduct'
import { getDetailProductAction } from '../../redux/actions/home/HomeActions'
import { addToCartAction } from '../../redux/actions/cart/CartActions'

class DetailProductContainer extends React.Component {
    componentDidMount() {
        const productId = this.props.navigation.getParam("productId");
        this.props.getDetailProductAction({ productId })
    }
    render() {
        return <DetailsProduct {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getDetailProductAction: (input) => {
            dispatch(getDetailProductAction(input))
        },
        addToCartAction: (input) => {
            dispatch(addToCartAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.getDetailsProductReducers.error,
        productData: state.getDetailsProductReducers.data,
        loading: state.getDetailsProductReducers.loading,

         error1: state.addToCartReducers.error,
        dataAddToCart: state.addToCartReducers.data,
        loading1: state.addToCartReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailProductContainer);