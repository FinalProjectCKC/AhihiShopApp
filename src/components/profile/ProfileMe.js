import React, { Component } from "react";

import { StyleSheet, ScrollView } from "react-native";
import { Header, ThemedView, Text } from "../../components";
// import HeaderMe from "./HeaderMe";
import SettingMe from "./SettingMe";
import InformationMe from "./InformationMe";
import Container from "./Container";
import TextHeader from "./TextHeader";
import CartIcon from "./CartIcon";
import { grey5 } from "../../components/config/colors";
import { margin } from "src/components/config/spacing";

class MeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };
  icon = (name) => {
    return {
      name: name,
      size: 18,
      color: grey5,
    };
  };

  //   handleLinkUrl = (url) => {
  //     Linking.openURL(url);
  //   };

  //   goPageOther = (router) => {
  //     this.props.navigation.navigate(router);
  //   };

  render() {
    // const {
    //   configs,
    //   auth: { isLogin },
    //   screenProps: { t },
    //   language,
    // } = this.props;

    return (
      <ThemedView isFullView>
        <Header
          centerComponent={<TextHeader title={t("common:text_me_screen")} />}
          rightComponent={<CartIcon />}
        />
        <ScrollView>
          <Container style={styles.viewContent}>
            {/* <HeaderMe /> */}
            <InformationMe
              isLogin={isLogin}
              // clickPage={this.goPageOther}
            />
            <SettingMe
            //   isLogin={isLogin}
            //   clickPage={this.goPageOther}
            //    goPhone={this.handleLinkUrl}
            //   phonenumber={configs.get("phone")}
            />
            <Text h6 colorThird>
              {typeof configs.get("copyright") === "string"
                ? configs.get("copyright")
                : configs.getIn(["copyright", language])}
            </Text>
          </Container>
        </ScrollView>
      </ThemedView>
    );
  }
}

const styles = StyleSheet.create({
  viewContent: {
    marginTop: margin.large,
    marginBottom: margin.big,
  },
  viewSocial: {
    flexDirection: "row",
    // justifyContent: 'center',
    marginVertical: margin.large + 4,
  },
  socialIconStyle: {
    width: 32,
    height: 32,
    margin: 0,
    marginHorizontal: margin.small / 2,
    paddingTop: 0,
    paddingBottom: 0,
  },
});

export default MeScreen;
