/**
 * App
 * @format
 * @flow
 */

import MainNavigator from './src/MainNavigator';
import {createAppContainer} from 'react-navigation';

const App = createAppContainer(MainNavigator);

export default App;
