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
import Colors from '_styles/colors';

const DATA = require('_assets/data/mocked.json');

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
          renderItem={({item}) => <Item title={item.title} body={item.body} />}
          keyExtractor={item => item.id.toString()}
        />
        <View />
      </SafeAreaView>
    );
  }
}

function Item({title, body}) {
  return (
    <View>
      <Text style={styles.itemTitle}> {title} </Text>
      <Text style={styles.itemBody}> {body} </Text>
      <Separator />
    </View>
  );
}

function Separator() {
  return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListView: {
    paddingTop: 8,
  },
  itemTitle: {
    fontSize: 17,
    textAlign: 'left',
    paddingBottom: 8,
    paddingTop: 8,
    paddingRight: 24,
    paddingLeft: 16,
  },
  itemBody: {
    fontSize: 12,
    textAlign: 'left',
    paddingRight: 16,
    paddingLeft: 16,
    paddingBottom: 8,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light,
    marginLeft: 16,
  },
});

export default LocallyStoredList;
