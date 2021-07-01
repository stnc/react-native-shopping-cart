import React from 'react';
import { View, TouchableHighlight, Text, Dimensions } from 'react-native';
import moment from 'moment';
import { Card, Divider, Button } from 'react-native-elements';
import AuthorActivityComponent from './AuthorActivityComponent';
import { fetchMediaInfo, commentCount,likeCount,authorInfo } from '../postFunc';

// import HTML from 'react-native-render-html';

export default class BlogListComponent extends React.Component {
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
        const { title, date, id, excerpt } = this.props.posts;

        const { BlogTitle } = styles;

        const commentCtrl = commentCount(this.props.posts);

        const likeCtrl = likeCount(this.props.posts);

        const authorInfo_ = authorInfo(this.props.posts);

        const time = moment(date || moment.now()).fromNow();

        let newTitle;
        if (((title.rendered).trim() != "") && ((title.rendered).trim() != "Copy")) {
            newTitle = title.rendered;
        } else {
            newTitle = " ";
        }

        let newExcerpt;
        if (((excerpt.rendered).trim() != "") && ((excerpt.rendered).trim() != "Copy")) {
            newExcerpt = excerpt.rendered.replace(/\n/g, "")
        } else {
            newExcerpt = "  ";
        }

        // console.log(this.props.posts);
        // console.log(title.rendered);
        // console.log(this.props.posts.content.rendered);
        return (
            <TouchableHighlight containerStyle={styles.container} useForeground onPress={() => this.props.navigation.navigate('DetailBlog', { post: this.props.posts })} >
                <Card containerStyle={[styles.container]} image={{ uri: fetchMediaInfo(this.props.posts) }}>
                    <Divider style={{ backgroundColor: '#e1e8ee', shadowColor: "rgba(0,0,0,.2)" }} />

                    {/* <Text style={BlogTitle}>{newTitle.toUpperCase()}  </Text>   */}
                    <Text style={BlogTitle}>{newTitle}  </Text>

                    <View style={[styles.htmlViewContainer,]}>
                        {/* <HTML html={newExcerpt} imagesMaxWidth={Dimensions.get('window').width} /> */}
                        <Text style={{ color: "#9DA3B4", marginBottom: 8 }}>{newExcerpt.replace(/(<([^>]+)>)/g, "")}</Text>
                    </View>

                    <Divider style={{ height: 1, backgroundColor: "#e1e8ee" }} />

                    <AuthorActivityComponent id={id} time={time} commentCtrl={commentCtrl} authorInfo_={authorInfo_}  likeTotalCount={likeCtrl} navigation={this.props.navigation} />

                </Card>
            </TouchableHighlight>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
    },


    BlogTitle: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: 'opensans-bold',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5,
        marginBottom: 5,
    },
    htmlViewContainer: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center",
        width: Dimensions.get('window').width - 50,

        fontFamily: 'opensans-semibold',
        fontWeight: 'normal',
        marginTop: 5,
        marginBottom: 5,
        color: "red"
    },

    timeStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },

};



