import React, { Component } from 'react';
import {
    StatusBar,
    StyleSheet,
    FlatList,Button,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import BookcaseItem from './bookcaseItem';

export default class Boookcase extends Component {


    static navigationOptions = {
        headerTitle: 'Home',
        headerRight: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
    };

    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: 'Harry Potter and the Goblet of Fire',
                    author: 'J. K. Rowling',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
                },
                {
                    id: 2,
                    title: 'The Hobbit',
                    author: 'J. R. R. Tolkien',
                    thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
                },
                {
                    id: 3,
                    title: '1984',
                    author: 'George Orwell',
                    thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
                },
                {
                    id: 4,
                    "author": "Alexandra Svokos and Christopher Donato",
                    "title": "Joe Biden supports Hyde Amendment, splits from 2020 Dems on abortion measure - ABC News",
                    "thumbnail": "https://s.abcnews.com/images/Politics/biden-rt-er-190604_hpMain_16x9_992.jpg",
                },
                {
                    id: 5,
                    "author": "https://www.washingtonexaminer.com/author/brad-polumbo",
                    "title": "The mobbing of Steven Crowder shows the perils of PC culture - Washington Examiner",
                    "thumbnail": "https://mediadc.brightspotcdn.com/dims4/default/448aed8/2147483647/strip/true/crop/2290x1202+0+0/resize/1200x630!/quality/90/?url=https%3A%2F%2Fmediadc.brightspotcdn.com%2Fb3%2F40%2F3b89ac1a406993e5862d70ee6506%2Fsteven-crowder.jpg",
                },
                {
                    id: 6,
                    "author": "TooFab Staff",
                    "title": "Ellen Pompeo Wanted to Leave 'Grey's Anatomy' Many Times Because of 'Toxic Work Environment' - TooFab",
                    "thumbnail": "https://media.toofab.com/2019/06/05/ellen-pompeo-greys-main-abc-1200x630.jpg",
                },
            ]
        }
    }



    _renderItem = ({ item }) => (
        <BookcaseItem
            id={item.id}
            title={item.title}
            author={item.author}
            thumbnail={item.thumbnail}
            navigation={this.props.navigation}
        />
    );

    _keyExtractor = (item, index) => item.id.toString();



    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <FlatList
                    data={this.state.books}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});