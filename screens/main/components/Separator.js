/**
 * Colors Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

export default class Separator extends React.Component {
  render() {
    const height = this.props.height ?? 10;
    return <View style={{height: height}} />;
  }
}

Separator.propTypes = {
  height: PropTypes.number,
};
