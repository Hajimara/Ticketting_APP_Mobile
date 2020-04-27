import React from 'react';
import RegisterForm from '../../components/auth/RegisterForm';
import {useNavigation} from '@react-navigation/native';

const RegisterContainer = () => {
  const navigation = useNavigation();

  return <RegisterForm navigation={navigation} />;
};

export default RegisterContainer;
