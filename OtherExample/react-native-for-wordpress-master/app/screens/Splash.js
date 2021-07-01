import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { firstToken } from './../redux/reducer';
import { deviceStorage, _retrieveData } from '../services/deviceStorage';
import { clientConfig, BaseConfig } from './../constants/clientConfig';

// import { performTimeConsumingTask } from '../services/fetchService';


class SplashScreen extends React.Component {
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


  fetchTokenData = async () => {
    const url = clientConfig.TokenUrl;
    // this.setState({ loading: true, refreshing: true }); //TODO bunları nasıl aktarırım her yere 
    const formData = new FormData();
    formData.append('username', BaseConfig.username);
    formData.append('password', BaseConfig.password);

    fetch(url, {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
console.log(responseJson.token)
        deviceStorage.saveKey('auth_token', responseJson.token);
        this.props.firstToken(responseJson.token);
      })
      .catch((error) => {
        console.log(error);
        // this.onLoginFail();
      });

  };

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => {
          resolve('result');
          this.fetchTokenData();
        },
        2000
      )
    );
  }


  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
          Biyo Güvenlik
        </Text>
        <Text style={styles.textStyles}>
          Bilgileri
        </Text>
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
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold'
  }
}



const mapStateToProps = (state) => {
  return {
    isToken: state.isToken,
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    firstToken: (token) => dispatch(firstToken(token))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);




//bunu nasıl kullanabilirim buna bakmak lazıom 
onLoginFail = () => {
  this.setState({
    error: 'Login Failed',
    loading: false
  });
};
