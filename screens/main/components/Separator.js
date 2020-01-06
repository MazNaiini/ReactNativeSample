/**
 * Colors Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import View from 'react-native';
import PropTypes from 'prop-types';

export default class Separator extends React.Component {
  render() {
    return (
        <View />
    ) ;
  }
}
Separator.propTypes = {
  height: PropTypes.number,
};
