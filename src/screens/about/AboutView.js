/**
 * MainList Component
 * @flow
 * @format
 */

'use strict';

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {Spacer} from '_components';
import Colors from '_styles/colors';

class AboutView extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'About',
      headerRight: () => (
        <Button
          onPress={() => {
            navigation.dismiss();
          }}
          title="close "
          color={Colors.dark}
        />
      ),
    };
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
    const image = require('_assets/images/logo.png');
    return (
      <>
        <Image resizeMode={'contain'} style={styles.image} source={image} />
        <Spacer height={30} />
        <Text style={styles.titleText}>MaNa & Co AB</Text>
        <Spacer height={40} />
        <Text style={styles.bodyText}>
          High quality code cross platform apps. This demo app is developed
          using the Flutter platform. The features shown in this app include
          basic layout and navigation in Flutter. The app runs on the iOS
          (iPhone/iPad) and Android (Android phones/tablets). For your app
          development needs please contact us at: maz@ma-na.co
        </Text>
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
    height: 300,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 30,
    textAlign: 'center',
    paddingLeft: 24,
    paddingRight: 24,
  },
  bodyText: {
    fontSize: 18,
    textAlign: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default AboutView;
