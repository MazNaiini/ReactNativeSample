/**
 * MainList Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Text} from 'react-native';
import Colors from './Colors';
import RoundedCornerButton from './RoundedCornersButton';
import Separator from './Separator';

export default class MainList extends React.Component {
  static navigationOptions = {
    title: 'Welcome!',
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeAreaView}>
          <ScrollView style={styles.scrollView}>
            <View>
              <Text style={styles.sectionHeaderText}>
                List / Detail examples
              </Text>
            </View>
            <Separator />
            <RoundedCornerButton
              title="List from a locally stored JSON"
              backgroundColor={Colors.green}
              height={180}
              onPress={() => {
                const navigation = this.props.navigation;
                navigation.navigate('LocallyLoadedList');
              }}
            />
            <Separator height={20} />
            <RoundedCornerButton
              title="List from a network API provider JSON"
              backgroundColor={Colors.skyBlue}
              height={180}
              onPress={() => {
                console.log('From list');
              }}
            />
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
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
    color: Colors.gray,
  },
  separator: {
    height: 8,
  },
});
