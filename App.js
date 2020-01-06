/**
 * React Native Sample App
 * @format
 * @flow
 */

// import React from 'react';
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';

import {
  Colors,
} from './screens/main';

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle = 'dark-content'>
          <SafeAreaView>
            <ScrollView>
              <view height = {1000} style = {styles.ScrollView}>
                
              </view>
              </ScrollView>  
          </SafeAreaView>
        </StatusBar>
      </>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.black,
  },
  ScrollView: {
    backgroundColor: Colors.red
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});