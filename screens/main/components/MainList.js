/**
 * Colors Component
 * @flow
 * @format
 */

'use strict';

// import React from 'react';
import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView, Text} from 'react-native';
import Colors from './Colors';

const welcomeText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque ipsum, finibus at rutrum id, venenatis eget est. Sed vitae ex a magna blandit ultricies quis vel metus. Vivamus laoreet neque mauris, vitae eleifend diam sollicitudin sed. Suspendisse felis tellus, rhoncus ut nisl fermentum, finibus dictum odio. Aliquam eleifend faucibus mi, eu fermentum est rutrum eget. Proin malesuada enim aliquam, porta nisl feugiat, porttitor urna. Phasellus ut justo hendrerit, dapibus nulla a, semper augue. Cras lobortis semper enim malesuada sollicitudin. Nunc nulla nulla, facilisis vel interdum sed, dictum varius velit. Cras posuere sapien est, a posuere nunc interdum eget. Sed ac augue quis sapien dictum ultricies. Ut nec congue odio. In et mi fermentum, facilisis massa eu, semper est. Donec viverra eros non mauris sollicitudin, vel tempor elit malesuada. Vivamus at sapien ligula.';

export default class MainList extends React.Component {
  render() {
    return (
      <>
        <SafeAreaView style={styles.mainView}>
          <ScrollView style={styles.scrollView}>
            <View>
              <Text style={styles.body}>{welcomeText}</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: Colors.red,
  },
  body: {
    paddingLeft: 24,
    paddingRight: 24,
  },
});
