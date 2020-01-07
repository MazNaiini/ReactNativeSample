/**
 * Separator Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {View} from 'react-native';

export default class Separator extends React.Component {
  render() {
    const height = this.props.height ?? 10;
    return <View style={{height: height}} />;
  }
}