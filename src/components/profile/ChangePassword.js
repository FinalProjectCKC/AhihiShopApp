/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { View, Text, TextInput, Image, TouchableHighlight, SafeAreaView } from "react-native";
import { StyleSheet } from "react-native";
import Images from "../../res/images";
import { Sizes } from "@dungdang/react-native-basic";
import Headers from "../custom/Headers";
import { isPhone, screen } from '../../config/settings'
import ModalNotification from "../custom/Modal";
import { arrayIsEmpty } from "@dungdang/react-native-basic/src/Functions";
import { ScrollView } from "react-native-gesture-handler";

export default class ChangePassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: true,
			currentPass: "",
			passNew: "",
			confirmPass: "",
			alert: null,
		};
	}
	componentDidUpdate() { }
	componentDidMount() { }
	validatePassword = (pass) => {
		if (pass.trim(" ").length < 6) return false;
		if (pass.search(" ") != -1) return false;
		return true;
	};
	onBtnPress = () => {
		const { currentPass, passNew, confirmPass } = this.state;
		if (
			arrayIsEmpty(currentPass) ||
			arrayIsEmpty(passNew) ||
			arrayIsEmpty(confirmPass)
		) {
			this.setState({ alert: "Vui lòng nhập đầy đủ!" });
		} else if (
			currentPass.length < 6 ||
			passNew.length < 6 ||
			confirmPass.length < 6 ||
			!this.validatePassword(passNew) ||
			!this.validatePassword(confirmPass)
		) {
			this.setState({
				alert:
					"Mật khẩu phải có tối thiểu 6 ký tự\n và không chứa khoảng trắng. Vui lòng kiểm tra lại!",
			});
		} else {
			if (passNew !== confirmPass) {
				this.setState({
					alert: "Xác nhận mật khẩu không hợp lệ!",
				});
			} else {
				if (passNew === currentPass) {
					this.setState({
						alert: "Mật khẩu mới không được trùng với mật khẩu cũ!",
					});
				} else {


					console.log("changePassAction");
					this.props.changePassAction({
						id: this.props.id,
						MatKhauCu: currentPass,
						MatKhauMoi: passNew,
						MatKhauXacNhan: confirmPass,
					});
				}
			}
		}
	};

	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
						<Headers
						title="Đổi mật khẩu"
						name="canhbao"
						onPressBackButton={() => this.props.navigation.goBack()}
					/>
				<ScrollView style={{flex: 1}}>
					<View style={styles.content}>
						<View style={styles.box}>
							<Text style={styles.text}>Mật khẩu hiện tại</Text>
							<TextInput
								editable={this.state.editable}
								style={styles.input}
								onChangeText={(text) =>
									this.setState({ currentPass: text })
								}
								secureTextEntry={true}
							/>
						</View>

						<View style={styles.box}>
							<Text style={styles.text}>Mật khẩu mới</Text>
							<TextInput
								editable={this.state.editable}
								style={styles.input}
								onChangeText={(text) =>
									this.setState({ passNew: text })
								}
								secureTextEntry={true}
							/>
						</View>
						<View style={styles.box}>
							<Text style={styles.text}>Xác nhận mật khẩu</Text>
							<TextInput
								editable={this.state.editable}
								style={styles.input}
								onChangeText={(text) =>
									this.setState({ confirmPass: text })
								}
								secureTextEntry={true}
							/>
						</View>
						<View style={{ height: Sizes.s140 }}></View>
					</View>
					<View style={styles.buttonView}>
						<TouchableHighlight
							style={styles.editBtn}
							onPress={() => this.onBtnPress()}
							underlayColor="rgb(255, 255, 255)"
						>
							<View
								style={{
									flexDirection: "row",
									justifyContent: "center",
									alignItems: "center",
								}}
							>
								<View style={{ flexDirection: "row" }}>
									<Image
										source={Images.ic_changpassword}
										style={{
											width: Sizes.s50,
											height: Sizes.s50,
											resizeMode: "contain",
										}}
									/>
									<Text
										style={{
											fontWeight: "bold",
											fontSize: Sizes.s35,
											color: "white",
											marginLeft: Sizes.s20,
										}}
									>
										Đổi mật khẩu
								</Text>
								</View>
							</View>
						</TouchableHighlight>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: "center",
		backgroundColor: "white",
		marginTop: Sizes.s2,
		height: screen.height - Sizes.s260,
	},
	box: {
		margin: Sizes.s10,
		width: "90%",
		backgroundColor: "white",
		borderRadius: Sizes.s10,
	},
	text: {
		marginTop: Sizes.s20,
		fontSize: Sizes.h36,
		fontWeight: "bold",
		color: "#335272",
	},
	input: {
		width: "100%",
		fontSize: Sizes.h36,
		color: "rgba(34, 34, 34, 1)",
		paddingVertical: Sizes.s15,
		borderWidth: Sizes.s2,
		borderColor: "#EFEFEF",
		borderRadius: Sizes.s10,
	},
	editBtn: {
		width: "90%",
		height: Sizes.s100,
		backgroundColor: "red",
		borderRadius: Sizes.s10,
		justifyContent: "center",
		alignItems: "center",
		marginBottom: Sizes.s20,
	},
	buttonView: {
		width: "100%",
		bottom: 0,
		position: "absolute",
		alignItems: "center",
		marginBottom: Sizes.s20,
		justifyContent: "flex-end",
	},
});
