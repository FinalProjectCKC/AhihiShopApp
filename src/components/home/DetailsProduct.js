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
  Modal,
  SafeAreaView
} from "react-native";
import { userData } from "../../config/settings";
import Headers from "../custom/Headers";
import { Sizes } from "@dungdang/react-native-basic";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../custom/Loading";
import Images from "../../res/images/index";
import ModalNotification from "../custom/Modal";

export default class productData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: null,
      productName: "",
      quan: "",
      productImg: "",
      price: "",
      productId: "",
      description: "",
      unit: "",
      proSize: "XL",
      orderQuan: 1,
      showModal: false,
    };
  }
  componentDidUpdate(preProps) {
    if (
      preProps.productData != this.props.productData &&
      this.props.error === null &&
      this.props.productData != null
    ) {
      this.setState(
        {
          productData: this.props.productData,
          productName: this.props.productData.productName,
          productImg: this.props.productData.productImg,
          quan: this.props.productData.quan,
          productId: this.props.productData._id,
          price: this.props.productData.price,
          description: this.props.productData.description,
          unit: this.props.productData.unit,
        },
      );
    }
    if (
      preProps.dataAddToCart != this.props.dataAddToCart &&
      this.props.error1 === null &&
      this.props.dataAddToCart != null
    ) {
      Alert.alert(
        "Thông báo",
        `Thêm thành công`,
        [
          {
            text: "Tiếp tục mua sắm",
            onPress: () =>
              console.log("OK Pressed"),
          },
        ],
        { cancelable: false }
      );
    }
    if (preProps.error1 != this.props.error1 && this.props.error1 != null) {
      Alert.alert(
        "Thông báo",
        `${this.props.error1}`,
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
    if (preProps.error != this.props.error && this.props.error != null) {
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
  proSizePress(proSize) {
    this.setState({
      proSize: proSize,
    });
  }
  proSizeStyle(proSize) {
    if (proSize == this.state.proSize) {
      return styles.boxSizeChose;
    }
    return styles.boxSize;
  }
  render() {
    const Table = [
      {
        key: "Kho",
        value: `${this.state.quan}`
      },
      {
        key: "Thương hiệu",
        value: "Made in China"
      },
      {
        key: "Loại",
        value: "Áo khoác"
      },
      {
        key: "Chất liệu",
        value: "inox"
      },
      {
        key: "Xuất xứ",
        value: "Tung Của"
      },
    ]
    const ProductSize = ["XL", "L", "M", "S"]
    const { navigation } = this.props;
    const { productData, productName, productImg, quan, price, description, orderQuan, productId } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading && <Loading backgroundColor={"none"} />}
        <Headers
          name="headerCartIcon"
          title="Chi tiết sản phẩm"
          onPressBackButton={() => {
            this.props.navigation.goBack();
          }}
          onPressCartButton={()=>{
            this.props.navigation.navigate('CartContainer')
          }}
        />
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: `http://127.0.0.1:8080/${productImg}` }}
            />
            <View style={styles.time}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.textPrice}>Giá: {price} VND</Text>
            </View>
            <View style={{ marginLeft: Sizes.s25, flexDirection: "row", }}>
              {ProductSize.map((item) => (
                <TouchableOpacity
                  style={this.proSizeStyle(item)}
                  onPress={() => {
                    this.proSizePress(item);
                  }}>
                  <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", }}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <View style={{ marginLeft: Sizes.s25, marginTop: Sizes.s25, flexDirection: "row", }}>
              <TouchableOpacity
                style={styles.btn_IDcrement}
                disabled={(this.state.orderQuan < 2)}
                onPress={() => {
                  this.setState({
                    orderQuan: --this.state.orderQuan
                  })
                }}>
                <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", }}>-</Text>
              </TouchableOpacity>
              <View style={{
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                borderWidth: 1,
                height: Sizes.s75,
                borderColor: "black",
              }}>
                <TextInput
                  style={styles.orderQuan}
                  onChangeText={(text) => {
                    this.setState({ orderQuan: text });
                  }}
                  keyboardType='numeric'
                  value={this.state.orderQuan}
                  defaultValue={this.state.orderQuan}
                >{this.state.orderQuan}</TextInput>
              </View>
              <TouchableOpacity
                style={styles.btn_IDcrement}
                disabled={(this.state.orderQuan >= this.state.quan)}
                onPress={() => {
                  this.setState({
                    orderQuan: ++this.state.orderQuan
                  })
                }}
              >
                <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", }}>+</Text>
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: Sizes.s20 }}>
              <Text style={{ fontSize: Sizes.s35, fontWeight: "bold", marginLeft: Sizes.s35 }}>Thông tin sản phẩm</Text>
              {Table.map((item) => (
                <View style={styles.table}>
                  <View style={styles.tableRow}>
                    <Text style={styles.textTable}>{item.key}</Text>
                  </View>
                  <View style={styles.tableRow}>
                    <Text style={styles.textTable}>{item.value}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => {
              if (userData.token == "") {
                this.props.navigation.replace("Login")
              } else {
                this.props.addToCartAction({ productId, quan: orderQuan })
                this.setState({ showModal: true })
              }
            }}
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
                  Thêm Vào Giỏ Hàng
								</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity style={styles.bottomButton} onPress={() => {
          this.props.addToCartAction({ productId, quan: orderQuan })
          this.setState({ showModal: true })
        }}>
          <Text style={styles.addToCart}>THÊM VÀO GIỎ HÀNG</Text>
        </TouchableOpacity> */}
      </SafeAreaView>
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
  table: {
    width: "90%",
    height: Sizes.s60,
    flexDirection: "row",
    marginLeft: Sizes.s35,
    borderTopColor: "black",
    borderTopWidth: 1,
  },
  tableRow: {
    flex: 1,
    flexDirection: "column",
    marginLeft: Sizes.s35,
  },
  textTable: {
    fontSize: Sizes.s35,
    // fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  time: {
    marginLeft: Sizes.s35,
  },
  title: {
    fontSize: Sizes.s55,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  image: {
    width: "100%",
    height: (width + Sizes.s30),// * (360 / 640),
    alignItems: "center",
    // resizeMode: 'contain',
    marginVertical: Sizes.s20,
    borderRadius: Sizes.s15,
  },
  addToCart: {
    fontSize: Sizes.s35,
    fontWeight: "bold",
    fontFamily: 'Roboto',
  },
  boxSizeChose: {
    borderWidth: 2,
    height: Sizes.s75,
    marginLeft: Sizes.s15,
    width: Sizes.s75,
    borderColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    color: "#828282",
  },
  boxSize: {
    borderWidth: 1,
    height: Sizes.s75,
    marginLeft: Sizes.s15,
    width: Sizes.s75,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    color: "#828282",
  },
  orderQuan: {
    marginLeft: Sizes.s80,
    height: Sizes.s75,
    width: Sizes.s140,
    fontSize: Sizes.h30,
    color: 'black'
  },
  btn_IDcrement: {
    borderWidth: 1,
    height: Sizes.s75,
    width: Sizes.s75,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
    color: "#828282",
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