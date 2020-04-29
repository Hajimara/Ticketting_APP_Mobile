import React, {useState, useEffect, useRef} from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {register} from '../../modules/auth';
import {check} from '../../modules/user';
import AsyncStorage from '@react-native-community/async-storage';

const RegisterContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [accountId, setAccountId] = useState();
  const [password, setPassword] = useState();
  const [passwordConfirm, setPasswordConfirm] = useState();
  const [username, setUsername] = useState();
  const [address, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [error, setError] = useState();
  const {auth, authError, user} = useSelector(({auth, user}) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));
  let firstRunSkip = useRef(true);

  const onSubmit = () => {
    if (
      [
        accountId,
        password,
        passwordConfirm,
        username,
        address,
        phoneNumber,
      ].includes('') ||
      [
        accountId,
        password,
        passwordConfirm,
        username,
        address,
        phoneNumber,
      ].includes(undefined)
    ) {
      setError('빈 칸을 입력하세요.');
      console.log('Please enter a blank');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      console.log('password error');
      return;
    }
    dispatch(register({accountId, password, username, address, phoneNumber}));
  };

  useEffect(() => {
    if (firstRunSkip.current) {
      firstRunSkip.current = false;
    }
    if (authError) {
      if (authError && authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
      }
      console.log('기타오류 발생');
      console.log(authError);
      setError('회원가입 실패');
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
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
    <RegisterForm
      accountId={accountId}
      setAccountId={setAccountId}
      password={password}
      setPassword={setPassword}
      passwordConfirm={passwordConfirm}
      setPasswordConfirm={setPasswordConfirm}
      username={username}
      setUsername={setUsername}
      address={address}
      setAddress={setAddress}
      phoneNumber={phoneNumber}
      setPhoneNumber={setPhoneNumber}
      navigation={navigation}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default RegisterContainer;
