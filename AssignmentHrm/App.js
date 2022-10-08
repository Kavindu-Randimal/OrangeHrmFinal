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
import HomeScreen from './src/components/HomeScreen';
import Footer from './src/components/Footer';
import Navigation from './src/components/Navigation/Navigation';
import {AuthProvider} from './src/Context/AuthContext';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App: () => React$Node = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
