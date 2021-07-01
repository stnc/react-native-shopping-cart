import React, { Component } from 'react';
import { Dimensions, Image, FlatList, StyleSheet, ScrollView, TextInput, View, YellowBox, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Container, Footer, FooterTab, Icon, Content, Badge, Text, Button as ButtonN } from 'native-base';


import { Button, Divider, Block, Text as TextStnc } from './../../components/elements';
import { theme } from './../../constants';
// import HTML from 'react-native-render-html';
import { fetchMediaInfo,authorInfo,  commentList } from './postFunc';
import CommentsCompenent from './components/CommentsCompenent';
// import GalleryComponent from './components/GalleryComponent';
import {  commentCount,likeCount } from './postFunc';
const { width, height } = Dimensions.get('window');
import AuthorActivityDetailComponent from './components/AuthorActivityDetailComponent';
import moment from 'moment';

class DetailBlog extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Detail News',
            headerRight: (
                <Button
                    onPress={() => alert('This is a button!')}
                    title="Info"
                    color="#fff"
                />
            )
        }
    }
    constructor(props) {
        super(props);
        const post = props.navigation.getParam('post', 'NO-ID');
        this.state = {
            text: undefined, // user's input
            replies: commentList(post),
            fabActive: false
        }
    }

    onPress = () => {
        this.props.navigation.replace('AllBlog');
        this.props.navigation.navigate('AllBlog');
    };


    // Update state when input changes
    onChangeText = (text) => this.setState({ text });

    // Handle return press on the keyboard
    // NOTE: You don't really need it for this example, because
    // we're using a keyboard without return button, but I left it here
    // in case you'd want to switch to a different keyboard
    onSubmitEditing = (
        { nativeEvent: { text } }) => 
        this.setState({ text }, 
            this.submit);

    // Call this.props.onSubmit handler and pass the comment
    submit = () => {
        const { text } = this.state;
        if (text) {
            this.setState({ text: undefined }, () => this.props.onSubmit(text));
        } else {
            alert('Please enter your comment first');
        }
    };


    render() {
        const { navigation } = this.props;
    
        const post = navigation.getParam('post', 'NO-ID');

        const time = moment(post.date || moment.now()).fromNow();

        let commentCtrl=commentCount(post);

        let likeCtrl = likeCount(post);

        let authorInfo_ = authorInfo(post);

        if (typeof commentCtrl === "undefined") {
            commentCtrl = 0;
        } else {
            commentCtrl = commentCtrl;
        }

        if (typeof likeCtrl === "undefined") {
            likeCtrl = 0;
        } else {
            likeCtrl = likeCtrl;
        }
        return (
            <Container>
                <Content>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <Image
                            source={{ uri: fetchMediaInfo(post) }}
                            resizeMode="stretch"
                            style={{ width, height: height / 3.9 }}
                        />
                        <Block style={styles.product}>
                            <TextStnc h2 bold>{post.title.rendered}</TextStnc>
                            {/* <Block flex={false} row margin={[theme.sizes.base, 0]}> */}
                                {/* {product.tags.map(tag => (
              <TextStnc key={`tag-${tag}`} caption gray style={styles.tag}>
                {tag}
              </TextStnc>
            ))} */}
                                {/* <TextStnc key="sd" caption gray style={styles.tag}>
                                    hasan
                                 </TextStnc>

                                <TextStnc key="swd" caption gray style={styles.tag}>
                                    ali veli
                               </TextStnc> */}

                            {/* </Block> */}
                            <TextStnc gray light height={22}>{post.content.rendered.replace(/(<([^>]+)>)/g, "")}</TextStnc>

                            {/* <HTML html={post.content.rendered} imagesMaxWidth={Dimensions.get('window').width} /> */}


                            <Divider margin={[theme.sizes.padding * 0.9, 0]} />

                            <View style={{ alignItems: 'center', flex: 1, flexDirection: 'row' }}>
                                  <AuthorActivityDetailComponent time={time} authorInfo_={authorInfo_} />
                            </View>

                            <Divider margin={[theme.sizes.padding * 0.9, 0]} />

                            {/* <GalleryComponent post={post} /> */}

                        </Block>


                        <Block>
                            <View style={cStyles.inputContainer}>
                                <Text style={[cStyles.inputLabel, cStyles.inputSpace]}> Yorumlar </Text>
                                {/* <TextInput
                                    style={[cStyles.inputSpace,  {backgroundColor:"#EDF1F7",height:100,padding:8}]}
                                    textStyle={{
                                        paragraph: {
                                            fontFamily: 'opensans-regular',
                                            fontWeight: 'normal',
                                        }
                                    }}
                                    placeholder='Write your comment'
                              
                                /> */}

                                <KeyboardAvoidingView behavior='position'>
                                    <View style={[Nstyles.container, { backgroundColor: "#EDF1F7", height: 100, padding: 8 }]}>
                                    
                                        <TextInput
                                            placeholder="Add a comment..."
                                            // keyboardType="twitter" // keyboard with no return button
                                            autoFocus={true} // focus and show the keyboard
                                            style={[Nstyles.input, cStyles.inputSpace]}
                                            value=""
                                            // onBlur={Keyboard.dismiss}//Dismiss the keyboard when text input loses focus


                                            onChangeText={this.onChangeText} // handle input changes
                                            onSubmitEditing={this.onSubmitEditing} // handle submit event
                                        />
                              
                                        <Button onPress={this.submit} iconLeft large dark>
                                            <Icon name='arrow-back' />
                                            <Text>Gönder</Text>
                                        </Button>

                                    </View>
                                </KeyboardAvoidingView>
                            </View>
                        </Block>


                        <FlatList
                            data={this.state.replies}
                            renderItem={({ item }) => <CommentsCompenent time={post.date} repliesList={item} />}
                            keyExtractor={item => `step-${item.id}`}
                            onEndReachedThreshold={50}
                        /> 

                    </ScrollView>
                </Content>

                <Footer>
                    <FooterTab>

                        <ButtonN badge vertical>
                            <Badge><Text>{commentCtrl} </Text></Badge>
                            <Icon name="text" />
                            <Text>Yorumlar</Text>
                        </ButtonN>

                        <ButtonN badge vertical>
                            <Badge><Text>{likeCtrl} </Text></Badge>
                            <Icon name="heart" />
                            <Text>Beğeniler</Text>
                        </ButtonN>


                        <ButtonN vertical onPress={() => this.onPress()} >
                            <Icon name="arrow-back" />
                            <Text>Geri dön</Text>
                        </ButtonN>
                    </FooterTab>
                </Footer>
        
            </Container>

   
        )
    }
}





const styles = StyleSheet.create({
    product: {
        paddingHorizontal: theme.sizes.base * 2,
        paddingVertical: theme.sizes.padding,
    },
    tag: {
        borderColor: theme.colors.gray2,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: theme.sizes.base,
        paddingHorizontal: theme.sizes.base,
        paddingVertical: theme.sizes.base / 2.5,
        marginRight: theme.sizes.base * 0.625,
    },
    image: {
        width: width / 3.26,
        height: width / 3.26,
        marginRight: theme.sizes.base,
    },
    more: {
        width: 55,
        height: 55,
    }
})


const Nstyles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderColor: '#EEE',
        alignItems: 'center',
        paddingLeft: 15,
    },
    input: {
        flex: 1,

        fontSize: 15,
    },
    button: {
        height: 50,
        color: "#dfdfdf",
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inactive: {
        color: '#CCC',
    },
    text: {
        color: '#3F51B5',
        fontWeight: 'bold',
        fontFamily: 'Avenir',
        textAlign: 'center',
        fontSize: 15,
    },
});




//not used --- delete
const cStyles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        margin: 0,
        padding: 0,
        marginHorizontal: 0,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 0,
    },
    activityContainer: {
        marginTop: 24,
    },
    activityAuthoring: {
        flex: 1,
    },
    commentLabel: {

        fontFamily: 'opensans-regular',
        fontWeight: 'normal',
        color: '#b2bec3',

    },
    commentLabelContainer: {
        marginLeft: 8,
        marginRight: 32,
        marginTop: 14,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding: 10
    },
    moreIcon: {
        width: 18,
        height: 18,
        // tintColor: theme['text-hint-color'],
    },
    repliesList: {
        alignSelf: 'stretch',
        marginTop: 24,
    },
    inputSpace: {
        marginHorizontal: 24,

    },
    inputContainer: {
        marginTop: 5,
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15
    },
    inputLabel: {
        marginBottom: 8,
        fontFamily: 'opensans-semibold',
        fontWeight: 'normal',
    },
};


YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
    'Module RCTImageLoader requires',
]);


export default DetailBlog;