import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
  SafeAreaView
} from "react-native";
import Headers from "../custom/Headers";
import { Sizes } from "@dungdang/react-native-basic";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../custom/Loading";
import Images from "../../res/images/index";
import { isPhone, screen } from '../../config/settings'

export default class CartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataGetCart: null,
      cartDetail: [],
      quan: "",
      total: "",
    };
  }
  componentDidUpdate(preProps) {
    if (
      preProps.dataGetCart !== this.props.dataGetCart &&
      this.props.error1 == null &&
      this.props.dataGetCart !== null
    ) {
      this.setState(
        {
          dataGetCart: this.props.dataGetCart,
          cartDetail: this.props.dataGetCart.cartDetail,
          total: this.props.dataGetCart.Total,
        },
      );
    }
    if (
      preProps.dataRemoveFormCart !== this.props.dataRemoveFormCart &&
      this.props.error3 == null
    ) {
      this.props.getcartAction()
    }
    if (
      preProps.dataChangeQuan !== this.props.dataChangeQuan &&
      this.props.error2 == null
    ) {
      this.props.getcartAction()
    }
    if (preProps.error1 != this.props.error1 && this.props.error1 != null) {
      Alert.alert(
        "Thông báo",
        `${this.props.error}`,
        [
          {
            text: "OK",
            onPress: () =>
              console.log("OK Pressed"),
          },
        ],
        { cancelable: false }
      );
    }
  }
  render() {
    const { navigation } = this.props;
    let total = 0
    if (this.props.dataGetCart !== null) {
      total = this.props.dataGetCart.Total
    }
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading1 && <Loading backgroundColor={"none"} />}
        {this.props.loading2 && <Loading backgroundColor={"none"} />}
        <Headers
          name="canhbao"
          title="Giỏ hàng"
          onPressBackButton={() => {
            this.props.navigation.goBack();
          }}
        />
        {this.state.cartDetail.length === 0 ?
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
              source={Images.ic_cart_empty}
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
            }}>Không có sản phẩm nào trong giỏ hàng</Text>
          </View> :
          <View style={styles.container}>
            <ScrollView style={styles.container1}>
              {this.state.cartDetail.map((item) => (
                <Item
                  {...this.props}
                  productName={item.productName}
                  price={item.price}
                  description={item.description}
                  quan={`${item.quan}`}
                  productImg={item.productImg}
                  unit={item.unit}
                  productId={item.productId}
                  changeQuanAction={this.props.changeQuanAction}
                  removeFormCart={this.props.removeFormCartAction}
                  getcartAction={this.props.getcartAction}
                />
              ))}
              <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", marginTop: Sizes.s20, marginLeft: Sizes.s20, }}>Tổng Cộng : {total} VND</Text>
            
            </ScrollView>
            <View style={styles.buttonView}>
                <TouchableOpacity
                  style={styles.editBtn}
                  onPress={() => this.props.navigation.navigate('InfoShippingContainer')}
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
                      {/* <Image
										source={Images.ic_changpassword}
										style={{
											width: Sizes.s50,
											height: Sizes.s50,
											resizeMode: "contain",
										}}
									/> */}
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: Sizes.s35,
                          color: "white",
                          marginLeft: Sizes.s20,
                        }}
                      >
                        Mua Hàng
								</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
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
  onChangeQuanti(productId, quan) {
    let newQuan = parseInt(quan) + parseInt(this.state.quan)
    this.setState({
      quan: `${newQuan}`
    })
    this.props.changeQuanAction({ productId, quan })
    // this.props.getcartAction()
    // console.log(this.props.quan)
  }
  componentWillMount() {
    this.setState({
      quan: `${this.props.quan}`
    })
  }
  componentDidUpdate(prevProps) {
    // if (this.props.quan !== prevProps.quan) {
    //   this.setState({
    //     quan: `${this.props.quan}`
    //   })
    // }
  }
  render() {
    const { productName, price, description, productImg, unit, productId } = this.props;
    let quan = `${this.state.quan}`
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
                <TouchableOpacity
                  style={{ flex: 2 }}
                  onPress={() => {
                    this.props.removeFormCart({productId})
                  }}>
                     <Image
										source={Images.ic_cancel}
										style={{
											width: Sizes.s50,
											height: Sizes.s50,
											resizeMode: "contain",
										}}/>
                  {/* <Text style={{ width: Sizes.s50, height: Sizes.s50, fontSize: Sizes.s35, fontWeight: "bold", backgroundColor: "red", borderRadius: 50 }}>X</Text> */}
                </TouchableOpacity>
              </View>
              <Text style={styles.textPrice}>Giá: {price} VND</Text>
              <View style={{ marginTop: Sizes.s25, flexDirection: "row", width: "20%" }}>
                <TouchableOpacity
                  style={styles.btn_IDcrement}
                  onPress={() => {
                    this.onChangeQuanti(productId, 1)
                  }}>
                  <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", }}>+</Text>
                </TouchableOpacity>
                <TextInput
                  textAlign={'center'}
                  style={{
                    padding: Sizes.s20,
                    borderWidth: 1,
                    fontSize: Sizes.s35,
                    height: Sizes.s75,
                    width: Sizes.s140,
                    borderColor: "#EFEFEF",
                  }}
                  // onChangeText={(text) => {
                  //   this.setState({ orderQuan: text });
                  // }}
                  keyboardType='numeric'
                  value={quan}
                  defaultValue={quan}
                />
                <TouchableOpacity
                  style={styles.btn_IDcrement}
                  // disabled ={(this.state.orderQuan >= this.state.quan)}
                  disabled={(quan < 2)}
                  onPress={() => {
                    this.onChangeQuanti(productId, -1)
                  }}>
                  <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", }}>-</Text>
                </TouchableOpacity>
              </View>
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