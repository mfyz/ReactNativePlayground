import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	ScrollView,
	View,
	Dimensions,
	Button
} from 'react-native';

class NavBarScreen extends React.Component {
	static navigationOptions = {
		title: "Nav Bar",
		header: {
			right: <Button title="Info" />,
			style: {
				backgroundColor: '#00A0D9'
			}
		}
	};

	render() {
		return (
			<View style={styles.screen}>
				<Text style={styles.textBlock}>
					This screen demontrates about navigation bar customization.
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	textBlock: {
		margin: 20,
		fontFamily: 'Avenir'
	}
});

export default NavBarScreen;