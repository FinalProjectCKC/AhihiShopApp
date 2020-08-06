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
      // productData: null,
      // productName: "",
      // quan: "",
      // productImg: "",
      // price: "",
      // description: "",
      // unit: "",
    };
  }
  componentDidUpdate(preProps) {
    console.log("=))", this.props.dataGetCart)
    // if (
    //   preProps.productData != this.props.productData &&
    //   this.props.error === null &&
    //   this.props.productData != null
    // ) {
    //   this.setState(
    //     {
    //       productData: this.props.productData,
    //       productName: this.props.productData.productName,
    //       productImg: this.props.productData.productImg,
    //       quan: this.props.productData.quan,
    //       price: this.props.productData.price,
    //       description: this.props.productData.description,
    //       unit: this.props.productData.unit,
    //     },
    //   );
    // }
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
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading && <Loading backgroundColor={"none"} />}
        <ScrollView style={styles.container}>
          <Headers
            name="canhbao"
            title="Giỏ hàng"
            onPressBackButton={() => {
              this.props.navigation.goBack();
            }}
          />
        </ScrollView>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.addToCart}>MUA HÀNG</Text>
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
  title: {
    fontSize: Sizes.s35,
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