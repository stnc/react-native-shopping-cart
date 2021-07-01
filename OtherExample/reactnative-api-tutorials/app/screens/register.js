import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View, Button, TextInput, TouchableOpacity
} from 'react-native';
import clientConfig from '../constants/clientConfig';

export default class Register extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Register',
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
			userEmail: '',
			userPassword: ''
		}
	}

	userRegister = () => {
		//alert('ok'); // version 0.48

		const { userName } = this.state;
		const { userEmail } = this.state;
		const { userPassword } = this.state;
		const RegisterUrl = clientConfig.RegisterUrl;

		fetch(RegisterUrl, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: userName,
				email: userEmail,
				password: userPassword,
			})
		})
			.then((response) => response.json())
			.then((responseJson) => {
				alert(userName);
				alert(responseJson);
				console.log(responseJson);
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>


				<TextInput
					placeholder="Enter Name"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userName => this.setState({ userName })}

				/>

				<TextInput
					placeholder="Enter Email"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userEmail => this.setState({ userEmail })}
				/>

				<TextInput
					placeholder="Enter Password"
					style={{
						width: 250, margin: 10, borderColor: "#333",
						borderWidth: 1
					}}
					underlineColorAndroid="transparent"
					onChangeText={userPassword => this.setState({ userPassword })}
				/>

				<TouchableOpacity
					onPress={this.userRegister}
					style={{
						width: 250, padding: 10, backgroundColor: 'magenta',
						alignItems: 'center'
					}}>
					<Text style={{ color: '#fff' }}>Signup</Text>
				</TouchableOpacity>


			</View>

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
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

