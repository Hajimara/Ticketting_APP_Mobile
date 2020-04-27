import React from 'react';
import Welcome from '../../components/auth/Welcome';
import {useNavigation} from '@react-navigation/native';

const WelcomeContainer = () => {
  const navigation = useNavigation();

  return <Welcome navigation={navigation} />;
};

export default WelcomeContainer;
