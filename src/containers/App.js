import React from 'react';
import {Button, Image, View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation'; // 1.0.0-beta.27
import {createStackNavigator} from 'react-navigation-stack';
import Images from "../res/images";
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";


import Login from '../components/login/Login';

import WelcomeScreen from '../components/welcomeScreen/WelcomeScreen';

import HomeContainer from '../containers/home/HomeContainer';
import ProfileContainer from '../containers/profile/ProfileContainer';
import CartContainer from '../containers/cart/CartContainer';
import NotificationContainer from '../containers/notification/NotificationContainer';

const TabNavigator = createBottomTabNavigator({
  Home: {
		screen: HomeContainer,
		navigationOptions: {
			tabBarLabel: "Trang chủ",
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
});
const AdminTabNavigator = createBottomTabNavigator({
  Home: {
		screen: HomeContainer,
		navigationOptions: {
			tabBarLabel: "Trang chủ",
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
});
const TAB = createAppContainer(TabNavigator);
const TABAdmin = createAppContainer(AdminTabNavigator);
const RootStack = createStackNavigator(
  {
    Init: {
      screen: WelcomeScreen,
    },
    Login: {
      screen: Login,
    },
    MyModal: {
      screen: TAB,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default createAppContainer(RootStack);
