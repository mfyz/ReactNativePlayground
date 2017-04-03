import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	ScrollView,
	View,
	Alert,
	Button,
	Image,
	TouchableHighlight
} from 'react-native';

export default class SimpleApiRequestScreen extends React.Component {
	static navigationOptions = {
		title: "XKCD"
	};

	constructor(props){
		super(props);
		this.state = {
			loading: true,
			data: {}
		};

		console.log('=====> View Constructed');

		//let data = fetchDataFromAPI();
		//Alert.alert('Construct Result', data.safe_title);
	}

	componentDidMount = () => {
		console.log('=====> View Mounted');

		this.fetchDataFromAPI();
	};

	fetchDataFromAPI = (id) => {
		console.log('=====> Fetching Data From API...');

		const fetchUrl = 'https://xkcd.com/' + (id ? id + '/' : '') + 'info.0.json';
		console.log('=====> FETCH URL:', fetchUrl);

		fetch(fetchUrl, {
				method: 'GET',
				//headers: {
				//	'Accept': 'application/json',
				//	'Content-Type': 'application/json',
				//},
				//body: JSON.stringify({
				//	foo: 'bar',
				//})
			})
			.then((resp) => {
				if (resp.status == 500) {
					Alert.alert('Ooops 500!');
				}

				console.log('====> API RAW RESPONSE: ', resp);
				return resp.json();
			})
			.then((data) => {
				this.setDataAndRender(data);
			})
			.catch((err) => {
				Alert.alert('API ERROR!');
				console.error(err)
			})
			.done();
	};

	setDataAndRender = (data) => {
		console.log("=====> Data:");
		console.log(data);

		this.setState({
			loading: false,
			data: data
		});
	};

	loadPrevious = () => {
		//this.setState({ loading: true });
		this.fetchDataFromAPI(this.state.data.num - 1);
	};

	render() {
		console.log('=====> View Rendering');

		return (
			<View style={styles.screen}>
				{this.state.loading &&
					<View style={styles.loading}>
						<Text style={[styles.textBlock, styles.largeText]}>
							Loading...
						</Text>
					</View>
				}
				{!this.state.loading &&
					<View>
						<Text style={styles.textBlock}>
							#{this.state.data.num} - {this.state.data.title}
						</Text>
              
						<View style={styles.hr} />
						<Image source={{uri: this.state.data.img}}
							resizeMode="contain"
							style={styles.image} />
						<View style={styles.hr} />
						<TouchableHighlight underlayColor="transparent"
							style={styles.button}
							onPress={() => this.loadPrevious()}>
							<Text>Previous Day</Text>
						</TouchableHighlight>
					</View>
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#fff'
	},
	textBlock: {
		margin: 20,
		fontFamily: 'Avenir'
	},
	largeText: {
		fontSize: 30,
		fontWeight: 'bold'
	},
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	button: {
		height: 60,
		justifyContent: 'center',
		alignItems: 'center'
	},
	hr: {
		height: 0.5,
		borderBottomColor: '#cccccc',
		borderBottomWidth: 0.5
	},
	image: {
		flexGrow: 1,
		height: 475,
		marginLeft: 10,
		marginRight: 10
	}
});