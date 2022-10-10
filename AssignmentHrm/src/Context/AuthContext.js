import React, {createContext, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  var token = '';

  const login = (username, password) => {
    // setIsLoading(true);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (
      username == '' ||
      (reg.test(username) === false && password == password)
    ) {
      alert('please fill the username field correctly');
    }
    if (username == username && reg.test(username) === true && password == '') {
      alert('password field is empty');
    }
    if (username == userInfo.username && password == userInfo.password) {
    } else {
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
          console.log(userInfo.access_token);
          setUserInfo(userInfo);
          token = userInfo.access_token;
          storeData(JSON.stringify(userInfo));
        })
        .catch(e => {
          console.log(`login error ${e}`);
        });
    }
  };

  const logout = () => {
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
      })
      .catch(e => {
        console.log(`logout error ${e}`);
      });
  };

  const getAll = () => {
    console.log('token ' + userInfo.access_token);
    userInfo = axios
      .get(`${BASE_URL}/symfony/web/index.php/api/v1/employee/1`, {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(`get details error ${e}`);
      });
  };

  return (
    <AuthContext.Provider value={{userInfo, login, logout, getAll}}>
      {children}
    </AuthContext.Provider>
  );
};
