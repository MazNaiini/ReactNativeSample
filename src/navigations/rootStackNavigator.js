/**
 * App
 * @format
 * @flow
 */
'use strict';

import {createStackNavigator} from 'react-navigation-stack';
import MainStackNavigator from './mainStackNavigator';
import AboutScreenNavigation from './aboutStackNavigator';

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: MainStackNavigator,
    },
    ModalAboutScreen: {
      screen: AboutScreenNavigation,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

export default RootStackNavigator;
