/**
 * App
 * @format
 * @flow
 */

import MainStackNavigator from '_navigations/mainStackNavigator';
import {createAppContainer} from 'react-navigation';

const App = createAppContainer(MainStackNavigator);

export default App;