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

class MenuOption extends React.Component {
	render(){
		return <TouchableHighlight onPress={this.props.onPress}>
			<View style={styles.menuOption}>
				<Text>{this.props.title}</Text>
			</View>
		</TouchableHighlight>;
	}
}

class MenuScreen extends React.Component {
	static navigationOptions = {
		title: "Playground"
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<ScrollView style={styles.screen}>
				<MenuOption title="Intro" onPress={() => navigate('Intro')} />
				<MenuOption title="List View" onPress={() => navigate('ListView')} />
				<MenuOption title="Navigation Bar" onPress={() => navigate('NavBar')} />
				<MenuOption title="Nested Navigation" onPress={() => navigate('NestedNav')} />
				<MenuOption title="Component Lifecycle" onPress={() => navigate('Lifecycle')} />
				<MenuOption title="Simple Api Call" onPress={() => navigate('SimpleApiRequest')} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: 'column'
	},
	menuOption: {
		justifyContent: 'center',
		paddingLeft: 20,
		backgroundColor: '#fff',
		height: 50,
		borderBottomWidth: 0.5,
		borderBottomColor: '#d6d7da',
	}
});

export default MenuScreen;