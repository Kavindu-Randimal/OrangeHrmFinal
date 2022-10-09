import React, {createContext, useState} from 'react';
import axios from 'axios';
import {BASE_URL} from '../components/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
          AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
          setIsLoading(false);

          axios
            .get(`${BASE_URL}/symfony/web/index.php/api/v1/employee/1`, {
              headers: {Authorization: `Bearer ${userInfo.access_token}`},
            })
            .then(res => {
              console.log('----------------------------------');
              console.log(res.data);
            })
            .catch(e => {
              console.log(`get details error ${e}`);
              setIsLoading(false);
            });
        })
        .catch(e => {
          console.log(`login error ${e}`);
          setIsLoading(false);
        });
    }
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

  // const getDetails = () => {
  //   axios
  //     .get(
  //       'https://randimal-osondemand.orangehrm.com/symfony/web/index.php/api/v1/employee/1',
  //     )
  //     .then(response => {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  // const getAll = token => {
  //   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  //   return axios.get(
  //     'https://randimal-osondemand.orangehrm.com/symfony/web/index.php/api/v1/employee/1',
  //   );
  // };

  // const getAll = () => {
  //   const api = `https://randimal-osondemand.orangehrm.com/symfony/web/index.php/api/v1/employee/1`;
  //   axios
  //     .get(api, {headers: {Authorization: `Bearer ${userInfo.access_token}`}})
  //     .then(res => {
  //       console.log(res.data);
  //     });
  // };

  // const getAll = () => {
  //   setIsLoading(true);

  //   axios
  //     .get(
  //       `${BASE_URL}/symfony/web/index.php/api/v1/employee/1`,
  //       {},
  //       {
  //         headers: {Authorization: `Bearer${userInfo.access_token}`},
  //       },
  //     )
  //     .then(res => {
  //       console.log(res.data);
  //       // AsyncStorage.removeItem('userInfo');
  //       // setUserInfo({});
  //       // setIsLoading(false);
  //     })
  //     .catch(e => {
  //       console.log(`get details error ${e}`);
  //       setIsLoading(false);
  //     });
  // };

  const getAll = () => {
    console.log('token ' + userInfo.access_token);
    axios
      .get(`${BASE_URL}/symfony/web/index.php/api/v1/employee/1`, {
        headers: {Authorization: `Bearer ${userInfo.access_token}`},
      })
      .then(res => {
        console.log(res.data);
      })
      .catch(e => {
        console.log(`get details error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider value={{isLoading, userInfo, login, logout, getAll}}>
      {children}
    </AuthContext.Provider>
  );
};
