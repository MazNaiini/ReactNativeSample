/**
 * RoundedCornerButton Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '_styles/colors';

export default class RoundedCornerButton extends React.Component {
  render() {
    const styles = this.getStyles();
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.props.onPress ?? defaultOnPress}>
        <Text style={styles.text}>{this.props.title}</Text>
      </TouchableOpacity>
    );
  }

  getStyles() {
    return StyleSheet.create({
      container: {
        flex: 1,
        height: this.props.height ?? 200,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: Colors.dark,
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 1},
        backgroundColor: this.props.backgroundColor ?? Colors.white,
      },
      text: {
        fontSize: 20,
      },
    });
  }
}

const defaultOnPress = () => {
  console.log('default onPress declaration');
};
