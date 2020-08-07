import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListProductType from '../../components/home/ListProductType'
import { getListProTypeAction } from '../../redux/actions/home/HomeActions'

class ListProductTypeContainer extends React.Component {
    componentDidMount() {
        let input = {
            page: 0,
            limit: 5
        }
        this.props.getListProTypeAction(input)
    }
    render() {
        return <ListProductType {...this.props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getListProTypeAction: (input) => {
            dispatch(getListProTypeAction(input))
        },
    };
}
const mapStateToProps = (state) => {
    return {
        error: state.getListTypeReducers.error,
        listProTypeData: state.getListTypeReducers.data,
        loading: state.getListTypeReducers.loading,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProductTypeContainer);