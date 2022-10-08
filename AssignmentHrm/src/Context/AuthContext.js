import React, {createContext, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const login = (username, password) => {
    setIsLoading(true);

    let body = {
      client_id: username,
      client_secret: password,
      grant_type: 'client_credentials',
    };

    let bodyString = [];
    for (key in body) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(body[key]);
      bodyString.push(encodedKey + '=' + encodedValue);
    }

    let axiosConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
    };
    axios
      .post(
        `${BASE_URL}/symfony/web/index.php/oauth/issueToken`,
        bodyString.join('&'),
        axiosConfig,
      )
      .then(res => {
        let userInfo = res.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);

    axios
      .post(
        `${BASE_URL}/symfony/web/index.php/oauth/issueToken`,
        {},
        {
          headers: {Authorization: `Bearer ${userInfo.access_token}`},
        },
      )
      .then(res => {
        console.log(res.data);
        AsyncStorage.removeItem('userInfo');
        setUserInfo({});
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`logout error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{isLoading, userInfo, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
