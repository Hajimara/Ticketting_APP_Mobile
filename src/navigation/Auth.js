import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../containers/auth/LoginContainer';
import RegisterContainer from '../containers/auth/RegisterContainer';
import WelcomeContainer from '../containers/auth/WelcomeContainer';

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
      <AuthStack.Screen
        name="Welcome"
        component={WelcomeContainer}
        options={{title: 'Welcome', headerShown: false}}
      />
      <AuthStack.Screen
        name="Login"
        component={LoginContainer}
        options={{title: 'SignIn', headerShown: false}}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterContainer}
        options={{title: 'SignUp', headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};

export default Auth;
