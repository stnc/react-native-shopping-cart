import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View, TouchableOpacity, TextInput, Keyboard, Image, KeyboardAvoidingView
} from 'react-native';
import clientConfig from '../constants/clientConfig';


export default class Login extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Login',
		headerRight:
			<TouchableOpacity
				onPress={() => navigation.navigate('Home')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Home</Text>
			</TouchableOpacity>

	});
	constructor(props) {
		super(props)
		this.state = {
			userName: '',
			userPassword: ''
		}
	}

	login = () => {
		const { userName, userPassword } = this.state;
		const LoginUrl = clientConfig.LoginUrl;


		if (userName == "") {
			//alert("Please enter Email address");
			this.setState({ userName: 'Please enter Email address' })

		}

		else if (userPassword == "") {
			this.setState({ email: 'Please enter password' })
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
						alert("Successfully Login");
						this.props.navigation.navigate("Profile");
					} else {
						alert("Wrong Login Details");
						return;
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}


		Keyboard.dismiss();
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require("../assets/images/splash.png")} />

					<Text style={styles.title}>helo elo elo eloo ererer</Text>
				</View>

				<View style={styles.formContainer}>
					<KeyboardAvoidingView behavior="padding" enabled>
						<View style={styles.container2}>
							<Text  style={{ padding: 10, margin: 10, color: 'red' }}>{this.state.email}</Text>

							<TextInput returnKeyType="next" autoCorrect={false} placeholder="Enter Email" style={styles.input}
								onChangeText={userName => this.setState({ userName })} onSubmitEditing={()=>this.passwordInput.focus()} />

							<TextInput returnKeyType="go" autoCorrect={false}  placeholder="Enter Password" style={styles.input} secureTextEntry ref={(input)  => this.passwordInput=input }
								onChangeText={userPassword => this.setState({ userPassword })} />


							<TouchableOpacity style={styles.buttonContainer} onPress={this.login}>
								<Text style={styles.buttonText}>Login</Text>
							</TouchableOpacity>
						</View>
					</KeyboardAvoidingView>
				</View>
			</View>

		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#3498db',
	},
	container2: {
		padding: 20
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: "center"
	},

	formContainer: {
		flex: 1,
		backgroundColor: '#3498db',
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		color: "#fff",
		marginTop: 10,
		width: 140,
		textAlign: "center",
		opacity: 0.9
	},
	input: {
		height: 40,
		backgroundColor: "rgba(255,255,255,0.2)",
		marginBottom: 20,
		color: "#fff",
		paddingHorizontal: 10
	},
	buttonText: {
		textAlign: "center",
		color: "#fff",
		fontWeight: '700'
	},
	buttonContainer: {
		backgroundColor: "#2980b9",
		paddingVertical: 10
	}
});

//AppRegistry.registerComponent('login', () => login);
