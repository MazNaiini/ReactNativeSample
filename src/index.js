/**
 * App
 * @format
 * @flow
 */

import MainStackNavigator from 'navigations/mainStackNavigator';
import {createAppContainer} from 'react-navigation';

const App = createAppContainer(MainStackNavigator);

export default App;
