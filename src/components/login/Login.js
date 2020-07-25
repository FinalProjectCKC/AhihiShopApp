

import React from 'react';
import { Button, Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { StyleSheet, Dimensions, StatusBar } from "react-native";
import { Sizes } from "@dungdang/react-native-basic";

export default class Login extends React.Component {
  render() {
    return (
      <SafeAreaView>
       <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:"#eee"}}>
          <Text>Login!</Text>

          <Button
            onPress={() => this.props.navigation.navigate('MyModal')}
            title="Go to Main "
          />
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
	container: {
    flex: 1,
	},
});