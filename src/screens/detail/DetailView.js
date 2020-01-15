/**
 * MainList Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {SafeAreaView, Text} from 'react-native';

class DetailView extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerBackTitle: ' ',
  };

  render() {
    const navigation = this.props.navigation;
    return (
      <SafeAreaView>
        <Text>{navigation.state.params.title ?? 'No title'}</Text>
      </SafeAreaView>
    );
  }
}

export default DetailView;
