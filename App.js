/**
 * App
 * @format
 * @flow
 */

// import React from 'react';
import {MainList} from './screens/main';
import {LocallyStoredList} from './screens/locallyStoredList';
import {APIFetchedList} from './screens/apiFetchedList';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  MainList: {screen: MainList},
  LocallyLoadedList: {screen: LocallyStoredList},
  APIFetchedList: {screen: APIFetchedList},
});

const App = createAppContainer(MainNavigator);

export default App;
