/**
 * App
 * @format
 * @flow
 */
'use strict';

import {
  MainList,
  LocallyStoredList,
  APIFetchedList,
  DetailView,
} from '_screens';
import {createStackNavigator} from 'react-navigation-stack';

const MainStackNavigator = createStackNavigator({
  MainList: {screen: MainList},
  LocallyLoadedList: {screen: LocallyStoredList},
  APIFetchedList: {screen: APIFetchedList},
  Detail: {screen: DetailView},
});

export default MainStackNavigator;
