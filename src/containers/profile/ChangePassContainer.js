import React, {Component} from 'react';

import {connect} from 'react-redux';
import ChangePassword from '../../components/profile/ChangePassword';
// import {changePassAction, changeStateChangePassAction} from '../../redux/actions/profiles/ChangePassAction';
import { objectIsNull } from "@dungdang/react-native-basic/src/Functions";

class ChangePassContainer extends React.Component {
  componentDidMount() {
  }
  render() {
    return <ChangePassword {...this.props} />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // changePassAction: (input) => {
    //   dispatch(changePassAction(input));
    // },
  };
};
const mapStateToProps = (state) => {
  return {
    // id: !objectIsNull(state.profilesReducers.result)
		// 	? state.profilesReducers.result.NguoiDungID
		// 	: "",
    // data: state.ChangePassReduces.data,
    // error: state.ChangePassReduces.error,
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChangePassContainer);
