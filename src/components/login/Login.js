

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
  Alert,
  SafeAreaView
} from 'react-native';
import { objectIsNull } from '@dungdang/react-native-basic/src/Functions';
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { isPhone, screen } from '../../config/settings'
import Loading from '../custom/Loading';
import Icon from "react-native-vector-icons/FontAwesome";
import { Sizes } from "@dungdang/react-native-basic";
import Images from "../../res/images";
import InputBox from "./InputBox";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      remember: true,
      passwordHidden: true,
      username: "",
      password: "",
      erUser: "",
      erPass: "",
      buttonTitle: "Đăng nhập",
      alert: null,
    };
  }
  onLogin() {
    const { erUser, erPass, username, password } = this.state
    if (username == "") {
      this.setState({
        erUser: "Vui lòng nhập tài khoản"
      })
    }
    if (password == "") {
      this.setState({
        erPass: "Vui lòng nhập mật khẩu"
      })
    }
    if (username !== "" && password !== "") {
      let input = {
        username: username,
        password: password,
      }
      this.props.loginAction(input)
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
    if (this.props.loginData !== prevProps.loginData && this.props.error == null && this.props.loginData !== null) {
      this.props.navigation.navigate('MyModal')
    }
  }
  render() {
    return (
      <ImageBackground
        source={Images.bg_login}
        style={{ width: "100%", height:"100%" }}
      >
        {this.props.loading && <Loading />}
        <ScrollView style={{ width: "100%", height:"100%" }}>
        <View style={styles.container}>
          <View style={styles.loginForm}>
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
              {this.state.erUser !== "" ? (
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
              {this.state.erPass !== "" ? (
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
            <View style={styles.remember}>
              <Icon
                name={
                  this.state.remember
                    ? "check-circle"
                    : "circle"
                }
                size={Sizes.s50}
                onPress={() => {
                  this.setState({
                    remember: !this.state.remember,
                  });
                }}
                color="white"
                style={{ marginRight: Sizes.s15 }}
              />
              <Text
                style={{
                  color: "white",
                  fontSize: Sizes.h32,
                }}
              >
                Ghi nhớ đăng nhập
								</Text>
            </View>

            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                this.onLogin()
              }}
            // onPress={() => this.props.navigation.navigate('MyModal')}
            >
              <View style={styles.button}>
                <Text style={styles.buttonTitle}>
                  {this.state.buttonTitle}
                </Text>
              </View>
            </TouchableHighlight>

            <TouchableHighlight
              underlayColor="transparent"
              style={{
                alignItems: "center",
                margin: Sizes.h30,
              }}
              onPress={() => {
                this.props.navigation.navigate("RegisContainer");
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: Sizes.h34,
                  fontWeight: "bold",
                  opacity: 0.9,
                }}
              >
                Đăng ký tài khoản
									</Text>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              style={{ alignItems: "center" }}
              onPress={() => {
                this.props.navigation.navigate(
                  "Forget"
                );
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: Sizes.h34,
                  fontWeight: "bold",
                  opacity: 0.9,
                }}
              >
                Quên mật khẩu
								</Text>
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
    flex: 1,
    // height: '80%',
    marginTop: Sizes.s200,
    justifyContent: 'center',
    alignItems: 'center',
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
  loginForm: {
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
    // marginTop: Sizes.s60,
  },
  input: {
    marginTop: Sizes.s60,
    // height: isPhone ? Sizes.s200 : Sizes.s160,
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
    marginTop: Sizes.s60,
  },
});