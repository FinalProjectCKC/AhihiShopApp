import React, { Component } from 'react';

import { connect } from 'react-redux';
import Home from '../../components/home/Home'
import { getListProTypeAction, searchProductAction } from '../../redux/actions/home/HomeActions'

class HomeContainer extends React.Component {
    componentDidMount() {
        let input = {
            page: 0,
            limit: 6
        }
        this.props.getListProTypeAction(input)
    }
    render() {
        return <Home {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListProTypeAction: (input) => {
            dispatch(getListProTypeAction(input))
        },
        searchProductAction: (input) => {
            dispatch(searchProductAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        errorListProType: state.getListTypeReducers.error,
        listProTypeData: state.getListTypeReducers.data,
        loadingListProType: state.getListTypeReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);