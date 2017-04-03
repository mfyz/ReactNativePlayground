import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	ScrollView,
	View,
	Dimensions,
	TouchableHighlight
} from 'react-native';

class FloatingButton extends React.Component {
	render(){
		return <TouchableHighlight onPress={this.props.onPress}>
			<View style={styles.floatingButton}>
				<Text style={styles.floatingButtonText}>{this.props.text}</Text>
			</View>
		</TouchableHighlight>;
	}
}

class IntroScreen extends React.Component {
	static navigationOptions = {
		title: 'Intro'
	};

	render() {
		const { height: heightOfDeviceScreen } = Dimensions.get('window');
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.screen}>
				<ScrollView style={styles.scrollview}>
					<View style={[styles.welcomeContainer, {height: heightOfDeviceScreen}]}>
						<Text style={styles.welcome}>
							Welcome to React Native!
						</Text>
						<Text style={styles.instructions}>
							To get started, edit app/App.js
						</Text>
						<Text style={styles.instructions}>
							=> Double press R to reload,{'\n'}
							=> Shake for dev menu
						</Text>
					</View>
					<View>
						<Text style={styles.textBlock}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Ab aut culpa ex harum, iusto laborum neque quidem quis vel voluptas.
							Cupiditate est fugiat, modi numquam obcaecati qui totam veritatis voluptate?
						</Text>
						<Text style={styles.textBlock}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Ab aut culpa ex harum, iusto laborum neque quidem quis vel voluptas.
							Cupiditate est fugiat, modi numquam obcaecati qui totam veritatis voluptate?
						</Text>
						<Text style={styles.textBlock}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit.
							Ab aut culpa ex harum, iusto laborum neque quidem quis vel voluptas.
							Cupiditate est fugiat, modi numquam obcaecati qui totam veritatis voluptate?
						</Text>
					</View>
				</ScrollView>
				<FloatingButton text="Get Started" onPress={() => navigate('ListView')} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	scrollview: {
		flex: 1,
		backgroundColor: '#efefef'
	},
	floatingButton: {
		height: 70,
		backgroundColor: '#f00',
		alignItems: 'center',
		justifyContent: 'center'
	},
	floatingButtonText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: '#fff'
	},
	welcomeContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#666666'
	},
	welcome: {
		fontSize: 24,
		textAlign: 'center',
		margin: 10,
		color: '#fff'
	},
	instructions: {
		textAlign: 'center',
		fontFamily: 'Avenir',
		marginBottom: 5,
		color: '#fff'
	},
	textBlock: {
		margin: 20
	}
});

export default IntroScreen;