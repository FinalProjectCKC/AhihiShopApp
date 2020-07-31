// @flow
import React from "react";

import { TouchableOpacity, Animated } from "react-native";

import { Badge, Icon } from "../../components";
// import Icon from 'react-native-vector-icons/Feather';

class CartIcon extends React.Component {
  render() {
    const heightBadge = 16;

    const badgeStyle = {
      borderRadius: heightBadge / 2,
      minWidth: heightBadge,
    };

    const textStyle = {
      textAlign: "center",
      fontSize: 8,
    };
    if (!configs.get("toggleCheckout")) {
      return null;
    }
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", alignItems: "center", padding: 6 }}
      >
        <Animated.View
          style={{
            transform: [{ scale: this.state.scale }],
            zIndex: 9999,
          }}
        >
          <Badge
            status="error"
            badgeStyle={badgeStyle}
            textStyle={textStyle}
            value={value}
          />
        </Animated.View>
        <Icon name="shopping-bag" size={20} {...iconProps} />
      </TouchableOpacity>
    );
  }
}

CartIcon.defaultProps = {
  value: 0,
  isAnimated: false,
  iconProps: {},
};

export default CartIcon;
