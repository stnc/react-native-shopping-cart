import React, { Component } from 'react';
import {
  StyleSheet,
  Text,Button,
  View
} from 'react-native';

import { FlatList } from 'react-native';

// Import getNews from news.js
import { getNews } from './../src/news';
import News from './News';

export default class AllNews extends Component {
//https://github.com/react-navigation/react-navigation/issues/4214
  static navigationOptions = {
    tabBarVisible :true,
    title: 'NEWS',
    headerStyle: {
      backgroundColor: '#03A9F4',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }


  componentDidMount() {
    this.fetchNews();
  }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
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
        renderItem={({ item }) => <News article={item}    navigation={this.props.navigation}/>}
        keyExtractor={item => item.url}
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