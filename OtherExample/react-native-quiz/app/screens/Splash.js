import React from 'react';
import { View, Text, Image } from 'react-native';


// import { performTimeConsumingTask } from '../services/fetchService';

const remote = 'http://www.mobileswall.com/wp-content/uploads/2015/12/640-Hometown-of-Fireworks-l.jpg';

export default  class SplashScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      jwt: '',
      loading: true
    }
    //this.onLoginFail = this.onLoginFail.bind(this)
    // this.deleteJWT = deviceStorage.deleteJWT.bind(this);
    // this.loadJWT = deviceStorage.loadJWT.bind(this);
    // this.loadJWT();
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      this.props.navigation.navigate('Home');
    }
  }




  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => {
          resolve('result');
      
        },
        2000
      )
    );
  }


  render() {
    const resizeMode = 'cover';
    const text = 'QUIZ EXAMPLE';
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: '#eee',
        }}
      >
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            style={{
              flex: 1,
              resizeMode,
            }}
            source={{ uri: remote }}
          />
        </View>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'flex-end',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 40,
              color: 'white'
            }}
          >
            {text}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'yellow',
    fontSize: 40,
    fontWeight: 'bold'
  }
}




//bunu nasıl kullanabilirim buna bakmak lazıom 
onLoginFail = () => {
  this.setState({
    error: 'Login Failed',
    loading: false
  });
};
