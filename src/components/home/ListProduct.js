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
import { userData } from "../../config/settings";
import { Sizes } from "@dungdang/react-native-basic";
import { ScrollView } from "react-native-gesture-handler";
import Loading from "../custom/Loading";
import SearchBar from "../custom/formItem/SearchBar";
import Images from "../../res/images/index";

export default class ListProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListProduct: [],
      page: 1,
      limit: 4,
      typeImg: "",
      description: "",
      searchText: null,
      list: [],
      tieuDe: "",
      header: "",
      ProTypeId: "",
    };
  }
  componentDidMount() {
    this.loadListProduct();
  }
  loadListProduct() {
    this.props.getListProductByTypeAction({
      ProTypeId: this.state.ProTypeId,
      page: this.state.page,
      limit: this.state.limit,
      // tieuDe: this.state.tieuDe,
    });
  }
  loadMore() {
    this.setState(
      {
        page: ++this.state.page,
        refreshing: true,
      },
      () => {
        this.loadListProduct();
        this.setState({ refreshing: false });
      }
    );
  }
  reloadList = async () => {
    this.setState(
      {
        page: 1,
        ListProduct: [],
        refreshing: true,
      },
      async () => {
        this.loadListProduct();
        this.setState({ refreshing: false });
      }
    );
  };
  getUnique(arr, comp) {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])

      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)

      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    this.setState({
      ListProduct: unique
    })
  }
  componentDidUpdate(preProps) {
    if (
      preProps.listProductData != this.props.listProductData &&
      this.props.error === null &&
      this.props.listProductData != null
    ) {
      this.setState(
        {
          ListProduct: this.state.ListProduct.concat(this.props.listProductData.product),
          header: this.props.listProductData.typeName,
          typeImg: this.props.listProductData.typeImg,
          description: this.props.listProductData.description,
          ProTypeId: this.props.listProductData.typeId,
        },
        () => {
          this.getUnique(this.state.ListProduct, '_id')
        }
      );
    }
    if (preProps.error != this.props.error && this.props.error != null) {
      console.warn(this.props.error);
    }
  }
  loadData() {
    this.props.getListProductByTypeAction({
      ProTypeId: this.state.ProTypeId,
      page: this.state.page,
      limit: this.state.limit,
    });
  }
  loadMore() {
    this.setState(
      {
        page: ++this.state.page,
      },
      () => {
        this.props.getListProductByTypeAction({
          ProTypeId: this.state.ProTypeId,
          page: this.state.page,
          limit: this.state.limit,
        });
      }
    );
  }
  render() {
    const { navigation } = this.props;
    const { typeImg, description } = this.state
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading && <Loading backgroundColor={"none"} />}
        <View style={styles.container}>
          <Headers
            name="canhbao"
            title={this.state.header}
            onPressBackButton={() => {
              this.props.navigation.goBack();
            }}
          >
            <View style={styles.search}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: "#F2F2F2",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: Sizes.s10,
                }}
              >
                <Image
                  source={Images.ic_search}
                  style={{
                    height: Sizes.s40,
                    width: Sizes.s40,
                    marginHorizontal: Sizes.s20,
                  }}
                />

                <TextInput
                  placeholder="Tìm kiếm"
                  placeholderTextColor="#ABAAAC"
                  style={{
                    fontSize: Sizes.s30,
                    paddingVertical: Sizes.s10,
                    fontFamily: "Roboto-Regular",
                    width: "100%",
                    color: "#000000",
                  }}
                  onChangeText={(text) => {
                    this.setState(
                      {
                        ListProduct: [],
                        page: 1,
                        limit: 5,
                        searchText: text,
                      },
                      () => {
                        this.loadData();
                      }
                    );
                  }}
                />
              </View>
            </View>
          </Headers>
          {this.state.ListProduct.length === 0 ?
            <View style={{
              borderTopWidth: 1,
              borderTopColor: '#EFEFEF',
              marginTop: Sizes.s20,
              width: '100%',
              paddingHorizontal: Sizes.s30,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Text style={{
                fontFamily: 'Roboto-Regular',
                fontSize: Sizes.s35,
                color: '#ABAAAC'
              }}>Không có sản phẩm nào</Text>
              {
                this.state.isShowMenu &&
                <TouchableOpacity
                  onPress={() => this.setState({ isShowMenu: false })}
                  style={{
                    width: Dimensions.get('window').width,
                    flex: 1,
                    backgroundColor: '#00000060',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: Dimensions.get('window').height
                  }} />
              }
            </View> :
            <FlatList
              scrollEnabled={!this.props.loading}
              style={styles.new}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.thongBaoID}
              data={this.state.ListProduct}
              refreshing={false}
              numColumns={2}
              onMomentumScrollEnd={() => this.loadMore()}
              onRefresh={() => this.reloadList()}
              renderItem={({ item }) => (
                <Item
                  {...this.props}
                  productName={item.productName}
                  price={item.price}
                  description={item.description}
                  quan={item.quan}
                  productImg={item.productImg}
                  unit={item.unit}
                  productId={item._id}
                />
              )}
            />}
        </View>
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
        <View style={{ margin: 5 }}>
          <Image
            style={styles.image}
            source={{ uri: `http://127.0.0.1:8080/${productImg}` }}
          />
          <Text style={styles.title}>{productName}</Text>
          <Text style={styles.textPrice}>Giá: {price} VND</Text>
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
  new: {
    flex: 1,
    marginLeft: Sizes.s40,
    marginRight: Sizes.s40,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1
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
  },
  image: {
    // marginTop: Sizes.s30,
    width: "100%",
    height: (width - Sizes.s30) * (360 / 640),
    alignItems: "center",
    marginVertical: Sizes.s20,
    borderRadius: Sizes.s15,
  },
  textContent: {
    marginTop: Sizes.s20,
    fontSize: Sizes.s35,
  },
  textPrice: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    color: "#828282",
    marginBottom: Sizes.s10,
  },
  search: {
    height: Sizes.s70,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: Sizes.s10,
    marginLeft: Sizes.s20,
    marginRight: Sizes.s30,
  },
  icon: {
    width: Sizes.s35,
    height: Sizes.s35,
    marginLeft: Sizes.s20,
  },
});