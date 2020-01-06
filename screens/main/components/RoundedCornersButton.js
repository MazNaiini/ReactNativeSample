/**
 * Colors Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from './Colors';

export default class RoundedCornerButton extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        height: this.props.height ?? 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: Colors.dark,
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 1},
        backgroundColor: this.props.backgroundColor,
      },
      text: {
        fontSize: 20,
      },
    });
    const defaultOnPress = () => {
      console.log('test');
    };
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress ?? defaultOnPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }
}

RoundedCornerButton.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  height: PropTypes.number,
  onPress: PropTypes.function,
};
