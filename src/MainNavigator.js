/**
 * App
 * @format
 * @flow
 */

import {MainList} from '_screens/main';
import {LocallyStoredList} from '_screens/locallyStoredList';
import {APIFetchedList} from '_screens/apiFetchedList';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  MainList: {screen: MainList},
  LocallyLoadedList: {screen: LocallyStoredList},
  APIFetchedList: {screen: APIFetchedList},
});

export default MainNavigator;
