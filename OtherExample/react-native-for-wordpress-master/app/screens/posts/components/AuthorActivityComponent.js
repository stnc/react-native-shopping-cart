import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { List, ListItem, Left, Right, Thumbnail } from 'native-base';
import Icon from 'react-native-ionicons';
import { connect } from 'react-redux';
import { clientConfig } from './../../../constants/clientConfig';
class AuthorActivityComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoginSuccess: false, // user's input
            isToken: null, //token
            likeCountState: "",
        }
    }

    componentDidMount() {
        const { likeTotalCount } = this.props;
        this.likeCtrlfunc(likeTotalCount);
            //  console.log(this.props)
    }

    likeBtn = () => {
        if (!this.props.isLoginSuccess) {
            Alert.alert(
                'Uyarı',
                'Beğeni yapabilmek için lütfen üye olunuz yada giriş yapınız',
                [
                    {
                        text: 'Vazgeç', onPress: () =>
                            "vazgeçildi"
                    },
                    {
                        text: 'Giriş Yap', onPress: () =>
                            this.props.navigation.navigate('LoginTab'),
                    },
                ]
            );
        } else {
            const { id } = this.props;
            this.videoLike(id);
        }
    };


    videoLike = (id) => {

        const url = clientConfig.PostUrl;
        // console.log(this.props)
        if (this.props.isLoginSuccess) {

            const { likeTotalCount } = this.props;

            const likeCtrl2 = this.likeCtrlfunc(likeTotalCount);

            let likeCount = Number(likeCtrl2) + Number(1);

            const headers = {
                'Authorization': "Bearer " + this.props.isToken,
                'Content-Type': 'application/json',
            };

            const formData = new FormData();

            formData.append('_liked', likeCount);

            const data = {
                method: 'POST',
                headers: headers,
                mode: 'cors',
                cache: 'default',
                body: formData,
            };

            fetch(url + '/' + id, data)
                .then((responseJson) => responseJson.json())
                .then((responseJson) => {
                    if (responseJson.id) {
                        Alert.alert(
                            'Bilgi',
                            'Beğendiğiniz için teşekür ederiz.',
                            [
                                {
                                    text: 'Tamam', onPress: () =>
                                        "vazgeçildi"
                                },
                            ]
                        );
                    } else {
                        alert("Beklenmeyen bir hata oluştu");
                        return;
                    };
                    this.setState({ likeCountState: responseJson._liked });
                })
                .catch(error => {
                    this.setState({ loading: false, refreshing: false });
                });
        }
    }

    likeCtrlfunc = (likeTotalCount) => {
        let likeCtrl2;
        if (typeof likeTotalCount === "undefined") {
            likeCtrl2 = 0;
            this.setState({ likeCountState: likeCtrl2 });
        } else {
            likeCtrl2 = likeTotalCount;
            this.setState({ likeCountState: likeCtrl2 });
        }
        return likeCtrl2;
    }

    commentCtrlfunc = (commentCtrl) => {
        let commentCtrl2;
        if (typeof commentCtrl === "undefined") {
            commentCtrl2 = 0;
        } else {
            commentCtrl2 = commentCtrl;

        }
        return commentCtrl2;
    }

    _commentSize = (data) => {
        if (data === 0 || typeof data === "undefined") {
            return <Icon ios="ios-text" android="md-text" color="#b2bec3" />

        }

        return <Icon ios="ios-text" android="md-text" color="#0091EA" />
    }

    _likeSize = (data) => {
        if (data === 0 || typeof data === "undefined")  {
            return <Icon ios="ios-heart-empty" onPress={this.likeBtn} android="md-heart-empty" color="#b2bec3" />
        }
        return <Icon ios="ios-heart" android="md-heart" onPress={this.likeBtn} color="red" />
    }

    render() {

        const { id, time, commentCtrl, likeTotalCount, authorInfo_ } = this.props;
        const { timeStyle } = styles2;

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

                <View style={{ flex: 2, flexDirection: 'row-reverse', marginTop: 15 }} >

                    <TouchableOpacity style={[styles2.touchableContainer, styles2.touchableContainerFirst]}>
                        {this._commentSize(commentCtrl)}
                        <Text style={[styles2.valueLabel]}> {this.commentCtrlfunc(commentCtrl)} </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles2.touchableContainer]}>
                        {this._likeSize(likeTotalCount)}
                        <Text onPress={this.likeBtn} style={[styles2.valueLabel]}> {this.state.likeCountState} </Text>
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


const mapStateToProps = (state) => {
    return {
        isEmail: state.isEmail,
        isDisplayname: state.isDisplayname,
        isNicename: state.isNicename,
        isToken: state.isToken,
        loginError: state.loginError,
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        userName: state.userName
    };
}



export default connect(mapStateToProps, null)(AuthorActivityComponent);