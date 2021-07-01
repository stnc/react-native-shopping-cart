import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Keyboard, KeyboardAvoidingView } from 'react-native';
import { clientConfig } from '../../constants/clientConfig';
import { connect } from 'react-redux';
import { loginCtrl } from '../../redux/reducer';
import styles from './styles';

class LoginForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			msjNotice: null,
			isLoginSuccess: false,
			isLoginPending: false,
			isEmail: null,
			isDisplayname: null,
			isToken: null,
			isNicename: null,
			isLogout: false,
			loginError: false,
			userName: "",
			userPassword: ""
		}
	
	}

	loginEvent = () => {
		// this.setState({ userName: 'selman' })
		this.loginApiRequest();
	}


	loginApiRequest = () => {
		let { userName, userPassword } = this.state;

		const LoginUrl = clientConfig.LoginUrl;
		let isApiLoginError = 1;
		if (userName == "") {
			this.setState({ msjNotice: 'Lütfen email adresinizi giriniz' });
			// this.setState({ msjNotice: 'Please enter Email address' })
		}

		else if (userPassword == "") {
			// this.setState({ msjNotice: 'Please enter password' })
			this.setState({ msjNotice: 'Lütfen şifrenizi giriniz' });
		}

		else {
			const formData = new FormData();
			formData.append('username', userName);
			formData.append('password', userPassword);

			fetch(LoginUrl, {
				method: 'POST',
				header: {
					'Accept': 'application/json',
					'Content-type': 'application/json'
				},
				body: formData,
			})
				.then((responseJson) => responseJson.json())
				.then((responseJson) => {
					if (responseJson.token != undefined) {
						isApiLoginError = false;
						// this.setState({ userName: 'selman' })
						this.props.loginCtrl(responseJson.user_email, responseJson.user_display_name, responseJson.user_nicename, responseJson.token, isApiLoginError);
						// <Profile navigation={this.props.navigation} />
						//  this.props.navigation.navigate("ProfileTab");
						return isApiLoginError;
					} else {
						this.setState({ msjNotice: "Kullanıcı adı veya şifreniz yanlıştır" });
						isApiLoginError = true;
						this.props.loginCtrl(null, null, null, null, isApiLoginError);
						return isApiLoginError;
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}


		// Keyboard.dismiss();
	}

	render() {
		//sonradan eklendi 



		return (


			<KeyboardAvoidingView behavior="padding" enabled>
				<View style={styles.container2}>

					<Text style={{ padding: 10, margin: 10, color: 'red' }}>{this.state.msjNotice}</Text>

					<Text style={{ padding: 5,  color: 'white' }}>Kullanıcı adı</Text>

					<TextInput underlineColorAndroid="transparent" returnKeyType="next" autoCorrect={false} autoCapitalize='none' placeholder="Enter name" style={styles.input}
						onChangeText={userName1 => this.setState({ userName: userName1 })} onSubmitEditing={() => this.passwordInput.focus()} />

<Text style={{ padding: 5,  color: 'white' }}>Şifre</Text>
					<TextInput underlineColorAndroid="transparent" returnKeyType="go" autoCorrect={false} autoCapitalize='none' placeholder="Enter Password" style={styles.input}
						secureTextEntry ref={(input) => this.passwordInput = input}
						onChangeText={userPassword1 => this.setState({ userPassword: userPassword1 })} />

					<TouchableOpacity style={styles.buttonContainer} onPress={() => { this.loginEvent() }}>
						{/* <TouchableOpacity style={styles.buttonContainer} onPress={()=>{  this.login2()}}> */}
						<Text style={styles.buttonText}>Giriş Yap</Text>
					</TouchableOpacity>


					<TouchableOpacity style={[styles.buttonContainer,styles.buttonExtra]} onPress={() => this.props.navigation.navigate('Register')}>
						<Text style={styles.buttonText}>Üye Ol</Text>
					</TouchableOpacity>

				</View>
			</KeyboardAvoidingView>

		);
	}
}



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
// console.log(email,displayname,nicename,token, error)

const mapDispatchToProps = (dispatch) => {
	return {
		loginCtrl: (email, displayname, nicename, token, error) => dispatch(loginCtrl(email, displayname, nicename, token, error))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
