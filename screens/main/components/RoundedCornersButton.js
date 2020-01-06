/**
 * Colors Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';
import Colors from './Colors';

export default class RoundedCornerButton extends React.Component {
  render() {
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        shadowColor: Colors.dark,
        shadowOpacity: 1,
        shadowOffset: {width: 1, height: 1},
        backgroundColor: this.props.backgroundColor,
      },
      text: {
        fontSize: 17,
      },
    });

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    );
  }
}

RoundedCornerButton.propTypes = {
  title: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
