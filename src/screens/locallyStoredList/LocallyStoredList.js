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
  Image,
} from 'react-native';
import Colors from '_styles/colors';
import {ListItem, SearchBar} from 'react-native-elements';

class LocallyStoredList extends React.Component {
  static navigationOptions = {
    title: 'List From Locally Stored JSON',
    headerBackTitle: ' ',
  };

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      data: [],
    };
    this.entitiesArray = require('_assets/data/mocked.json');
  }

  componentDidMount() {
    this.initializeData();
  }

  initializeData() {
    this.setState({
      data: this.entitiesArray,
    });
  }

  render() {
    return (
      <SafeAreaView>
        <StatusBar barStyle="dark-content" />
        <FlatList
          style={styles.flatListView}
          data={this.state.data}
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
    const filteredData = this.entitiesArray.filter(item => {
      const searchString = search.toLowerCase();
      return (
        item.title.toLowerCase().indexOf(searchString) >= 0 ||
        item.body.toLowerCase().indexOf(searchString) >= 0
      );
    });
    this.setState({search, data: filteredData});
  };

  renderItem = ({item}) => {
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
    const image = require('_assets/images/logo.png');
    return (
      <>
        <Image
          resizeMode={'contain'}
          style={styles.footerImage}
          source={image}
        />
        <Text style={styles.footerText}> Mana & Co AB</Text>
      </>
    );
  };
}

const styles = StyleSheet.create({
  flatListView: {
    paddingTop: 8,
    paddingBottom: 64,
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
  footerImage: {
    height: 56,
    width: 56,
    alignSelf: 'center',
    paddingVertical: 56,
  },
  footerText: {
    fontSize: 24,
    alignSelf: 'center',
  },
});

export default LocallyStoredList;
