
import React, { Children } from "react"
import {
  ImageBackground,
  Image,
  View,
  Text,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Modal,
  Platform,
  ScrollView,
  SafeAreaView,
  Alert
} from "react-native"
import { StyleSheet, Dimensions, StatusBar } from "react-native"
import {
  arrayIsEmpty,
  objectIsNull,
} from "@dungdang/react-native-basic/src/Functions"
import Images from "../../res/images";
import { isPhone, screen } from '../../config/settings'
import { Sizes } from "@dungdang/react-native-basic";
import Headers from "../custom/Headers";
import Loading from "../custom/Loading";
import IconA from "react-native-vector-icons/AntDesign";
import { userData } from "../../config/settings";

export default class ProfileCoponent extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.error !== prevProps.error && this.props.error !== null) {
      Alert.alert(
        "Lỗi",
        this.props.error,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
    if (this.props.userData !== prevProps.userData && this.props.error == null && this.props.userData !== null) {
      //address avatarUrl fullName phone
      userData.address = this.props.userData.address
      userData.email = this.props.userData.email
      userData.fullname = this.props.userData.fullName
      userData.phone = this.props.userData.phone
    }
  }
  render() {
    const ToucAble = [{
      title: "Thông tin tài khoản",
      navi: "InformationContainer",
      icLeft: Images.ic_user,
    },
    {
      title: "Đổi mật khẩu",
      navi: "ChangePassContainer",
      icLeft: Images.ic_key,
    },
    {
      title: "Đơn hàng của tôi",
      navi: "ListOrderContainer",
      icLeft: Images.ic_task_inactive,
    },
    // {
    //   title: "Đăng Xuất",
    //   navi: "",
    //   icLeft: Images.ic_logout,
    // },
    ]
    return (
      <SafeAreaView >
        <Headers
          name="canhbao"
          title="Thông tin tài khoản"
          onPressBackButton={() => {
            this.props.navigation.goBack();
          }}
        />
        <View style={{ flex: 1 }}>
          <View style={styles.header}>
            <View style={styles.avatar}>
              <Image
                source={Images.ic_defaultUser}
                style={{
                  width: Sizes.s260,
                  height: Sizes.s260,
                  resizeMode: "contain",
                }}
              />
            </View>
            <View style={styles.infor}>
              <Text style={styles.text2}>
                {(userData.fullname != "")  ? userData.fullname : userData.username}
                    </Text>
              <Text style={styles.text3}>
              {(userData.phone !== "")  ? userData.phone : null}
                    </Text>
            </View>
          </View>
          <View style={styles.content}>
            {ToucAble.map((item) => (
              <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  console.log(item.title)
                  this.props.navigation.navigate(
                    `${item.navi}`
                  )
                }}
                underlayColor="transparent"
              >
                <View style={styles.box}>
                  <View style={styles.middle}>
                    <Image
                      source={item.icLeft}
                      style={styles.icon}
                    />
                    <Text style={styles.text}>
                      {item.title}
                    </Text>
                  </View>
                  <IconA
                    name="right"
                    size={Sizes.s30}
                    color="#707070"
                  />
                </View>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
                style={styles.box}
                onPress={() => {
                  userData.token = ""
                  this.props.navigation.replace('Login')
                }}
                underlayColor="transparent"
              >
                <View style={styles.box}>
                  <View style={styles.middle}>
                    <Image
                      source={ Images.ic_logout}
                      style={styles.icon}
                    />
                    <Text style={styles.text}>
                    Đăng Xuất
                    </Text>
                  </View>
                  <IconA
                    name="right"
                    size={Sizes.s30}
                    color="#707070"
                  />
                </View>
              </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: Sizes.s260,
    // backgroundColor: "red",
    flexDirection: "row"
  },
  avatar: {
    marginLeft: Sizes.s20,
    width: Sizes.s260,
    height: Sizes.s260,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue"
  },
  infor: {
    width: "70%",
    height: Sizes.s260,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "green"
  },
  content: {
    width: "100%",
    height: screen.height,
    marginTop: Sizes.s30,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  btn: {
    width: "100%",
    height: Sizes.s100,
    borderWidth: 1,
    // backgroundColor: "red",
  },
  addToCart: {
    fontSize: Sizes.s35,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  textPrice: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    color: "#828282",
    marginBottom: Sizes.s10,
  },
  middle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: Sizes.h30,
    color: "#707070",
    fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  text2: {
    fontSize: Sizes.s35,
    fontWeight: "bold",
    fontFamily: 'Roboto',
    color: "#222",
  },
  text3: {
    fontSize: Sizes.h30,
    fontFamily: 'Roboto',
    color: "#222",
  },
  icon: {
    width: Sizes.s40,
    resizeMode: "contain",
    margin: Sizes.s20,
  },
  box: {
    width: "100%",
    height: Sizes.s120,
    backgroundColor: "#eee",
    marginTop: Sizes.s10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomButton: {
    width: "100%",
    marginTop: Sizes.s10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eee",
    height: Sizes.s100,
  },
})