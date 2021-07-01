import React from "react";
import { View, StyleSheet, Text } from "react-native";
//https://medium.com/mindorks/everything-to-know-about-styling-in-react-native-7e30aed53ad
//https://freecontent.manning.com/applying-and-organizing-styles-in-react-native/
const Header = (props) => {
  const { textStyle, viewStyle,shadowStyle } = styles;
  return (
    <View style={[viewStyle,shadowStyle]}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "#000"
  },
  viewStyle: {
    backgroundColor: "#F8F8F8",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    marginTop: 22,
  },
  shadowStyle:{
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10
  }
});

export default Header;
