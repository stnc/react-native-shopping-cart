import React, { Component } from "react";
import { ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";

class AlbumList extends Component {
  state = { albums: [] };
  componentWillMount() {
    fetch("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => response.json())
      .then(responseData => this.setState({ albums: responseData }));
  }

  // Render all the albums that was fetched from the API.
  renderAlbums() {
    return this.state.albums.map((album,index) => 
        <AlbumDetail key={index} album={album} />
    );
  }

  // Render the component
  render() {
    return (
      <ScrollView>
        {this.renderAlbums()}
      </ScrollView>
    );
  }
}
 
// Make compomnent available to other parts of the application
export default AlbumList;