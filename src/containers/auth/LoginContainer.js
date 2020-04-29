import React, {useState, useEffect} from 'react';
import LoginForm from '../../components/auth/LoginForm';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {login, initializeForm} from '../../modules/auth';
import {check} from '../../modules/user';
import AsyncStorage from '@react-native-community/async-storage';

const LoginContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {user, auth, authError} = useSelector(({user, auth}) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  const [accountId, setAccountId] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  const onSubmit = () => {
    console.log(accountId, password);
    dispatch(login({accountId, password}));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  // 성공여부
  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('로그인 성공');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      navigation.navigate('Home');
      try {
        AsyncStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.log('localStorage is not working');
      }
    }
  }, [navigation, user]);

  return (
    <LoginForm
      navigation={navigation}
      accountId={accountId}
      setAccountId={setAccountId}
      password={password}
      setPassword={setPassword}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default LoginContainer;
