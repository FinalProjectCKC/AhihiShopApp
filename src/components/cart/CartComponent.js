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
  SafeAreaView
} from "react-native";
import Headers from "../custom/Headers";
import { Sizes } from "@dungdang/react-native-basic";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../custom/Loading";
import Images from "../../res/images/index";

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
    console.log(this.state.cartDetail)
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
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading1 && <Loading backgroundColor={"none"} />}
        <Headers
          name="canhbao"
          title="Giỏ hàng"
          onPressBackButton={() => {
            this.props.navigation.goBack();
          }}
        />
        {/* {true ? */}
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
            <ScrollView style={styles.container}>
              {this.state.cartDetail.map((item) => (
                <Item
                  {...this.props}
                  productName={item.productName}
                  price={item.price}
                  description={item.description}
                  quan={item.quan}
                  productImg={item.productImg}
                  unit={item.unit}
                  productId={item.productId}
                />
              ))}
            </ScrollView>
            <View style={styles.buttonView}>
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => this.onBtnPress()}
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
  }
  render() {
    const { productName, price, description, quan, productImg, unit, productId } = this.props;

    return (
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
          <View style={{ marginTop: Sizes.s45, }}>
            <Text style={styles.title}>{productName}</Text>
            <Text style={styles.textPrice}>Giá: {price} VND</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  content: {
    // marginTop: Sizes.s10,
    width: "50%",
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    // marginBottom: Sizes.s10,
    borderColor: "#EFEFEF",
  },
  title: {
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
    marginBottom: Sizes.s20,
    justifyContent: "flex-end",
  },
});