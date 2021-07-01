import { deviceStorage, _retrieveData } from './deviceStorage';
import { clientConfig, BaseConfig } from './../constants/clientConfig';
import { connect } from 'react-redux';
import { firstToken } from './../redux/reducer';

export const performTimeConsumingTask = async () => {
  return new Promise((resolve) =>
    setTimeout(
      () => {
        resolve('result');
        fetchTokenData();
      },
      2000
    )
  );
}

 const fetchTokenData = async () => {
   console.log(   this.props)

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
      deviceStorage.saveKey('auth_token', responseJson.token);
      this.props.firstToken(responseJson.token);
    })
    .catch((error) => {
      console.log(error);
      // this.onLoginFail();
    });

};
//bunu nasıl kullanabilirim buna bakmak lazıom 
onLoginFail = () => {
  this.setState({
    error: 'Login Failed',
    loading: false
  });
};


export const fetchValidateToken = async () => {
  const url = clientConfig.ValidateTokenUrl;
  this.setState({ loading: true, refreshing: true });

  fetch(url, {
    method: 'POST',
    header: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    headers: {
      Authorization: "Bearer " + this.state.siteToken,
    }
  })
    .then((response) => response.json())
    .then((responseJson) => {
      // deviceStorage.saveKey('auth_token', responseJson.token);
      if (responseJson.data.status != 200) {
        fetchTokenData();
      }
    })
    .catch((error) => {
      console.log(error);
      // this.onLoginFail();
    });

};



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

export default connect(mapStateToProps, mapDispatchToProps)(fetchTokenData);