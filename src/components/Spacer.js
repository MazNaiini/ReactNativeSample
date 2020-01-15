/**
 * Spacer Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {View} from 'react-native';

const defaultHeight = 10;

export default class Spacer extends React.Component {
  render() {
    const height = this.props.height ?? defaultHeight;
    return <View style={{height: height}} />;
  }
}
