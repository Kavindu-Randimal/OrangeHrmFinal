/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';


import SignInScreen from './src/components/SignInScreen';
import SignUpScreen from './src/components/SignUpScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: () => React$Node = () => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <SignInScreen/>
      </SafeAreaView>
    </>
  );
};


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor : "#F9FBFC"
  }
});

export default App;
