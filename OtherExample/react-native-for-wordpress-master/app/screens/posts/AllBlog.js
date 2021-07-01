import React, { Component } from 'react';
import {
  View, Text,
  FlatList,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

import BlogListComponent from './components/BlogListComponent';

import { clientConfig } from './../../constants/clientConfig';


import AsyncStorage from '@react-native-community/async-storage';

export default class AllBlog extends Component {
  static navigationOptions = {
    tabBarVisible: true,
    title: 'İçerikler',
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
    this.state = {
      loading: true,
      data: [],
      page: 1,
      refreshing: true,
      siteTitle: '',
      error: '',
      isToken: ''
    };
  }

  componentDidMount() {
    this._bootstrapAsync();
    setTimeout(
      () => {
        // console.log(this.state.siteToken);
        //bu ksımda token validate edecek oradan donen duruma göre eğer validate değilse 
        //yeni token iste
        //validate ise -> data fetch et 
        //soru şu validate i hep mi çalışırmak gerek 
        this.fetchData();
      },
      500
    )
  }
  //bu kodu çok aramıştım 

  _bootstrapAsync = async () => {
    AsyncStorage.getItem("auth_token").then((value) => {
      this.setState({ "isToken": value });
    })
      .then(res => {
        //do something else
      });
  };

  //invali,d token duruömunda ne olur? 
  fetchData = () => {
    const { page } = this.state;
    // console.log(this.state.siteToken)
    const PostUrl = clientConfig.PostUrl;
    const url = PostUrl + `?page=${page}&results=20&_embed`;
    this.setState({ loading: true });
    const headers = {
      'Authorization': "Bearer " + this.state.isToken,
      //  Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    fetch(url, {
      method: 'GET',
      headers: headers,
      mode: 'cors',
      cache: 'default'
    })
      .then((response) => {
        return response.json();
        //invali,d token duruömunda ne olur? o hata burada çıkıyor 
      }
      )
      .then(response => {
        const arrayData = [...this.state.data, ...response]
        this.setState({
          data: page === 1 ? response : arrayData,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        // console.log('hata ' + error);
        this.setState({ loading: false, refreshing: false });
      });
  };

  renderFooter = () => {
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating={this.state.refreshing} size="large" />
      </View>
    );
  };


  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.fetchData();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.fetchData();
      }
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text>{this.state.siteToken}</Text> */}
        <FlatList
          data={this.state.data}
          renderItem={({ item }) => <BlogListComponent posts={item} navigation={this.props.navigation} />}
          keyExtractor={item => item.slug}
          ListFooterComponent={this.renderFooter}
          onRefresh={this.handleRefresh.bind(this)}
          refreshing={this.state.refreshing}
          onEndReached={this.handleLoadMore}
          onEndReachedThreshold={50}
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





