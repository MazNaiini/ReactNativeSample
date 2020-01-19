/**
 * App
 * @format
 * @flow
 */
'use strict';

import {AboutView} from '_screens';
import {createStackNavigator} from 'react-navigation-stack';

const AboutStackNavigator = createStackNavigator({
  AboutScreen: {screen: AboutView},
});

export default AboutStackNavigator;
