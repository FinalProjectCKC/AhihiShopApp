import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListProduct22 from '../../components/home/ListProduct22'
import { getListProductByTypeAction, searchProductAction } from '../../redux/actions/home/HomeActions'

class ListProductContainer extends React.Component {
    componentDidMount() {
        let searchKey = this.props.navigation.getParam("searchKey");
        // searchKey= searchKey.toLowerCase()
        this.props.searchProductAction({ searchKey })
    }
    render() {
        return <ListProduct22 {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        searchProductAction: (input) => {
            dispatch(searchProductAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.searchReducers.error,
        listProductData: state.searchReducers.data,
        loading: state.searchReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProductContainer);