/**
 * App
 * @format
 * @flow
 */

import RootStackNavigator from './navigations/rootStackNavigator';
import {createAppContainer} from 'react-navigation';

const App = createAppContainer(RootStackNavigator);

export default App;
