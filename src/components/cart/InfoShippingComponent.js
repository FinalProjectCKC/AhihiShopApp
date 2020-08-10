import React from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	SafeAreaView,
	TouchableHighlight,
	TouchableOpacity,
	StyleSheet,
	ScrollView,
	Alert
} from "react-native";
import Images from "../../res/images";
import { Sizes } from "@dungdang/react-native-basic";
import { isPhone, screen } from '../../config/settings'
import Headers from "../custom/Headers"
import {
	objectIsNull,
	arrayIsEmpty,
	stringIsEmpty,
} from "@dungdang/react-native-basic/src/Functions";
import { data, userData } from "../../config/settings.js";
export default class InfoShippingComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			editable: true,
			hoten: "",
			sdt: "",
			diaChi: "",
			email: "",
			alert: null,
		};
	}

	componentDidUpdate(prevProps) {
		if (this.props.error1 == null && this.props.dataCreateOrder != prevProps.dataCreateOrder){
			Alert.alert(
				"Thông báo",
				"Đặt hàng thành công",
				[{
					text: "Tiếp tục mua sắm", onPress: () => {
						this.setState({ alert: null })
						this.props.navigation.replace('MyModal')
					}
				}],
				{ cancelable: false }
			);
		}
		if (this.props.error1 !== null && this.props.error1 !== prevProps.error1)
			Alert.alert(
				"Lỗi",
				this.props.error1,
				[{
					text: "OK", onPress: () => {
						this.setState({ alert: null })
					}
				}],
				{ cancelable: false }
			);
		if (this.state.alert !== null)
			Alert.alert(
				"Lỗi",
				this.state.alert,
				[{
					text: "OK", onPress: () => {
						this.setState({ alert: null })
					}
				}],
				{ cancelable: false }
			);
		if (this.props.userData !== prevProps.userData && this.props.userData !== null) {
			this.setState({
				hoten: this.props.userData.fullName,
				sdt: this.props.userData.phone,
				diaChi: this.props.userData.address,
				email: this.props.userData.email,
			})
		}
	}

	onBtnPress = () => {
		if (this.state.editable) {
			if (
				arrayIsEmpty(this.state.email) ||
				arrayIsEmpty(this.state.sdt)
			) {
				this.setState({
					alert: "Vui lòng nhập đầy đủ email và số điện thoại!",
				});
				return;
			}
			if (!this.validHoten(this.state.hoten)) {
				this.setState({
					alert: "Vui lòng nhập đầy đủ họ tên, không bao gồm các kí tự đặc biệt!",
				});
				return;
			}
			if (!this.validPhone(this.state.sdt)) {
				this.setState({
					alert: "Vui lòng nhập chính xác số điện thoại!",
				});
				return;
			}
			if (!this.validEmail(this.state.email)) {
				this.setState({ alert: "Vui lòng nhập chính xác email!" });
				return;
			}
			let input = {
				address: this.state.diaChi,
				email: this.state.email,
				phone: this.state.sdt,
				receiver: this.state.hoten,
			}
			this.props.createOrderAction(input)
			return;
		}
		if (this.state.editable == false) this.setState({ editable: true });
	};
	validHoten = (Hoten) => {
		var kt = true;
		var sample = '~!@#$%^&*()_+<>?{}|\/-1234567890';
		for (var i = 0; i < sample.length; i++) {
			if (Hoten.indexOf(sample.charAt(i)) != -1) kt = false;
		}
		if (Hoten.trim(' ').length == 0) return false;
		if (Hoten.length > 20 || kt == false || Hoten.length == 0) return false;
		return true
	}
	validEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(email);
	};
	validPhone = (phone) => {
		const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
		return re.test(phone);
	};
	replaceSpace = (text) => {
		text = text.trim();
		text = text.replace(/  +/g, ' ');
		return text;
	}
	render() {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
				<Headers
					name="canhbao"
					title="Thông tin giao hàng"
					onPressBackButton={() => this.props.navigation.goBack()}
				/>
				<ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
					<View style={{ alignItems: "center" }}>
						<View style={styles.box}>
							<Text style={styles.text}>Họ và tên người nhận</Text>
							<TextInput
								editable={this.state.editable}
								defaultValue={this.state.hoten}
								style={styles.input}
								onChangeText={(text) =>
									this.setState({ hoten: text })
								}
							/>
						</View>
						<View style={styles.box}>
							<Text style={styles.text}>Số điện thoại</Text>
							<TextInput
								editable={this.state.editable}
								defaultValue={this.state.sdt}
								style={styles.input}
								onChangeText={(text) =>
									this.setState({ sdt: text })
								}
							/>
						</View>
						<View style={styles.box}>
							<Text style={styles.text}>Địa chỉ người nhận</Text>
							<TextInput
								editable={this.state.editable}
								defaultValue={this.state.diaChi}
								style={styles.input}
								multiline={true}
								onChangeText={(text) => {
									(text = this.replaceSpace(text)),
										this.setState({ diaChi: text })
								}}
							/>
						</View>
						<View style={styles.box}>
							<Text style={styles.text}>Email</Text>
							<TextInput
								editable={this.state.editable}
								defaultValue={this.state.email}
								style={styles.input}
								onChangeText={(text) =>
									this.setState({ email: text })
								}
							/>
						</View>
						<TouchableOpacity style={styles.buttonView} onPress={() => this.onBtnPress()}
							underlayColor="rgb(255, 255, 255)">
							<View
								style={styles.editBtn}
							>
								<View
									style={{
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
									}}
								>
									{(this.state.editable) ? (
										<View style={{ flexDirection: "row" }}>
											{/* <Image
												source={Images.ic_save}
												style={{
													width: Sizes.s50,
													height: Sizes.s50,
													resizeMode: "contain",
												}}
											/> */}
											<Text
												style={{
													fontWeight: "bold",
													fontSize: Sizes.s35,
													color: "white",
													marginLeft: Sizes.s20,
												}}
											>
												Đặt hàng
										</Text>
										</View>
									) : (
											<View style={{ flexDirection: "row" }}>
												<Image
													source={Images.ic_edit3x}
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
													Cập nhật thông tin
												</Text>
											</View>
										)}
								</View>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		backgroundColor: "white",
		marginTop: Sizes.s5,
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
		// fontFamily: 'Roboto',
		fontSize: Sizes.h36,
		paddingHorizontal: Sizes.s20,
		marginTop: Sizes.s10,
		paddingVertical: Sizes.s15,
		color: "rgba(34, 34, 34, 1)",
		borderWidth: Sizes.s2,
		borderColor: "#EFEFEF",
		borderRadius: Sizes.s10,
	},
	editBtn: {
		height: Sizes.s100,
		marginTop: Sizes.s20,
		marginBottom: Sizes.s20,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonView: {
		width: "90%",
		height: Sizes.s100,
		marginTop: screen.height - Sizes.s340 * 3.2,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "red",
		borderRadius: Sizes.s10,
		flexDirection: "row",
	},
});
