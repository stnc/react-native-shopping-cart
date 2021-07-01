import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { Content, Text, List, ListItem, Left, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-ionicons';
// import HTML from 'react-native-render-html';
export default class CommentsCompenentLike extends React.Component {
    render() {
        const { commentCtrl, likeCtrl } = this.props;

        let commentCtrl2;
        if (typeof commentCtrl === "undefined") {
            commentCtrl2 = 0;
        } else {
            commentCtrl2 = commentCtrl;
        }


        let likeCtrl2;
        if (typeof likeCtrl === "undefined") {
            likeCtrl2 = 0;
        } else {
            likeCtrl2 = likeCtrl;
        }

        return (
            <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}    >
                <View style={{ flex: 2, flexDirection: 'row' }} >
                    <TouchableOpacity style={[styles2.touchableContainer, styles2.touchableContainerFirst]}>
                        <Icon ios="ios-text" style={{ padding: 0, margin: 0 }} android="md-text" color="#b2bec3" />
                        <Text style={[styles2.valueLabel]} >  {likeCtrl2} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles2.touchableContainer]}>
                        <Icon ios="ios-heart" android="md-heart" style={{ padding: 0, margin: 0 }} color="#fff" />
                        <Text style={[styles2.valueLabel]} >  {commentCtrl2}</Text>
                    </TouchableOpacity>
                </View>
            </View>

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
