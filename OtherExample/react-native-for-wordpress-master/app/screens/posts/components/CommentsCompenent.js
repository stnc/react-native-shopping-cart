import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Content, Text, List, ListItem, Left, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-ionicons';
// import CommentsCompenentLIKE from './CommentsCompenentLIKE';
// import HTML from 'react-native-render-html';
import moment from 'moment';
export default class CommentsCompenent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            text: undefined, // user's input
            fabActive: false,
            repliesList: ''
        }
    }


    render() {
        const {  time } = this.props;
        const time2 = moment(time || moment.now()).fromNow();
        const { timeStyle } = styles2;
        return (
            <Content style={{ backgroundColor: "#EDF1F7", borderBottomColor: "#b2bec3", borderBottomWidth: 0.4, paddingBottom: 15 }}>
                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}    >
                   
                    <List>
                        <ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: this.props.repliesList.author_avatar_urls[48] }} />
                            </Left>
                            {/* `step-${item.id}` */}
                            <Right style={{ marginTop: 7 ,marginLeft:10}}>
                                <Text style={styles2.authorNameLabel}> {this.props.repliesList.author_name}</Text>
                                <Text note style={[timeStyle, styles2.dateLabel]}>{time2}</Text>
                            </Right>
                        </ListItem>
                    </List>

                    <View style={{ flex: 2, flexDirection: 'row-reverse' }} >
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('CommentsNews', { id: id })}
                            style={[styles2.touchableContainer]}>
                            <Icon ios="more" color="#b2bec3" />
                            <Text style={[styles2.valueLabel]} ></Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
                    <Text style={[styles2.CommentText]} >
                        {this.props.repliesList.content.rendered.replace(/(<([^>]+)>)/g, "")}
                    </Text>
                </View>
            </Content>
        );
    }
}

const styles2 = {
    p: {
        fontWeight: '300',//
        color: '#FF3366', // pink links
    },
    touchableContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',

    },
    touchableContainerFirst: {

        paddingLeft: 15
    },
    //   icon: {
    //       width: 24,
    //       height: 24,
    //       tintColor: "red",
    //       padding: 0,
    //       margin: 0
    //   },
    valueLabel: {

        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
        color: '#000',
        //   color: '#b2bec3',
        fontSize: 14,
        marginTop: 4,
        marginHorizontal: 4
    },
    CommentText: {
        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
        color: '#000',
        //   color: '#b2bec3',
        fontSize: 14,
        marginTop: 15,
        marginBottom: 15,
        paddingLeft: 15,
        paddingRight: 10
    },

    timeStyle: {
        margin: 5,
        fontStyle: 'italic',
        color: '#b2bec3',
        fontSize: 10
    },

    authorInfoContainer: {
        marginLeft: 16,
    },
    
    authorPhoto: {
        margin: 0,
    },

    authorNameLabel: {
        fontFamily: 'opensans-semibold',
        fontWeight: 'normal',
    },

    dateLabel: {
        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
    },
};

// const styles = {
//   noteStyle: {
//     margin: 5,
//     fontStyle: 'italic',
//     color: '#b2bec3',
//     fontSize: 10
//   },
//   featuredTitleStyle: {
//     marginHorizontal: 5,
//     textShadowColor: '#00000f',
//     textShadowOffset: { width: 3, height: 3 },
//     textShadowRadius: 3
//   }
// };
