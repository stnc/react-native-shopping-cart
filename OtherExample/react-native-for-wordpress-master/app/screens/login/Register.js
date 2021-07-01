import React, { Component } from 'react';
import { Image, Text, KeyboardAvoidingView, View, TextInput, TouchableOpacity } from 'react-native';
import { clientConfig } from '../../constants/clientConfig';
import { connect } from 'react-redux';
import { loginCtrl } from '../../redux/reducer';
import styles from './styles';

import Profile from './../Profile';
class Register extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Üye Ol',
		headerRight:
			<TouchableOpacity
				onPress={() => navigation.navigate('Home')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Üye Ol</Text>
			</TouchableOpacity>

	});



	constructor(props) {
		super(props)
		this.state = {
			msjNotice: null,
			err: false,
			userName: '',
			userEmail: '',
			userPassword: ''
		}
	}

	loginApiRequest = () => {
		let { userName, userPassword } = this.state;

		const LoginUrl = clientConfig.LoginUrl;
		let isApiLoginError = 1;

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
		// Keyboard.dismiss();
	}

	validateEmail = (email) => {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	validateUsername = () => {

		str = this.state.userName;
		this.setState({ userName: str.trim() });
		var error = "";
		var illegalChars = /\W/; // allow letters, numbers, and underscores


		if ((str.length < 5) || (str.length > 15)) {
			// error = "Username must have 5-15 characters";
			error = "Kullanıcı adınız 5 ile 15 karakter arasında olmalıdır ve \n Kullanıcı adınızda türkçe karakter ve uygunsuz karakter olmamalıdır";
		} else if (illegalChars.test(str)) {
			//   error = "Please enter valid Username. Use only numbers and alphabets";
			error = "Kullanıcı adınızda türkçe karakter ve değişik karakter olmamalıdır";
		} else {
			error = "";
		}
		return error;
	}

	userRegister = () => {
		const { userName } = this.state;
		const { userEmail } = this.state;
		const { userPassword } = this.state;
		const RegisterUrl = clientConfig.RegisterUrl;

		if (userName == "") {
			this.setState({ msjNotice: 'Lütfen kullanıcı adınızı giriniz' });
			this.setState({ err: true });
		}
		else if (userEmail == "") {
			this.setState({ msjNotice: 'Lütfen email adresinizi giriniz' });
			this.setState({ err: true });
		}
		else if (userPassword == "") {
			this.setState({ msjNotice: 'Lütfen şifrenizi giriniz' });
			this.setState({ err: true });
		}

		// else if (!this.validateEmail(userEmail)) {
		// 	this.setState({ msjNotice: 'Lütfen email adresinizi kontrol ediniz' });
		// 	this.setState({ err: true });
		// }
		else if (this.validateUsername() != "") {
			this.setState({ msjNotice: this.validateUsername() });
			this.setState({ err: true });
		}
		else {
			this.setState({ msjNotice: '' });
			this.setState({ err: false });
		}


		if (!this.state.err) {
			const formData = new FormData();
			formData.append('username', userName);
			formData.append('password', userPassword);
			formData.append('email', userEmail);

			const headers = {
				'Authorization': "Bearer " + this.props.isToken,
				'Content-Type': 'application/x-www-form-urlencoded',
			};

			const data = {
				method: 'POST',
				headers: headers,
				mode: 'cors',
				cache: 'default',
				body: formData,
			};

			fetch(RegisterUrl, data)
				.then((responseJson) => responseJson.json())
				.then((responseJson) => {
					console.log(responseJson)
					if (responseJson.code) {
						if (responseJson.message == "Invalid parameter(s): email") {
							this.setState({ msjNotice: 'Email adresiniz geçersizdir' });
						}
						if (responseJson.message == "Sorry, that username already exists!") {
							this.setState({ msjNotice: 'Böyle bir kullancı adınız zaten vardır' });
						}
						if (responseJson.message == "Sorry, that email address is already used!") {
							this.setState({ msjNotice: 'Böyle bir email adresi zaten vardır' });
						}
						if (responseJson.message == "Invalid parameter(s): username") {
							this.setState({ msjNotice: 'Kullanıcı adınız geçersiz' });
						}
					}
					else if (responseJson.id) {
						this.setState({ msjNotice: 'Üyelik yapıldı' });
						this.setState({ userName: userName });
						this.setState({ userPassword: userPassword });
						this.loginApiRequest();
					}
				})
				.catch(error => {
					this.setState({ loading: false, refreshing: false });
				});
		}
	}


	render() {

		if (this.props.isLoginSuccess) {
			return (
				<Profile />

			)
		}
		return (
			<View style={styles.container}>

				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require("./../../assets/images/splash.png")} />
					<Text style={styles.title}>Üye OL</Text>
				</View>

				<View style={styles.formContainer}>
					<KeyboardAvoidingView behavior="padding" enabled>
						<View style={styles.container2}>
							<Text style={{ padding: 10, margin: 10, color: 'red' }}>{this.state.msjNotice}</Text>

							<Text style={{ padding: 5, color: 'white' }}>Kullanıcı adı</Text>
							<TextInput
								placeholder="Enter username" style={styles.input} autoCorrect={false} autoCapitalize='none'
								underlineColorAndroid="transparent" returnKeyType="next" onSubmitEditing={() => this.emailInput.focus()}
								onChangeText={userName => this.setState({ userName })}
							/>
							<Text style={{ padding: 5, color: 'white' }}>Email adresiniz</Text>
							<TextInput underlineColorAndroid="transparent" returnKeyType="next" autoCapitalize='none' autoCorrect={false} placeholder="Enter Email" style={styles.input}
								ref={(input) => this.emailInput = input}
								onChangeText={userEmail => this.setState({ userEmail })} onSubmitEditing={() => this.passwordInput.focus()} />

							<Text style={{ padding: 5, color: 'white' }}>Şifreniz</Text>
							<TextInput underlineColorAndroid="transparent" returnKeyType="go" autoCapitalize='none' autoCorrect={false} placeholder="Enter Password"
								style={styles.input} secureTextEntry ref={(input) => this.passwordInput = input}
								onChangeText={userPassword => this.setState({ userPassword })} />

							<TouchableOpacity style={styles.buttonContainer} onPress={this.userRegister}>
								<Text style={styles.buttonText}>Üye Ol</Text>
							</TouchableOpacity>
						</View>
					</KeyboardAvoidingView>
				</View>

			</View>
		);
	}
}


// const mapStateToProps = (state) => {
// 	return {
// 		isEmail: state.isEmail,
// 		isDisplayname: state.isDisplayname,
// 		isNicename: state.isNicename,
// 		isToken: state.isToken,
// 		loginError: state.loginError,
// 		isLoginPending: state.isLoginPending,
// 		isLoginSuccess: state.isLoginSuccess,
// 		userName: state.userName
// 	};
// }
// export default connect(mapStateToProps, null)(Register);


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

export default connect(mapStateToProps, mapDispatchToProps)(Register);