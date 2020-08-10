import React from 'react'
import { Button, Image, View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation' // 1.0.0-beta.27
import { createStackNavigator } from 'react-navigation-stack'
import Images from "../res/images"
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from "react-native-vector-icons/FontAwesome5"

import { userData } from "../config/settings"

import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen'

//User
import LoginContainer from '../containers/login/LoginContainer'
import RegisContainer from '../containers/login/RegisContainer'

import HomeContainer from '../containers/home/HomeContainer'
import ListProductTypeContainer from '../containers/home/ListProductTypeContainer'
import DetailsProductContainer from '../containers/home/DetailsProductContainer'
import ListProductContainer from '../containers/home/ListProductContainer'

import CartContainer from './cart/CartContainer'
import InfoShippingContainer from './cart/InfoShippingContainer'

import NotificationContainer from './notification/NotificationContainer'

import ChangePassContainer from './profile/ChangePassContainer'
import InformationContainer from './profile/InformationContainer'
import ProfileContainer from '../containers/profile/ProfileContainer'

//Order
import OrderShipping from '../components/order/OrderShipping'
//Admin
import ControlContainer from './control/ControlContainer'
import OrderContainer from './order/OrderContainer'

const RouteUser = {
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      tabBarLabel: "Trang chủ",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
          source={Images.ic_inactive_home}
          color={tintColor}
        />
      ),
    },
  },
  // Search: {
  // 	screen: Home2,
  // 	navigationOptions: {
  // 		tabBarLabel: " ",
  // 		tabBarIcon: ({ tintColor }) => (
  // 			<Image
  // 				style={{
  // 					resizeMode: "contain",
  // 					width: 25,
  // 					height: 25,
  // 					tintColor: tintColor,
  // 				}}
  // 				source={Images.ic_search}
  // 				color={tintColor}
  // 			/>
  // 		),
  // 	},
  // },
  Notification: {
    screen: NotificationContainer,
    navigationOptions: {
      tabBarLabel: "Thông báo",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 35,
            height: 35,
            tintColor: tintColor,
          }}
          source={Images.ic_bell}
          color={tintColor}
        />
      ),
    },
  },
  Cart: {
    screen: CartContainer,
    navigationOptions: {
      tabBarLabel: "Giỏ hàng",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 35,
            height: 35,
            tintColor: tintColor,
          }}
          source={Images.shopping_cart}
          color={tintColor}
        />
      ),
    },
  },
  Profiles: {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: "Tôi",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
          source={Images.ic_inactive_user}
          color={tintColor}
        />
      ),
    },
  },
}
const RouteAdmin = {
  Home: {
    screen: HomeContainer,
    navigationOptions: {
      tabBarLabel: "Trang chủ",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
          source={Images.ic_inactive_home}
          color={tintColor}
        />
      ),
    },
  },
  Notification: {
    screen: NotificationContainer,
    navigationOptions: {
      tabBarLabel: "Thông báo",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 35,
            height: 35,
            tintColor: tintColor,
          }}
          source={Images.ic_bell}
          color={tintColor}
        />
      ),
    },
  },
  Control: {
    screen: ControlContainer,
    navigationOptions: {
      tabBarLabel: "Quản lý",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
          source={Images.ic_insight_inactive}
          color={tintColor}
        />
      ),
    },
  },
  Order: {
    screen: NotificationContainer,
    navigationOptions: {
      tabBarLabel: "Đơn hàng",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
          source={require("../res/images/ic_task_inactive.png")}
          color={tintColor}
        />
      ),
    },
  },
  Profiles: {
    screen: ProfileContainer,
    navigationOptions: {
      tabBarLabel: "Tôi",
      tabBarOptions: { activeTintColor: 'red' },
      tabBarIcon: ({ tintColor }) => (
        <Image
          style={{
            resizeMode: "contain",
            width: 25,
            height: 25,
            tintColor: tintColor,
          }}
          source={Images.ic_inactive_user}
          color={tintColor}
        />
      ),
    },
  },
}

const AppNavigator = createBottomTabNavigator(
  userData.admin ? RouteAdmin : RouteUser,
)

const TAB = createAppContainer(AppNavigator)
const RootStack = createStackNavigator(
  {
    Init: {
      screen: WelcomeScreen,
    },
    Login: {
      screen: LoginContainer,
    },
    RegisContainer: {
      screen: RegisContainer,
    },
    ListProductTypeContainer: {
      screen: ListProductTypeContainer,
    },
    ListProductContainer: {
      screen: ListProductContainer,
    },
    InfoShippingContainer: {
      screen: InfoShippingContainer,
    },
    DetailsProductContainer: {
      screen: DetailsProductContainer,
    },
    ChangePassContainer: {
      screen: ChangePassContainer,
    },
    InformationContainer: {
      screen: InformationContainer,
    },
    OrderShipping: {
      screen: OrderShipping,
    },
    MyModal: {
      screen: TAB,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
)

export default createAppContainer(RootStack)
