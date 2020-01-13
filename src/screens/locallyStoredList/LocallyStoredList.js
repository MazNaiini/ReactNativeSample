/**
 * MainList Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Item number one',
  },
  {
    id: '2',
    title: 'Item number two',
  },
  {
    id: '3',
    title: 'Item number three',
  },
];

class LocallyStoredList extends React.Component {
  static navigationOptions = {
    title: 'List From Locally Stored JSON',
    headerBackTitle: ' ',
  };
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar barStyle="dark-content" />
        <FlatList
          style={styles.flatListView}
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
        <View />
      </SafeAreaView>
    );
  }
}

function Item({title}) {
  return <Text style={styles.itemText}> {title} </Text>;
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListView: {
    paddingTop: 24,
  },
  itemText: {
    fontSize: 17,
    textAlign: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 24,
    paddingLeft: 24,
  },
  separator: {
    height: 8,
  },
});

export default LocallyStoredList;
