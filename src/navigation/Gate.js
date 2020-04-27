import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Main from './Main';
import Auth from './Auth';

export default () => {
  const {isLoggedin} = useSelector(({auth}) => ({
    isLoggedin: auth.auth,
  }));
  return (
    <NavigationContainer>
      {isLoggedin ? <Main /> : <Auth />}
    </NavigationContainer>
  );
};
