import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	ScrollView,
	View,
	Dimensions,
	ListView
} from 'react-native';

class ListViewRow extends React.Component {
	render(){
		const rowData = this.props.rowData;

		return <View style={styles.rowStyle}>
			<Text>
				{rowData}
			</Text>
		</View>;
	}
}

class ListViewScreen extends React.Component {
	static navigationOptions = {
		title: 'List View'
	};

	constructor(props){
		super(props);

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2
		});

		this.state = {
			dataSource: ds.cloneWithRows([
				'Fatih', 'Betul', 'Umay', 'Aybike', 'Sule', 'Melis', 'Ceren'
			])
		}
	}

	render() {
		return (
			<View style={styles.screen}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <ListViewRow rowData={rowData} />}
					/>
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
	rowStyle: {
		height: 50,
		justifyContent: 'center',
		backgroundColor: '#ffffff',
		borderBottomWidth: 0.5,
		borderBottomColor: '#cccccc',
		paddingLeft: 20
	}
});

export default ListViewScreen;