import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';

export default  class About extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'ABOUT',
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

	render() {
		const { BlogTitle } = styles;
		return (
			<View style={styles.containerTop}>
				<View containerStyle={[styles.container]}>
					{/* <Divider style={{ backgroundColor: '#e1e8ee', shadowColor: "rgba(0,0,0,.2)" }} /> */}

					<Text style={BlogTitle}>ABOUT</Text>

					<View style={[styles.htmlViewContainer]}>
						<Text style={{ color: "#9DA3B4", marginBottom: 8 }}>
						A simple cross platform (iOS and Android) React Native quiz app.  {"\n"}
						This example was put together for React Native by Example.  {"\n"}
						Get started learning & mastering React Native for free!{"\n"}
						{"\n"}
	
	
						</Text>
					</View>

				</View>
			</View>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		isLoginPending: state.isLoginPending,
		isLoginSuccess: state.isLoginSuccess,
		loginError: state.loginError
	};
}






const styles = {
	containerTop: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom:15
	},
	container: {
		flex: 1,
		borderRadius: 12,
		overflow: 'hidden',
	},
	BlogTitle: {
		
		justifyContent: "center",
		alignItems: "center",
		fontFamily: 'opensans-bold',
		fontWeight: 'bold',
		fontSize: 18,
		marginTop: 5,
		marginBottom: 5,
	},
	htmlViewContainer: {
	
		width: Dimensions.get('window').width - 50,
		fontFamily: 'opensans-semibold',
		fontWeight: 'normal',
		marginTop: 5,
		marginBottom: 5,
		color: "red"
	},
};
