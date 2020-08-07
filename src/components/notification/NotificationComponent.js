
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

export default class NotificationComponent extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
         <Headers
          name="canhbao"
          title="Thông báo"
          onPressBackButton={() => {
            this.props.navigation.goBack();
          }}
        />
       {true ?
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
            }}>Bạn không có thông báo nào</Text>
          </View> :
        <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:"#eee"}}>
          <Text  > NotificationComponent!</Text>
        </View>
        }
      </SafeAreaView>
    );
  }
}