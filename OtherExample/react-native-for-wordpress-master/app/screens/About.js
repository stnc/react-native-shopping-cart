import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, TouchableHighlight, Text, StyleSheet, Dimensions } from 'react-native';
import { Card, Divider } from 'react-native-elements';
class About extends Component {
	static navigationOptions = ({ navigation }) => ({
		title: 'Biyo Güvenlik Hakkında',
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
				<Card containerStyle={[styles.container]}>
					<Divider style={{ backgroundColor: '#e1e8ee', shadowColor: "rgba(0,0,0,.2)" }} />

					<Text style={BlogTitle}>Biyo Güvenlik Hakkında</Text>

					<View style={[styles.htmlViewContainer]}>
						<Text style={{ color: "#9DA3B4", marginBottom: 8 }}>
						Biyogüvenlik, biyoteknoloji kapsamında yapılan tüm çalışmaların çevre ve insan yaşamını negatif yönde etkilememesi 
						için yasal denetim altına alınması işlemine denir.
						{"\n"}
						{"\n"}
						{"\n"}
						Oldukça geniş bir yelpazeye yayılmış biyogüvenlik uygulamalarının genel amacı, hayvan ve dolayısıyla insan sağlığını korumaktır.
						{"\n"}
						{"\n"}
						{"\n"}
					Biyogüvenlik, modern biyoteknoloji uygulama yöntemlerini ve modern biyoteknoloji ürünlerinin hayvan ve insan sağlığı ile çevre açısından 
					oluşturabileceği olumsuz etkilerin tespit edilmesi ve belirlenen risklerin oluşma olasılığının önüne geçilmesi 
					ya da risklerin ortaya çıkması durumunda oluşacak zararların azami sürede kontrol altında tutulması için alınacak önlemleri kapsamaktadır.
		
						</Text>
					</View>

				</Card>
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


export default connect(mapStateToProps, null)(About);




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
