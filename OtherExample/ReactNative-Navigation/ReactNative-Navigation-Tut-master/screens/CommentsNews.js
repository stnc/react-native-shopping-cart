import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CommentsCompenent from './CommentsCompenent';
/* burada for ile nasıl gosteririrm bunna bak */
import { FlatList } from 'react-native';
export default class CommentsNews extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "comments",
      headerLeft: (
        <Button
          title="< Back"
          onPress={() => navigation.navigate('Book')}
        />
      ),
    }
  }
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }

  fetchNews() {
    fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(response => response.json())
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  componentDidMount() {
    this.fetchNews();
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
      },
      () => this.fetchNews()
    );
  }
  render() {
    return (
      <View style={styles.container}>



        <FlatList
          data={this.state.articles}
          renderItem={({ item }) => <CommentsCompenent article={item}  navigation={this.props.navigation} />}
          keyExtractor={item => item.name}
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh.bind(this)}
        />



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
