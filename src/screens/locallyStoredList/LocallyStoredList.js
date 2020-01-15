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
  TouchableHighlight,
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
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderItem}
          ItemSeparatorComponent={this.renderSeparator}
          keyExtractor={item => item.id.toString()}
          ListFooterComponent={this.renderFooter}
        />
      </SafeAreaView>
    );
  }

  renderHeader = () => {
    const style = {textAlign: 'center', padding: 8};
    return <Text style={style}>Header</Text>;
  };

  renderItem = ({item, index, separator}) => {
    return (
      <TouchableHighlight>
        <View>
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.itemBody} numberOfLines={2}>
            {item.body}
          </Text>
        </View>
      </TouchableHighlight>
    );
  };

  renderSeparator = () => {
    return <View style={styles.separator} />;
  };

  renderFooter = () => {
    const style = {textAlign: 'center', padding: 8};
    return <Text style={style}>Footer</Text>;
  };
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  flatListView: {
    paddingTop: 8,
    paddingBottom: 8,
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
    textAlign: 'justify',
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
