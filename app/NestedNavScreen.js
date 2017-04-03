import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	ScrollView,
	View,
	Dimensions,
	Button,
	TouchableWithoutFeedback
} from 'react-native';

export class NestedNavScreen extends React.Component {
	static navigationOptions = {
		title: "Nested Nav"
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.screen}>
				<Text style={styles.textBlock}>
					Nested Navigation...
				</Text>
				<TouchableWithoutFeedback onPress={() => navigate('NestedNav2')}>
					<View style={styles.btn}>
						<Text>
							Second Navigation
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

export class NestedNav2Screen extends React.Component {
	static navigationOptions = {
		title: "Second"
	};

	render() {
		const { navigate } = this.props.navigation;

		return (
			<View style={styles.screen}>
				<Text style={styles.textBlock}>
					Nested Navigation 2...
				</Text>
				<TouchableWithoutFeedback onPress={() => navigate('NestedNav3')}>
					<View style={styles.btn}>
						<Text>
							Second Navigation
						</Text>
					</View>
				</TouchableWithoutFeedback>
			</View>
		);
	}
}

export class NestedNav3Screen extends React.Component {
	static navigationOptions = {
		title: "Third"
	};

	render() {
		const { goBack } = this.props.navigation;

		return (
			<View style={styles.screen}>
				<Text style={styles.textBlock}>
					Nested Navigation 3...
				</Text>
				<TouchableWithoutFeedback onPress={() => goBack()}>
					<View style={styles.btn}>
						<Text>
							Go Back
						</Text>
					</View>
				</TouchableWithoutFeedback>
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
	},
	btn: {
		backgroundColor: '#cccccc',
		borderRadius: 8,
		justifyContent: 'center',
		alignItems: 'center',
		height: 50,
		marginLeft: 20,
		marginRight: 20
	}
});

export default NestedNavScreen;