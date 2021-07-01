import React from "react";
import { View, Image, Text,StyleSheet } from "react-native";

const AlbumDetail = (props) => {
  const { textStyle, viewStyle,shadowStyle ,ImageCenterStyle} = styles;
  return (
    <View style={[ImageCenterStyle]}>
      <Text>{props.album.title}</Text>
      <Image style={[{ width: 200, height: 200 }]} source = {{uri:props.album.image}}

   />
    </View>
  );
};


export default AlbumDetail;
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    color: "#000"
  },
  ImageCenterStyle:{
    justifyContent: "center",
    alignItems: "center",
  },
  viewStyle: {
    backgroundColor: "#F8F8F8",

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