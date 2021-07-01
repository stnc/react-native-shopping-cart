import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import LoginForm from './LoginForm';
import Profile from './../Profile';
import styles from './styles';
import { connect } from 'react-redux';

class Login extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Giriş Yap',
		headerRight:
			<TouchableOpacity
				onPress={() => navigation.navigate('Home')}
				style={{ margin: 10, backgroundColor: 'orange', padding: 10 }}>
				<Text style={{ color: '#ffffff' }}>Home</Text>
			</TouchableOpacity>

	});

	render() {
		if (this.props.isLoginSuccess) {
			return (
				<Profile navigation={this.props.navigation}/>
		
			)
		}


		return (


			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Image style={styles.logo} source={require("./../../assets/images/splash.png")} />

					<Text style={styles.title}>Üye Girişi</Text>
				</View>

				<View style={styles.formContainer}>
					<LoginForm navigation={this.props.navigation}/>
				</View>
			</View>

		);
	}
}


const mapStateToProps = (state) => {
	return {
		isLoginPending: state.isLoginPending,
		isLoginSuccess: state.isLoginSuccess,
		loginError: state.loginError
	};
}



export default connect(mapStateToProps,null)(Login);

