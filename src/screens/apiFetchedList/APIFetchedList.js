/**
 * MainList Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';

class APIFetchedList extends React.Component {
  static navigationOptions = {
    title: 'List Fetched From API',
    headerBackTitle: ' ',
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="dark-content" />
          <View>
            <Text style={styles.sectionHeaderText}>
              A list loaded from network API
            </Text>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
  },
  sectionHeaderText: {
    fontSize: 17,
    textAlign: 'center',
    paddingBottom: 8,
  },
  separator: {
    height: 8,
  },
});

export default APIFetchedList;
