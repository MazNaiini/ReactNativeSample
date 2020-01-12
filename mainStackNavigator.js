/**
 * App
 * @format
 * @flow
 */

import {MainList, LocallyStoredList, APIFetchedList} from 'screens';
import {createStackNavigator} from 'react-navigation-stack';

const MainStackNavigator = createStackNavigator({
  MainList: {screen: MainList},
  LocallyLoadedList: {screen: LocallyStoredList},
  APIFetchedList: {screen: APIFetchedList},
});

export default MainStackNavigator;
