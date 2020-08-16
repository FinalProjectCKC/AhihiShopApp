import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  Alert,
  FlatList,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from "react-native";
import Headers from "../custom/Headers";
import { Sizes } from "@dungdang/react-native-basic";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../custom/Loading";
import Images from "../../res/images/index";
import { isPhone, screen } from '../../config/settings'

export default class OrderDetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderData: null,
      orderDetails: [],
      quan: "",
      total: "",
      phone: "",
      address: "",
      cusName: "",
      status: 0,
      changeStatus: "",
      id: "",
      reasonCancel: ""
    };
  }
  changeStatus(status) {
    this.setState({ changeStatus: status })
    let input = {
      status: status,
      orderID: this.state.id
    }
    this.props.changeStatusOrderAction(input)
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
    if (this.props.error1 !== prevProps.error1 && this.props.error1 !== null) {
      Alert.alert(
        "Lỗi",
        this.props.error,
        [{ text: "OK", onPress: () => console.log("OK Pressed") }],
        { cancelable: false }
      );
    }
    if (
      prevProps.changeStatusData !== this.props.changeStatusData &&
      this.props.error1 == null &&
      this.props.changeStatusData !== null
    ) {
      this.props.getOrderDetailAction({ orderID: this.state.id })
      let input = {
        limit: 5,
        status: 999,
        page: 0
      }
      this.props.getListOrderAction(input)
      if (this.state.changeStatus == "-2") {
        Alert.alert(
          "Thông báo",
          "Huỷ đơn hàng thành công",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
      if (this.state.changeStatus == "3") {
        Alert.alert(
          "Thông báo",
          "Xác nhận thành công",
          [{ text: "OK", onPress: () => console.log("OK Pressed") }],
          { cancelable: false }
        );
      }
    }

    if (
      prevProps.orderData !== this.props.orderData &&
      this.props.error == null &&
      this.props.orderData !== null
    ) {
      this.setState(
        {
          orderData: this.props.orderData,
          orderDetails: this.props.orderData.orderDetail,
          total: this.props.orderData.total,
          phone: this.props.orderData.phone,
          address: this.props.orderData.address,
          cusName: this.props.orderData.cusName,
          quan: this.props.orderData.length,
          status: this.props.orderData.status,
          reasonCancel: this.props.orderData.reasonCancel,
          id: this.props.orderData._id,
        },
      );
    }
  }
  render() {
    const { quan, total, phone, address, cusName, reasonCancel, status } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading && <Loading backgroundColor={"none"} />}
        {this.props.loading1 && <Loading backgroundColor={"none"} />}
        <Headers
          name="canhbao"
          title="Chi tiết hoá đơn "
          onPressBackButton={() => {
            this.props.navigation.goBack();
          }}
        />
        {/* \ <Image
              style={styles.image}
              source={{ uri: `http://127.0.0.1:8080/${productImg}` }}
            /> */}

        {this.state.orderDetails.length === 0 ?
          <View style={{
            // borderTopWidth: 1,
            // borderTopColor: '#EFEFEF',
            marginTop: Sizes.s20,
            width: '100%',
            paddingHorizontal: Sizes.s30,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <Image
              source={Images.ic_empty}
              style={{
                width: Sizes.s340,
                height: Sizes.s340,
                resizeMode: "contain",
              }}
            />
            <Text style={{
              fontFamily: 'Roboto-Regular',
              fontSize: Sizes.s35,
              color: '#ABAAAC'
            }}>Không có sản phẩm nào</Text>
          </View> :
          <View style={styles.container}>
            <ScrollView style={styles.container1}>
              <View style={styles.orderInfor}>
                <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", marginTop: Sizes.s20, marginLeft: Sizes.s20, }}>Thông tin tổng quan</Text>
                <View style={styles.infor}>
                  <Text style={styles.textDetailTitle}>Người nhận: </Text>
                  <Text style={styles.textDetails}>{cusName}</Text>
                </View>
                <View style={styles.infor}>
                  <Text style={styles.textDetailTitle}>Địa chỉ: </Text>
                  <Text style={styles.textDetails}>{address}</Text>
                </View>
                <View style={styles.infor}>
                  <Text style={styles.textDetailTitle}>Số lượng: </Text>
                  <Text style={styles.textDetails}>{quan}</Text>
                </View>
                <View style={styles.infor}>
                  <Text style={styles.textDetailTitle}>Tổng Cộng: </Text>
                  <Text style={styles.textDetails}> {total} VND</Text>
                </View>
              </View>
              <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", marginTop: Sizes.s20, marginLeft: Sizes.s20, }}>Tình trạng đơn hàng</Text>
              {(this.state.status == 0) ? <View><Image
                style={styles.imageStt}
                source={Images.ic_status0}
              /></View> :
                (this.state.status == 1) ? <View style={styles.imgStatus}><Image
                  style={styles.imageStt}
                  source={Images.ic_status1}
                /></View> :
                  (this.state.status == 2) ? <View style={styles.imgStatus}><Image
                    style={styles.imageStt}
                    source={Images.ic_status2}
                  /></View> :
                    (this.state.status == 3) ? <View style={styles.imgStatus}><Image
                      style={styles.imageStt}
                      source={Images.ic_status3}
                    /></View> : null}
              <View>

              </View>
              <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", marginTop: Sizes.s20, marginLeft: Sizes.s20, }}>Danh sách sản phẩm</Text>
              {this.state.orderDetails.map((item) => (
                <Item
                  {...this.props}
                  productName={item.productName}
                  price={item.price}
                  description={item.description}
                  quan={`${item.quan}`}
                  productImg={item.productImg}
                  unit={item.unit}
                  productId={item.productId}
                />
              ))}
            </ScrollView>
            {(status == 0 || status == 1) ? <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => this.changeStatus("-2")}
                underlayColor="rgb(255, 255, 255)"
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: Sizes.s35,
                        color: "white",
                        marginLeft: Sizes.s20,
                      }}
                    >
                      Huỷ đơn hàng
								</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
              : (status == 2) ? <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => this.changeStatus("3")}
                  underlayColor="rgb(255, 255, 255)"
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: Sizes.s35,
                          color: "white",
                          marginLeft: Sizes.s20,
                        }}
                      >
                        Đã nhận được hàng
								</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View> : null}
          </View>
        }
      </SafeAreaView>
    );
  }
}
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quan: "1",
    }
  }
  render() {
    const { productName, price, productImg, productId } = this.props;
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("DetailsProductContainer", {
              productId,
            })
          }
          }
          style={styles.content}
        >
          <View style={{ margin: 5, flexDirection: "row" }}>
            <Image
              style={styles.image}
              source={{ uri: `http://127.0.0.1:8080/${productImg}` }}
            />
            <View style={{ marginTop: Sizes.s45, marginLeft: Sizes.s45, width: screen.width - Sizes.s200, }}>
              <View style={{ flexDirection: "row", width: "100%" }}>
                <Text style={styles.title}>{productName}</Text>
              </View>
              <Text style={styles.textPrice}>Giá: {price} VND</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  orderInfor: {
    flexDirection: "column",
    // backgroundColor: "red",
  },
  container1: {
    // flex: 1,
    backgroundColor: "#fff",
    marginBottom: Sizes.s160
  },
  content: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    // marginBottom: Sizes.s10,
    // backgroundColor:"red",
    borderColor: "#EFEFEF",
  },
  imgStatus: {
    width: "100%",

  },
  imageStt: {
    width: "90%",
    marginLeft: Sizes.s30,
    // marginRight: Sizes.s20,
    height: Sizes.s200,
    resizeMode: 'contain',
  },
  title: {
    flex: 8,
    fontSize: Sizes.s35,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  image: {
    width: Sizes.s200,
    height: Sizes.s200,
    alignItems: "center",
    resizeMode: 'contain',
    marginVertical: Sizes.s20,
    borderRadius: Sizes.s15,
  },
  infor: { flexDirection: "row", flexWrap: "wrap", marginTop: Sizes.s10, marginLeft: Sizes.s50, },
  addToCart: {
    fontSize: Sizes.s35,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  textDetailTitle: {
    fontSize: Sizes.s35,
    // fontWeight: "bold",
    // marginLeft: Sizes.s35,
  },
  textDetails: {
    fontSize: Sizes.s35,
    // color: "#828282",
  },
  textPrice: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    // color: "#828282",
    marginBottom: Sizes.s10,
  },
  btn_IDcrement: {
    borderWidth: 1,
    height: Sizes.s75,
    width: Sizes.s75,
    borderColor: "#EFEFEF",
    justifyContent: "center",
    alignItems: "center",
    // color: "#EFEFEF",
  },
  bottomButton: {
    width: "100%",
    flexDirection: "row",
    zIndex: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    height: Sizes.s100,
  },
  editBtn: {
    width: "90%",
    height: Sizes.s100,
    backgroundColor: "red",
    borderRadius: Sizes.s10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: Sizes.s20,
  },
  buttonView: {
    width: "100%",
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    marginTop: Sizes.s20,
    marginBottom: Sizes.s20,
    justifyContent: "flex-end",
  },
});