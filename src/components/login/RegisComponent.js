import React from 'react';
import {
  Button,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  TouchableHighlight,
  Alert
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { isPhone, screen } from '../../config/settings'

import Icon from "react-native-vector-icons/FontAwesome";
import { Sizes } from "@dungdang/react-native-basic";
import Images from "../../res/images";
import InputBox from "./InputBox";

export default class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      erRePass: "",
      erUser: "",
      erEmail: "",
      erPass: "",
      buttonTitle: "Đăng ký",
      passwordHidden: true,
    };
  }
  onRegister() {
    const {
      password,
      rePassword,
      email,
      username,
    } = this.state
    if (password !== "" && password !== rePassword) {
      this.setState({
        erRePass: "Mật khẩu nhập lại không chính xác"
      })
    }
    if (password == "") {
      this.setState({
        erPass: "Mật khẩu không được bỏ trống"
      })
    }
    if (username == "") {
      this.setState({
        erUser: "Tên đăng nhập không được bỏ trống"
      })
    }
    if (email == "") {
      this.setState({
        erEmail: "Email không được bỏ trống"
      })
    }
    if(username !== "" && password !== "" && rePassword !== "" && email !== "" ){
      let input ={
        username: username,
        password: password,
        rePassword: rePassword,
        email: email,
      }
      this.props.regisAction(input)
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error && this.props.error !== null) {
      Alert.alert(
        "Lỗi",
        this.props.error,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
    if (this.props.regisData !== prevProps.regisData && this.props.error == null && this.props.regisData !== null) {
      Alert.alert(
        "Chúc mừng",
        "Bạn đã đăng ký thành công",
        [{ text: "OK", onPress: () => this.props.navigation.goBack() }],
        { cancelable: false }
      );
    }
  }
  render() {
    return (
      <ImageBackground
        source={Images.bg_login}
        style={{ flex: 1 }}
      >
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.container}>
            <View style={styles.regisFrom}>
              <View style={styles.input}>
                <InputBox
                  value={this.state.username}
                  leftIcon={Images.ic_user}
                  autoCompleteType='username'
                  onChangeText={(text) =>
                    this.setState({ username: text, erUser: "" })
                  }
                  title="Tên đăng nhập"
                  onRightIconPress={() => { }}
                />
                {this.state.erUser != "" ? (
                  <Text
                    style={{
                      marginTop: Sizes.s10,
                      fontSize: Sizes.h32,
                      color: "red",
                    }}
                  >
                    {this.state.erUser}
                  </Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <InputBox
                  value={this.state.email}
                  leftIcon={Images.ic_mail}
                  autoCompleteType='email'
                  onChangeText={(text) =>
                    this.setState({
                      email: text,
                      erEmail: ""
                    })
                  }
                  title="Email"
                  onRightIconPress={() => { }}
                />
                {this.state.erEmail != "" ? (
                  <Text
                    style={{
                      marginTop: Sizes.s10,
                      fontSize: Sizes.h32,
                      color: "red",
                    }}
                  >
                    {this.state.erEmail}
                  </Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <InputBox
                  value={this.state.password}
                  leftIcon={Images.ic_lock}
                  rightIcon={
                    this.state.passwordHidden
                      ? Images.ic_eye_close
                      : Images.ic_eye
                  }
                  autoCompleteType='password'
                  onChangeText={(text) =>
                    this.setState({ password: text, erPass: "" })
                  }
                  title="Mật khẩu"
                  secureTextEntry={this.state.passwordHidden}
                  onRightIconPress={() =>
                    this.setState({
                      passwordHidden: !this.state
                        .passwordHidden,
                    })
                  }
                />
                {this.state.erPass != "" ? (
                  <Text
                    style={{
                      marginTop: Sizes.s10,
                      fontSize: Sizes.h32,
                      color: "red",
                    }}
                  >
                    {this.state.erPass}
                  </Text>
                ) : null}
              </View>
              <View style={styles.input}>
                <InputBox
                  value={this.state.rePassword}
                  leftIcon={Images.ic_lock}
                  rightIcon={
                    this.state.passwordHidden
                      ? Images.ic_eye_close
                      : Images.ic_eye
                  }
                  autoCompleteType='rePassword'
                  onChangeText={(text) =>
                    this.setState({ rePassword: text, erRePass: "" })
                  }
                  title="Nhập lại mật khẩu"
                  secureTextEntry={this.state.passwordHidden}
                  onRightIconPress={() =>
                    this.setState({
                      passwordHidden: !this.state
                        .passwordHidden,
                    })
                  }
                />
                {this.state.erRePass != "" ? (
                  <Text
                    style={{
                      marginTop: Sizes.s10,
                      fontSize: Sizes.h32,
                      color: "red",
                    }}
                  >
                    {this.state.erRePass}
                  </Text>
                ) : null}
              </View>
              <TouchableHighlight
                style={{ marginTop: Sizes.s60 }}
                underlayColor="transparent"
                onPress={() => {
                  this.onRegister()
                }}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonTitle}>
                    {this.state.buttonTitle}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          </View>

        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "#eee"
  },
  logo: {
    width: isPhone ? Sizes.s340 : Sizes.s200,
    height: isPhone ? Sizes.s340 : Sizes.s200,
    resizeMode: "contain",
    marginBottom: isPhone ? "5%" : "3%",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: isPhone ? Sizes.h52 : Sizes.h48,
    opacity: 1,
  },
  text: {
    //fontFamily: 'Roboto',
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: Sizes.s40,
    marginBottom: Sizes.s10,
  },
  regisFrom: {
    width: (screen.width * 3) / 4,
    height: isPhone ? "40%" : "50%",
  },
  boxInput: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: Sizes.s10,
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: Sizes.s60,
  },
  input: {
    marginTop: Sizes.s60,
    alignItems: 'center',
    justifyContent: "space-between",
  },
  button: {
    height: Sizes.s100,
    backgroundColor: "rgba(145, 139, 138, 0.8)",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Sizes.s20,
  },
  buttonTitle: {
    color: "white",
    fontSize: Sizes.h40,
  },
  remember: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginBottom: Sizes.s20,
    marginTop: Sizes.s20,
  },
});