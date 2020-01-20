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
// import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
          <ScrollView style={styles.scrollView}>
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
            <Icon raised={true} name="info" size={80} color={Colors.blue} />
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
  floatingInfoButton: {
    position: 'absolute',
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    right: 24,
    bottom: 40,
    borderRadius: 30,
    shadowColor: Colors.black,
    shadowOpacity: 0.4,
    shadowOffset: {width: 0, height: 3},
  },
});
