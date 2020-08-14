import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import Headers from "../custom/Headers";
import { Sizes } from "@dungdang/react-native-basic";
import { ScrollView } from "react-native-gesture-handler";
import { arrayIsEmpty } from "@dungdang/react-native-basic/src/Functions";
import Loading from "../custom/Loading";
import Images from "../../res/images/index";

export default class ListOrderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listOrder: [],
      page: 1,
      limit: 5,
      refreshing: false,
    };
  }
  componentDidMount() {
    this.loadData()
  }
  loadData() {
    this.props.getListOrderAction({
      status: 999,
      page: this.state.page,
      limit: this.state.limit,
    });
  }
  loadMore() {
    console.log("load more")
    this.setState(
      {
        page: ++this.state.page,
      },
      () => {
        this.loadData();
      }
    );
  }
  reloadList = async () => {
    this.setState(
      {
        page: 0,
        listOrder: [],
        refreshing: true,
      },
      async () => {
        this.loadData();
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
      newsList: unique,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.listOrderData !== this.props.listOrderData && this.props.listOrderData !== null && this.props.error == null) {
      if (!arrayIsEmpty(this.props.listOrderData)) {
        this.setState({
          listOrder: this.state.listOrder.concat(this.props.listOrderData),
        }, () => {
          this.getUnique(this.state.listOrder, "_id");
        })
      }
    }
    if (prevProps.error != this.props.error && this.props.error != null) {
      console.log(this.props.error);
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#FFFF" }}>
        {this.props.loading && <Loading backgroundColor={"none"} />}
        <View style={styles.container}>
          <Headers
            name="canhbao"
            title="Danh sách đơn hàng"
            onPressBackButton={() => {
              this.props.navigation.goBack()
            }}
          />
          {/* Have a nice day =)) */}
          {this.state.listOrder.length === 0 ?
            <View style={{
              borderTopWidth: 1,
              borderTopColor: '#fff',
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
              }}>Bạn không có thông đơn hàng nào</Text>
            </View> :
            <View style={styles.new}>
              <FlatList
                scrollEnabled={!this.props.loading}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                data={this.state.listOrder}
                style={styles.new}
                refreshing={false}
                numColumns={1}
                onMomentumScrollEnd={() => this.loadMore()}
                onRefresh={() => this.reloadList()}
                renderItem={({ item }) => (
                  <Item
                    {...this.props}
                    total={item.total}
                    status={item.status}
                    orderDetails={item.orderDetail}
                    orderId={item._id}
                    created_at={item.created_at}
                  />
                )}
              />
            </View>
          }
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
    const { total, orderId, status, orderDetails, created_at } = this.props;
    var newDay = created_at.split('T', 2)
    let date = newDay[0]
    let time = newDay[1].split('.', 1)
    let img = ""
    let product = ""
    if (orderDetails !== null && orderDetails.length !== 0) {
      img = "http://127.0.0.1:8080/" + orderDetails[0].productImg
      let quan = parseInt(orderDetails.length) - 1
      if (quan > 0) {
        product = orderDetails[0].productName + " và " + quan + " sản phẩm khác"
      } else {
        product = orderDetails[0].productName
      }
    }
    return (
      <TouchableOpacity
        style={{ flex: 1 }}
        onPress={() =>
          this.props.navigation.navigate("OrderDetailsContainer", {orderID: orderId,
          })
        }>
        <View style={styles.content}>
          {(img == "") ? <Image
            style={styles.image}
            source={Images.ic_empty}
          /> : <Image
              style={styles.image}
              source={{ uri: `${img}` }}
            />}
          <View style={{ flexDirection: "column", marginTop: Sizes.s20, marginLeft: Sizes.s20 }}>
            <Text style={styles.title}>{product}</Text>
            {(status == 0) ? <Text style={{ fontSize: Sizes.s35, color: "yellow" }}>Đang chờ xác nhận</Text> :
              (status == 1) ? <Text style={{ fontSize: Sizes.s35, color: "yellow" }}>Đã được xác nhận</Text> :
                (status == -1) ? <Text style={{ fontSize: Sizes.s35, color: "red" }}>Đã bị huỷ</Text> :
                  (status == -2) ? <Text style={{ fontSize: Sizes.s35, color: "red" }}>Bạn đã huỷ</Text> :
                    (status == 2) ? <Text style={{ fontSize: Sizes.s35, color: "yellow" }}>Đang giao hàng</Text> :
                      (status == 3) ? <Text style={{ fontSize: Sizes.s35, color: "green" }}>Đã giao hàng</Text> : null}
            <View style={styles.time}>
              <Text style={styles.description}>Thành tiền: {total} VND</Text>
              <Text style={styles.description}>{date} {time}</Text>

            </View>
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
  new: {
    flex: 1,
    marginLeft: Sizes.s20,
    marginRight: Sizes.s20,
  },
  content: {
    width: "100%",
    flexDirection: "row",
    marginTop: Sizes.s10,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    marginBottom: Sizes.s10,
    borderColor: "#EFEFEF",
  },
  title: {
    flexWrap: "wrap",
    fontSize: Sizes.s35,
    // backgroundColor: "red",
    fontWeight: "bold",
  },
  image: {
    // marginTop: Sizes.s30,
    backgroundColor: "#ffaa",
    width: "30%",
    height: (width - Sizes.s30) * 0.3,
    alignItems: "center",
    marginVertical: Sizes.s20,
    borderRadius: Sizes.s15,
  },
  textContent: {
    marginTop: Sizes.s20,
    fontSize: Sizes.s35,
  },
  description: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    color: "#828282",
    marginBottom: Sizes.s10,
  },
});
