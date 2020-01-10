/**
 * App
 * @format
 * @flow
 */

// import React from 'react';
import {MainList} from './screens/main';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Welcome: {screen: MainList},
});

const App = createAppContainer(MainNavigator);

export default App;
