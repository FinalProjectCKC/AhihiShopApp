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
import Swiper from 'react-native-swiper'
import { isPhone, screen } from '../../config/settings'

export default class SwiperImages extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { imgData } = this.props
    return (
      <View style={styles.container}>
          <Swiper
            style={styles.wrapper}
            height={0}
            showsButtons
            onMomentumScrollEnd={(e, state, context) =>
              console.log('index:', state.index)
            }
            paginationStyle={{
              bottom: -23,
              left: null,
              right: 10
            }}
            loop
          >
            {imgData.map((item) => (
              <View
                style={styles.slide}
              // title={
              //   <Text numberOfLines={1}>Ahihi</Text>
              // }
              >
                <Image
                  resizeMode="cover"
                  style={styles.image}
                  source={{ uri: item.url }}
                />
              </View>
            ))}
          </Swiper>
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
        backgroundColor:"red"
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