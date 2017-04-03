import React from 'react';
import { StackNavigator } from 'react-navigation';
import MenuScreen from './MenuScreen';
import IntroScreen from './IntroScreen';
import ListViewScreen from './ListViewScreen';
import NavBarScreen from './NavBarScreen';
import { NestedNavScreen, NestedNav2Screen, NestedNav3Screen } from './NestedNavScreen';
import SimpleApiRequestScreen from './SimpleApiRequestScreen';
import LifecycleScreen from './LifecycleScreen';

const App = StackNavigator({
	Menu: {screen: MenuScreen},
	Intro: {screen: IntroScreen},
	ListView: {screen: ListViewScreen},
	NavBar: {screen: NavBarScreen},
	NestedNav: {screen: NestedNavScreen},
	NestedNav2: {screen: NestedNav2Screen},
	NestedNav3: {screen: NestedNav3Screen},
	SimpleApiRequest: {screen: SimpleApiRequestScreen},
	Lifecycle: {screen: LifecycleScreen}
});

export default App;