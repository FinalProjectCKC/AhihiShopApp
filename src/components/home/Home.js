
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
  ScrollView
} from "react-native"
import { StyleSheet, Dimensions, StatusBar } from "react-native"
import { Sizes } from "@dungdang/react-native-basic"
import {
  arrayIsEmpty,
  objectIsNull,
} from "@dungdang/react-native-basic/src/Functions"
import Images from "../../res/images";
import { isPhone, screen } from '../../config/settings'
import Swiper from '../custom/Swiper'
import OrderShippingComponent from '../order/OrderShipping'
import IconMenu from "./IconMenu";
import Slideshow from 'react-native-image-slider-show';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      indexSlide: 0,
      searchKey: "",
      listImage: [
        {
          title: ' ',
          caption: ' ',
          url: require('../../res/images/bag.png'),
        },
        {
          title: ' ',
          caption: ' ',
          url: require('../../res/images/blog-7.jpg'),
        },
        {
          title: ' ',
          caption: ' ',
          url: require('../../res/images/blog-8.jpg'),
        },
        {
          title: ' ',
          caption: ' ',
          url: require('../../res/images/man.png'),
        },
        {
          title: ' ',
          caption: ' ',
          url: require('../../res/images/woman.png'),
        },
        {
          title: ' ',
          caption: ' ',
          url: require('../../res/images/feature.png'),
        },
      ],
    }
  }
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          indexSlide: this.state.indexSlide === this.state.listImage.length ? 0 : this.state.indexSlide + 1
        });
      }, 3000)
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
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
  }
  render() {
    let { listImage, indexSlide } = this.state
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* header */}
        <View style={styles.searchBar}>
          <View
            style={{
              backgroundColor: "#F2F2F2",
              flexDirection: "row",
              alignItems: "center",
              height: Sizes.s90,
              width: "85%",
              borderRadius: Sizes.s10,
            }}
          >
            <TextInput
              placeholder="   Tìm kiếm sản phẩm"
              placeholderTextColor="#ABAAAC"
              style={{
                fontSize: Sizes.s30,
                paddingVertical: Sizes.s10,
                height: Sizes.s100,
                marginLeft: Sizes.s10,
                width: "85%",
                color: "#000000",
              }}
              onChangeText={(text) => {
                this.setState(
                  {
                    searchKey: text,
                  }
                );
              }
              }
            />
            <TouchableOpacity onPress={() => {
              if (this.state.searchKey != "") {
                this.props.navigation.navigate("ListProductContainer22", { searchKey: this.state.searchKey })
              }
            }}><Image
                source={Images.ic_search}
                style={{
                  height: Sizes.s40,
                  width: Sizes.s40,
                  // marginHorizontal: Sizes.s20,
                }}
              /></TouchableOpacity>
          </View>
        </View>
        <View style={styles.header}>
          <Slideshow
            height={Sizes.s340 * 1.2}
            arrowSize={1}
            dataSource={listImage}
            position={indexSlide}
            onPositionChanged={indexSlide => this.setState({ indexSlide })} />
        </View>
        {/* productType */}
        <HomeScrollItem
          {...this.props}
          listType={this.props.listProTypeData}
          itemTitle={"Danh mục sản phẩm"}
          naviSeeMore="ListProductTypeContainer"
        />
        <HomeScrollItem
          {...this.props}
          listType={this.props.listProTypeData}
          itemTitle={"Sản phẩm ưa thích"}
          naviSeeMore=""
        />
        {/* <HomeScrollItem
          {...this.props}
          listType={this.props.listProTypeData}
          itemTitle={"Gợi ý cho bạn"}
          naviSeeMore=""
        /> */}
      </ScrollView>
    );
  }
}
export class HomeScrollItem extends React.Component {
  render() {
    const { listType, itemTitle, naviSeeMore } = this.props
    return (
      <View styles={{ flex: 1 }}>
        <View style={stylesItem.ViewItemTitle}>
          <Text style={{ flex: 8, fontSize: Sizes.s45, marginLeft: Sizes.s30 }}>{itemTitle}</Text>
          <TouchableOpacity
            style={stylesItem.seeMore}
            onPress={() => {
              this.props.navigation.replace(`${naviSeeMore}`);
            }}
            underlayColor="rgb(255, 255, 255)"
          >
            <Text style={stylesItem.seeMoreText}>Xem Thêm</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.content} showsHorizontalScrollIndicator={false} horizontal={true} number={2}>
          {listType.map((iconData) => (
            <IconMenu
              {...this.props}
              style={{
                marginLeft: 0,
              }}
              imgUrl={iconData.imgUrl}
              imgUri={iconData.imgUri}
              itemParams={iconData.itemParams}
              title={iconData.iconTitle}
              screenNavigate={iconData.screenNavigate}
            />
          ))}
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  header: {
    // width: "100%",
    height: Sizes.s340,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: "red"
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flexDirection: "row",
    borderRadius: Sizes.s10,
    // marginLeft: Sizes.s20,
    // marginRight: Sizes.s30,
    position: 'absolute',
    zIndex: 5,
    marginTop: Sizes.s120,
    width: "100%",
    height: Sizes.s100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    // flex: 1,
    width: "100%",
    height: screen.width * 0.7,
    // height: isPhone ? Sizes.s340 * 1.3 : Sizes.s340 + Sizes.s120,
    // marginTop: Sizes.s30,
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "flex-start",
  },
})
const stylesItem = StyleSheet.create({
  ViewItemTitle: {
    width: "100%",
    height: Sizes.s75,
    marginTop: Sizes.s45,
    backgroundColor: "white",
    // alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  seeMore: {
    flex: 3,
    height: screen.width * 0.7,
    left: 0,
    marginRight: Sizes.s20,
    // marginLeft: Sizes.s160,
    // backgroundColor:"red"
  },
  seeMoreText: {
    marginTop: Sizes.s10,
    fontSize: Sizes.s35,
    color: "blue",
    flexWrap: "wrap",
  },
})