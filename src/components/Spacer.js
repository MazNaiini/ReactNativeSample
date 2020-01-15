/**
 * Spacer Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {View} from 'react-native';

export default class Spacer extends React.Component {
  render() {
    const height = this.props.height ?? defaultHeight;
    return <View style={{height: height}} />;
  }
}

const defaultHeight = 10;
