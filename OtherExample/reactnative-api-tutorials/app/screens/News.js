import React from 'react';
import { View, Linking, TouchableHighlight } from 'react-native';
import { Text, Button, Card, Divider } from 'react-native-elements';
import moment from 'moment';

export default class News extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "wewe",
      headerLeft: (
        <Button
          title="< Back"
          onPress={() => navigation.navigate('Book')}
        />
      ),
    }
  }

  render() {
    const {
      title,
      description,
      publishedAt,
      source,
      urlToImage,
      id,
      url
    } = this.props.article;
    const { noteStyle, featuredTitleStyle } = styles;
    const time = moment(publishedAt || moment.now()).fromNow();
    const defaultImg =
      'https://wallpaper.wiki/wp-content/uploads/2017/04/wallpaper.wiki-Images-HD-Diamond-Pattern-PIC-WPB009691.jpg';



    //https://stackoverflow.com/questions/40051449/react-native-touchable-highlight-and-touchable-native-feedback-for-making-my-men
    return (
      <TouchableHighlight
        useForeground
        /* onPress={() => Linking.openURL(url)}*/
        onPress={() => this.props.navigation.navigate('DetailNews', { description: this.props.article.description })}
      >


        <Card
          featuredTitle={title}
          featuredTitleStyle={featuredTitleStyle}
          image={{
            uri: urlToImage || defaultImg
          }}
        >
          <Text style={{ marginBottom: 10 }}>
            {description || 'Read More..'}
          </Text>
          <Divider style={{ backgroundColor: '#dfe6e9' }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={noteStyle}>{source.name.toUpperCase()}</Text>
            <Text style={noteStyle}>{time}</Text>
            <Text onPress={() =>
              this.props.navigation.navigate('CommentsNews', { id: id })}>Comments</Text>

          </View>
        </Card>
      </TouchableHighlight>
    );
  }
}

const styles = {
  noteStyle: {
    margin: 5,
    fontStyle: 'italic',
    color: '#b2bec3',
    fontSize: 10
  },
  featuredTitleStyle: {
    marginHorizontal: 5,
    textShadowColor: '#00000f',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 3
  }
};





