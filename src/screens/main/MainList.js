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
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from '_styles/colors';
import RoundedCornerButton from '_components/RoundedCornersButton';
import Spacer from '_components/Spacer';

export default class MainList extends React.Component {
  static navigationOptions = {
    title: 'Welcome!',
  };
  render() {
    return (
      <>
        <SafeAreaView style={styles.safeAreaView}>
          <StatusBar barStyle="dark-content" />
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View>
              <Text style={styles.sectionHeaderText}>
                List / Detail examples
              </Text>
            </View>
            <Spacer />
            <RoundedCornerButton
              title="List from a locally stored JSON"
              backgroundColor={Colors.green}
              height={180}
              onPress={() => {
                const navigation = this.props.navigation;
                navigation.navigate('LocallyLoadedList');
              }}
            />
            <Spacer height={20} />
            <RoundedCornerButton
              title="List from a network API provider JSON"
              backgroundColor={Colors.skyBlue}
              height={180}
              onPress={() => {
                const navigation = this.props.navigation;
                navigation.navigate('APIFetchedList');
              }}
            />
          </ScrollView>
          <TouchableOpacity
            style={styles.floatingInfoButton}
            onPress={() => this.props.navigation.navigate('ModalAboutScreen')}>
            <Icon name="info" size={80} color={Colors.white} />
          </TouchableOpacity>
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
    justifyContent: 'center',
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
  floatingInfoButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    right: 24,
    bottom: 40,
    borderRadius: 40,
    backgroundColor: Colors.blue,
    shadowColor: Colors.dark,
    shadowOpacity: 0.6,
    shadowOffset: {width: 1, height: 1},
  },
});
