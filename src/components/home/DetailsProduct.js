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
  showModal() {
    return (
      <View style={{ flex: 1, backgroundColor: "#acc" }}>
        <View style={{ width: "80%", height: "60%", backgroundColor: "#fff" }}>
          <TouchableOpacity style={styles.bottomButton} onPress={() => {
            this.props.addToCartAction({ productId })
          }}>
            <Text style={styles.addToCart}>THÊM VÀO GIỎ HÀNG</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  render() {
    const Table = [
      {
        key: "Kho",
        value: "1000"
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
    const { navigation } = this.props;
    const { productData, productName, productImg, quan, price, description, productId } = this.state;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading && <Loading backgroundColor={"none"} />}
        <ScrollView style={styles.container}>
          <Headers
            name="canhbao"
            title="Chi tiết sản phẩm"
            onPressBackButton={() => {
              this.props.navigation.goBack();
            }}
          />
          <View>
            <Image
              style={styles.image}
              source={{ uri: `http://127.0.0.1:8080/${productImg}` }}
            />
            <View style={styles.time}>
              <Text style={styles.title}>{productName}</Text>
              <Text style={styles.textPrice}>Giá: {price} VND</Text>
            </View>
            <View style={{ marginTop: Sizes.s20 }}>
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
        <TouchableOpacity style={styles.bottomButton} onPress={() => {
          // this.props.addToCartAction({ productId })
          this.setState({ showModal: true })
        }}>
          <Text style={styles.addToCart}>THÊM VÀO GIỎ HÀNG</Text>
        </TouchableOpacity>
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
    width: "80%",
    height: Sizes.s60,
    flexDirection: "row",
    marginLeft: Sizes.s35,
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
});