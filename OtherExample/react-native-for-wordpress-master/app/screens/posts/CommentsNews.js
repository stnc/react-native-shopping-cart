import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import {
  Text as Text2, ListItem, Body, Card, CardItem, Left, Content, Thumbnail
} from 'native-base';
import CommentsCompenent from './components/CommentsCompenent';
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

<ListItem>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
              <Thumbnail source={{ uri: "https://www.ibm.com/ibm/history/ibm100/images/icp/V052425X01816O41/us__en_us__ibm100__linux__icon__540x324.png" }} />
                <Body>
                  <Text2>sdsdsd</Text2>
                  <Text2 note>sdsdsd</Text2>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text2 note>
                 sdsd
                </Text2>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </ListItem>

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
