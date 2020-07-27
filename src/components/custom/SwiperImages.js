import React, { Component } from 'react'
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions
} from "react-native";
import {
  elevationShadowStyle,
  objectIsNull,
} from "@dungdang/react-native-basic/src/Functions";
import { Sizes } from "@dungdang/react-native-basic";
import Images from '../../res/images';
import Icon from "react-native-vector-icons/FontAwesome5";
// import Swiper from 'react-native-swiper'
import Swiper from '../custom/Swiper'
import { isPhone, screen } from '../../config/settings'

export default class SwiperImages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      indexSlide: 0
    }
  }
  componentDidUpdate(prevProps) {
    console.log("=))", this.props.indexSlide)
    if (this.props.indexSlide != prevProps.indexSlide) {
      this.setState({
        indexSlide: this.props.indexSlide
      })
    }
  }
  render() {
    const listImage = this.props.listImage
    return (
      <View style={styles.header}>
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={ref => { this.scrollView = ref }}
        onLayout={() => {
          this.scrollView.scrollTo({
            x: this.state.indexSlide * Dimensions.get('window').width,
            y: 0,
            animated: false
          })
      }}
      pagingEnabled={true}
    >
      {props.children}
    </ScrollView>

        {/* <Swiper
          index={this.state.indexSlide}
          style={styles.wrapper}
          dotStyle={{
            borderWidth: 1,
            borderColor: '#007AFF',
            backgroundColor: '#222222'
          }}
        >
          {
            listImage.map(item =>
              <View style={styles.slide}>
                <Image
                  defaultSource={require('../../res/images/ic_default.jpg')}
                  resizeMode='contain'
                  source={{ uri: item.url }}
                  style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                  }}
                />
              </View>
            )
          }
        </Swiper> */}
      </View>
    )
  }
}
const { width, height } = Dimensions.get('window')
const styles = {
  container: {
    flex: 1,
  },
  imgHeader: {
    width: "100%",
    height: isPhone ? Sizes.s340 * 1.2 : Sizes.s340,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red"
  },
  slide: {
    flex: 1,
    height: isPhone ? Sizes.s340 * 1.2 : Sizes.s340,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: Sizes.s60,
    fontWeight: 'bold'
  },
  titleIntro: {
    fontSize: Sizes.s30 + Sizes.s2,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Sizes.s20,
    marginBottom: Sizes.s20,
  },
  imgItem: {
    marginRight: Sizes.s40,
    marginBottom: Sizes.s80,
  },
  image: {
    width,
    height: isPhone ? Sizes.s340 * 1.2 : Sizes.s340,
  }
}