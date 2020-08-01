import React, { Component } from 'react';

import { connect } from 'react-redux';
import ListProductType from '../../components/home/ListProductType'
import { getListProTypeAction } from '../../redux/actions/home/HomeActions'

class ListProductTypeContainer extends React.Component {
    componentDidMount() {

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

    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProductTypeContainer);