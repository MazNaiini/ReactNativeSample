/**
 * MainList Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {SafeAreaView, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {Spacer} from '_components';

class DetailView extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerBackTitle: ' ',
  };

  render() {
    return (
      <SafeAreaView style={styles.content}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContent}
          centerContent={true}>
          {this.renderContent()}
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderContent() {
    const params = this.props.navigation.state.params;
    const title = params.title ?? '';
    const body = params.body ?? '';
    const image = require('_assets/images/logo.png');
    return (
      <>
        <Image resizeMode={'contain'} style={styles.image} source={image} />
        <Spacer height={30} />
        <Text style={styles.titleText}>{title}</Text>
        <Spacer height={40} />
        <Text style={styles.bodyText}>{body}</Text>
      </>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
    paddingTop: 16,
  },
  scrollViewContent: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  image: {
    height: 210,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  bodyText: {
    fontSize: 30,
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default DetailView;
