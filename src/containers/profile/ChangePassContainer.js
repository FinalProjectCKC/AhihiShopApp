import React, {Component} from 'react';

import {connect} from 'react-redux';
import ChangePassword from '../../components/profile/ChangePassword';
import { changePassAction } from '../../redux/actions/profile/ProfileActions'
import { objectIsNull } from "@dungdang/react-native-basic/src/Functions";

class ChangePassContainer extends React.Component {
  render() {
    return <ChangePassword {...this.props} />;
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changePassAction: (input) => {
      dispatch(changePassAction(input));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    loading: state.changePassReducers.loading,
    changePassData: state.changePassReducers.data,
    error: state.changePassReducers.error,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassContainer);
