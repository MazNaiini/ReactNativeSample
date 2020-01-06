/**
 * @format
 * @flow
 */

// import React from 'react';
import React from 'react';
import {StatusBar} from 'react-native';
import {MainList} from './screens/main';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <MainList />
    </>
  );
};

export default App;
