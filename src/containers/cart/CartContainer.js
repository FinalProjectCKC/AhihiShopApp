import React, { Component } from 'react';

import { connect } from 'react-redux';
import {userData} from "../../config/settings";
import CartComponent from '../../components/cart/CartComponent'
import { removeFormCartAction, addToCartAction, getcartAction, createOrderAction, changeQuanAction } from '../../redux/actions/cart/CartActions'

class CartContainer extends React.Component {
    componentWillMount(){
        if(userData.token == ""){
          this.props.navigation.replace("Login")
        } else{
            this.props.getcartAction()
        }
      }
    render() {
        return <CartComponent {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFormCartAction: (input) => {
            dispatch(removeFormCartAction(input))
        },
        getcartAction: () => {
            dispatch(getcartAction())
        },
        // addToCartAction: (input) => {
        //     dispatch(addToCartAction(input))
        // },
        createOrderAction: (input) => {
            dispatch(createOrderAction(input))
        },
        changeQuanAction: (input) => {
            dispatch(changeQuanAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error1: state.getCartReducers.error,
        dataGetCart: state.getCartReducers.data,
        loading1: state.getCartReducers.loading,

        error2: state.changeQuanReducers.error,
        dataChangeQuan: state.changeQuanReducers.data,
        loading2: state.changeQuanReducers.loading,

        error3: state.removeFormCartReducers.error,
        dataRemoveFormCart: state.removeFormCartReducers.data,
        loading3: state.removeFormCartReducers.loading,

        error4: state.createOrderReducers.error,
        dataCreateOrder: state.createOrderReducers.data,
        loading4: state.createOrderReducers.loading,

        // error5: state.addToCartReducers.error,
        // dataAddToCart: state.addToCartReducers.data,
        // loading: state.addToCartReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);