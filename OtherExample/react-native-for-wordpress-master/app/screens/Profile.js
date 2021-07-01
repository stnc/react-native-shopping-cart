import React, { Component } from 'react';
// import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { logoutCtrl } from '../redux/reducer';
import { Container, Content, Button, ListItem, Text, Icon, Thumbnail, Left, Body, Right, Card, CardItem } from 'native-base';

class Profile extends Component {

	static navigationOptions = ({ navigation }) => ({
		title: 'Profilim',
	});

	constructor(props) {
		super(props)
		this.state = {
			msjNotice: '',
			isLoginSuccess: false,
			isLoginPending: false,
			isEmail: "",
			isDisplayname: "",
			isToken: "",
			isNicename: "",
			isLogout: false,
			loginError: null,
			userName: null,
			userPassword: null
		}
	}
	_signOutAsync = async () => {
		await AsyncStorage.clear();
		this.props.logoutCtrl();
		//this.setState({ isLoginSuccess: false })
		this.props.navigation.navigate('Register');
	};

	render() {

		// if (!this.props.isLoginSuccess) {
		// 	return (
		// 		<View style={{ padding: 10 }}>

		// 			<Text style={{ padding: 10, marginTop: 80, marginBottom: 40 }}>Bilgilerini görebilmek için üye olunuz yada üyelik girişi yapınız</Text>

		// 			<TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('LoginTab')}>
		// 				{/* <TouchableOpacity style={styles.buttonContainer} onPress={()=>{  this.login2()}}> */}
		// 				<Text style={styles.buttonText}>Giriş Yap</Text>
		// 			</TouchableOpacity>


		// 			<TouchableOpacity style={[styles.buttonContainer, styles.buttonExtra]} onPress={() => this.props.navigation.navigate('Register')}>
		// 				<Text style={styles.buttonText}>Üye Ol</Text>
		// 			</TouchableOpacity>
		// 		</View>

		// 	)
		// }
		return (

			<Container>

				<Card>
					<CardItem>
						<Body style={{        justifyContent: "center",
        alignItems: "center",}}>
							<Thumbnail large source={{ uri: "http://0.gravatar.com/avatar/c2405556e360c95fc061cbea1a3a91f8?s=96&d=mm&r=g" }} />
						</Body>
					</CardItem>
				</Card>

				<Card>
					<CardItem>
						<Body>

							<Text>
							//Your text here
							</Text>
						</Body>
					</CardItem>
				</Card>
				<Content>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: "#FF9501" }}>
								<Icon active name="person" />
							</Button>
						</Left>
						<Body>
							<Text>Adınız Soyadınız</Text>
						</Body>
						<Right>

							<Text>Airplane Mode</Text>

						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: "#007AFF" }}>
								<Icon active name="mail" />
							</Button>
						</Left>
						<Body>
							<Text>Mail</Text>
						</Body>
						<Right>
							<Text>GeekyAnts</Text>
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: "#222222" }}>
								<Icon active name="link" />
							</Button>
						</Left>
						<Body>
							<Text>Site</Text>
						</Body>
						<Right>
							<Text>On</Text>
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: "#94182B" }}>
								<Icon active name="people" />
							</Button>
						</Left>
						<Body>
							<Text>Kullanıcı adı</Text>
						</Body>
						<Right>
							<Text>On</Text>
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Button style={{ backgroundColor: "#0B7F3F" }}>
								<Icon active name="calendar" />
							</Button>
						</Left>
						<Body>
							<Text>Üyelik Tarihi</Text>
						</Body>
						<Right>
							<Text>On</Text>
						</Right>
					</ListItem>
				</Content>
			</Container>


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

const mapDispatchToProps = (dispatch) => {
	return {
		logoutCtrl: () => dispatch(logoutCtrl())
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);



{/* <View>
						<Button
							onPress={() => { this._signOutAsync() }}
							title="logout"
							color="#841584"
							accessibilityLabel="logout"
						/>
					</View> */}
