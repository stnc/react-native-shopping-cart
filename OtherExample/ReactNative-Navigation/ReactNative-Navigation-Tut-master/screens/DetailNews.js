



import React, { Component } from 'react';
              <Badge><Text>2</Text></Badge>
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Fab ,Card,CardItem ,Left ,Thumbnail ,Body, Right ,Badge} from 'native-base';
import {  StyleSheet,View,Image} from 'react-native';


export default class DetailNews extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          active: 'false'
        };
       // this.onPress = this.onPress.bind(this)
      }
      onPress = () => {
        this.props.navigation.replace('AllNews');
        this.props.navigation.navigate('Book');  
     };
    render() {
        const { navigation } = this.props;
        const itemDescription = navigation.getParam('description', 'NO-ID');

        return (
 
            
            <Container>
         
  
 
          
         <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
/>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>GeekyAnts</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
 style={{height: 200, width: null, flex:1, alignSelf:'stretch' }}/>
            </CardItem>
            <View style={styles.container}>
                   <Text style={styles.title}>
                DetailNews  #{JSON.stringify(itemDescription)}
                selman
                </Text>
         </View>
         <Button style={{ flex:1 }}  title="Back To news" onPress={() => this.onPress()}  />
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>

       
 
     
        </Content>

     

        <Footer>
          <FooterTab>
            <Button badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>


        
          </Container>




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

