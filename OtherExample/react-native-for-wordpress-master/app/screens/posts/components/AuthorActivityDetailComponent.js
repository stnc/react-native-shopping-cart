import React from 'react';
import { View, Text} from 'react-native';
import { List, ListItem, Left, Right, Thumbnail } from 'native-base';

export default class AuthorActivityDetailComponent extends React.Component {
    render() {

        const {  time, authorInfo_ } = this.props;
        
        const { timeStyle } = styles2;

console.log(authorInfo_);

        return (
            <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}    >
                <List>
                    <ListItem avatar>
                        <Left>
                            <Thumbnail source={{ uri: authorInfo_.avatar_urls[48] }} />
                        </Left>

                        <Right style={{ marginTop: 7 }}>
                            <Text style={styles2.authorNameLabel}>{authorInfo_.name}</Text>
                            <Text note style={[timeStyle, styles2.dateLabel]}>{time}</Text>
                        </Right>
                    </ListItem>
                </List>

          
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
        marginLeft: 15
    },

    dateLabel: {
        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
    },
};


