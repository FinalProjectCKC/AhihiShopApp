import {  Dimensions } from "react-native";

export const screen = Dimensions.get('window');
export const isPhone = screen.height / screen.width > 1.5 ? true : false

export var userData = {
  admin: false,
  token: "",
  username: "Asssss",
  fullname: "",
  password: "a",
  email: "",
  phone: "",
  avatarUrl: null,
  address: null,
  accRole: "user"
};