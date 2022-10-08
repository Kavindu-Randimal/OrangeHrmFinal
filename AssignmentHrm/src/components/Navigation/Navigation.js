import {React, useContext} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthContext} from '../../Context/AuthContext';
import HomeScreen from '../HomeScreen';
import SignInScreen from '../SignInScreen';
import SignUpScreen from '../SignUpScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userInfo} = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {userInfo.access_token ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={SignInScreen}
              options={{headerShown: false}}
            />

            <Stack.Screen
              name="SignUp"
              component={SignUpScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default Navigation;
