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

export default class ListProductType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listProductType: [],
      page: 0,
      limit: 1,
      refreshing: false,
    };
  }
  componentDidMount() {
    this.loadData()
  }
  loadData() {
    this.props.getListProTypeAction({
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
        listProductType: [],
        refreshing: true,
      },
      async () => {
        this.loadData();
        this.setState({ refreshing: false });
      }
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.listProTypeData !== this.props.listProTypeData && this.props.error == null) {
      if (!arrayIsEmpty(this.props.listProTypeData)) {
        this.setState({
          listProductType: this.state.listProductType.concat(this.props.listProTypeData),
          // listProductType: this.props.listProTypeData,
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
            title="Danh sách loại sản phẩm"
            onPressBackButton={() => {
              this.props.navigation.navigate("MyModal");
            }}
          />
          {/* Have a nice day =)) */}
          {this.state.listProductType.length === 0 ?
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
              }}>Không có loại sản phẩm nào</Text>
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
            <View style={styles.new}>
              <FlatList
                scrollEnabled={!this.props.loading}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item._id}
                data={this.state.listProductType}
                refreshing={false}
                onMomentumScrollEnd={() => this.loadMore()}
                onRefresh={() => this.reloadList()}
                renderItem={({ item }) => (
                  <Item
                    {...this.props}
                    iconTitle={item.iconTitle}
                    imgUri={item.imgUri}
                    description={item.description}
                    ProType={item._id}
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
    const { iconTitle, imgUri, description, ProType } = this.props;

    return (
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate("DetailsListNew", {
            ProType,
          })
        }
      >
        <View style={styles.content}>
          <Text style={styles.title}>{iconTitle}</Text>
          <View style={styles.time}>
            <Text style={styles.description}>{description}</Text>
          </View>
          <Image
            style={styles.image}
            source={{ uri: `${imgUri}` }}
          />
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
    marginLeft: 20,
    marginRight: 20,
    // borderBottomColor: 'lightgray',
    // borderBottomWidth: 1
  },
  content: {
    marginTop: Sizes.s10,
    borderBottomWidth: 1,
    borderBottomColor: "#EFEFEF",
    marginBottom: Sizes.s10,
    borderColor: "#EFEFEF",
  },
  title: {
    fontSize: Sizes.s35,
    fontWeight: "bold",
  },
  image: {
    marginTop: Sizes.s30,
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
  description: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    color: "#828282",
    marginBottom: Sizes.s10,
  },
});
