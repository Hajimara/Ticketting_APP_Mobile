import React from 'react';
import LoginForm from '../../components/auth/LoginForm';
import {useNavigation} from '@react-navigation/native';

const LoginContainer = () => {
  const navigation = useNavigation();

  return <LoginForm navigation={navigation} />;
};

export default LoginContainer;
