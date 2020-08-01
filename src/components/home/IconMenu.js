import React from "react";
import { ImageBackground, Text, View, TouchableOpacity } from "react-native";
import { StyleSheet, Dimensions, Image, Alert } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { Sizes } from "@dungdang/react-native-basic";
import Images from "../../res/images";

export default class IconMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() { }

	showImg() {
		if (this.props.imgUri !== "") {
			return <Image source={{ uri: this.props.imgUri }} style={styles.icon} />
		}
		else if (this.props.imgUrl !== "") {
			return (<Image source={this.props.imgUrl} style={styles.icon} />)
		}
		return (<Image source={Images.ic_default} style={styles.icon} />)
	}
	render() {
		const { title, imgUrl, imgUri, screenNavigate, itemParams } = this.props
		if (screenNavigate == "" && title != "") {
			return (
				<View style={styles.content}>
					<TouchableOpacity
						style={styles.touch}
						onPress={() => {
							Alert.alert(
								"Thông báo",
								"Chức năng đang được cập nhật!",
								[
									{
										text: "OK",
										onPress: () =>
											console.log(
												"OK Pressed"
											),
									},
								],
								{ cancelable: false }
							);
						}}
						underlayColor="rgb(255, 255, 255)"
					>
						{this.showImg()}
						<Text style={styles.text}>{title}</Text>
					</TouchableOpacity>
				</View>
			);
		} else {
			return (
				<View style={styles.content}>
					<TouchableOpacity
						style={styles.touch}
						onPress={() => {
							this.props.navigation.navigate(`${screenNavigate}`, { itemParams });
						}}
						underlayColor="rgb(255, 255, 255)"
					>
						{this.showImg()}
						<Text style={styles.text}>{title}</Text>
					</TouchableOpacity>
				</View>
			);
		}
	}
}

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
	content: {
		width: screen.width * 0.33,
		// height: screen.width*0.4,
		marginTop: Sizes.s30,
		alignItems: "center",
	},
	touch: {
		width: screen.width * 0.2,
		height: screen.width * 0.3,
		// marginTop: Sizes.s20,
		alignItems: "center",
	},
	contentDisable: {
		width: screen.width * 0.33,
		opacity: 0.3,
		// marginTop: Sizes.s30,
		alignItems: "center",
	},

	imageStyle: {
		borderRadius: screen.width / 6 / 5,
		zIndex: 5,
	},
	icon: {
		width: Sizes.s160,
		height: Sizes.s160,
		// resizeMode: "contain",
		resizeMode: "cover",
		marginTop: Sizes.s10,
		marginBottom: Sizes.s15,
		borderRadius: Sizes.s60,
	},
	text: {
		width: Sizes.s200,
		textAlign: "center",
		color: "black",
		fontFamily: 'Roboto',
		marginTop: Sizes.s10,
		fontSize: Sizes.h30,
	},
});
