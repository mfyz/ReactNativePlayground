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

export default class LifecycleScreen extends React.Component {
	static navigationOptions = {
		title: "Comp. Lifecycle"
	};

	constructor(props){
		super(props);
		this.state = { value: 1 };
	}

	componentWillMount = () => {
		console.log("=====> View will mount");
	};

	componentDidMount = () => {
		console.log("=====> View mounted");
	};

	componentWillUpdate = () => {
		console.log("=====> View will be updated");
	};

	componentDidUpdate = () => {
		console.log("=====> View updated");
	};

	componentWillReceiveProps = (nextProps) => {
		console.log("=====> View will receive props");
		console.log(nextProps);
	};

	shouldComponentUpdate = (nextProps, nextState) => {
		console.log("=====> Should view update?");
		console.log('next props: ', nextProps);
		console.log('next state: ', nextState);

		if (nextState.value % 5 == 0) {
			return false; // we can stop component to render for certain cases.
			// state change is not affected by this, only render operation.
		}
		else {
			return true; // component continues to update/render operation.
		}
	};

	componentWillUnmount = () => {
		console.log("=====> View will unmount");
	};

	increaseValue = () => {
		this.setState((prev, props) => ({
			value: prev.value + 1
		}));
	};

	render() {
		return (
			<View style={styles.screen}>
				<Text style={styles.textBlock}>
					Learning component lifecycle...
					Value: {this.state.value}
				</Text>
				<Button title="Increase" onPress={() => this.increaseValue()} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1
	},
	textBlock: {
		padding: 20,
		fontFamily: 'Avenir'
	}
});