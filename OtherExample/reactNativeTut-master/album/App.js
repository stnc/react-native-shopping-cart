import React from "react";
import Header from "./src/components/header";
import AlbumList from "./src/components/albumList";
import { View } from "react-native";
const App = () => {
  return (
    <View>
      <Header headerText={"ishak"} />
      <AlbumList/>
    </View>
  );
};
export default App;

//AppRegistry.registerComponent('albums',()=>App);
