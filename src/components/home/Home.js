
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
import SwiperImages from '../custom/SwiperImages'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      indexSlide: 0
    }
    this.slideImage = React.createRef()
  }
  onChangeSlide(listLength) {
    let indexSlide = this.state.indexSlide
    if (indexSlide < listLength) {
      indexSlide = parseInt(indexSlide) + 1
    } else {
      indexSlide = 0
    }
    this.setState({ indexSlide: indexSlide },  ()=>{
      this.slideImage.current.scrollToIndex(this.state.indexSlide)
    })
  }
  render() {
    const listImage = [{
      url: "https://i.pinimg.com/236x/e9/b7/7b/e9b77b9e184e99027f0905e1984e74eb.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/5d/b0/55/5db05527613c8e6fa76d88abb1b02c66.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/59/ee/34/59ee347f8c614775178b99cd44a1c01e.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/db/09/f0/db09f09594b1f6cf431f51573dd7689f.jpg"
    },
    {
      url: "https://i.pinimg.com/236x/63/e3/72/63e372af804049f16527fcb1f2e55f50.jpg"
    },]

    setTimeout(() => { this.onChangeSlide(listImage.length) }, 2000)
    return (
      <ScrollView style={{ flex: 1 }}>
        {/* header */}
        <View style={styles.header}>
          <Swiper ref={this.slideImage}>
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
          </Swiper>
          {/* <SwiperImages
            listImage={listImage}
            indexSlide={this.state.indexSlide} /> */}
        </View>
        {/* content */}
        {/* <View style={styles.content}>
          <Text> content!</Text>
        </View> */}
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: isPhone ? Sizes.s340 * 1.2 : Sizes.s340,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "red"
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: "100%",
    height: isPhone ? Sizes.s340 * 1.2 : Sizes.s340,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "blue"
  },
})