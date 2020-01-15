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
  Platform,
} from 'react-native';
import Colors from '_styles/colors';
import {ListItem, SearchBar} from 'react-native-elements';

const DATA = require('_assets/data/mocked.json');

class LocallyStoredList extends React.Component {
  static navigationOptions = {
    title: 'List From Locally Stored JSON',
    headerBackTitle: ' ',
  };

  state = {
    search: '',
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

  filteredData() {
    return DATA;
  }

  renderHeader = () => {
    return (
      <SearchBar
        platform={Platform.OS}
        placeholder={'Search here'}
        onChangeText={this.updateSearch}
        value={this.state.search}
      />
    );
  };

  updateSearch = search => {
    this.setState({search});
  };

  renderItem = ({item, index, separator}) => {
    return (
      <ListItem
        title={
          <Text style={styles.itemTitle} numberOfLines={1}>
            {item.title}
          </Text>
        }
        subtitle={
          <Text style={styles.itemBody} numberOfLines={2}>
            {item.body}
          </Text>
        }
        onPress={() => {
          const navigation = this.props.navigation;
          const params = {
            title: item.title,
            body: item.body,
          };
          navigation.navigate('Detail', params);
        }}
        chevron
      />
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
  },
  itemBody: {
    fontSize: 12,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.light,
  },
});

export default LocallyStoredList;
