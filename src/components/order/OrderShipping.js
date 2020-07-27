
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
  SafeAreaView,
  StyleSheet, Dimensions, StatusBar
} from 'react-native';
import FastImage from 'react-native-fast-image'
import Loading from '../custom/Loading';
import Header from '../custom/Headers';
import { Sizes } from "@dungdang/react-native-basic";
import Images from "../../res/images";
import { isPhone, screen } from '../../config/settings'

export default class OrderShippingComponent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor:"#fff" }}>
        <Header
          title="Tình trạng đơn hàng"
          onPressBackButton={() => this.props.navigation.goBack()}
        />
        <View style={{
          height: "20%", width: "100%", justifyContent: 'center',
          alignItems: 'center',
        }}>
          <Text style={styles.text}>Đang giao hàng</Text>
        </View>
        <View style={{ height: "55%", width: "100%" }}>
          <FastImage
            style={{ height: "100%", width: "100%" }}
            resizeMode={FastImage.resizeMode.contain}
            source={{
              uri: 'https://cdn.dribbble.com/users/379798/screenshots/3244368/scooter-running.gif',
              headers: { Authorization: '9876543210' },
              priority: FastImage.priority.normal,
              cache: FastImage.cacheControl.immutable,
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff"
  },
  text: {
    fontFamily: 'Roboto',
    fontWeight: "bold",
    color: "red",
    fontSize: Sizes.s70,
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
});