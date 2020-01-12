/**
 * App
 * @format
 * @flow
 */

import {MainList} from './screens/main';
import {LocallyStoredList} from './screens/locallyStoredList';
import {APIFetchedList} from './screens/apiFetchedList';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  MainList: {screen: MainList},
  LocallyLoadedList: {screen: LocallyStoredList},
  APIFetchedList: {screen: APIFetchedList},
});

export default MainNavigator;
