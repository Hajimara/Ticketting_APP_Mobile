import React from 'react';
import styled from 'styled-components';
import WelcomeImage from '../../lib/styles/img/welcome.jpg';
import {StatusBar} from 'react-native';

const WelcomeBox = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const SignUpButtonWrapper = styled.TouchableOpacity`
  margin-bottom: 20;
  width: 250;
  background-color: #333;
  border-radius: 50;
  height: 45;
`;

const SignInButtonWrapper = styled.TouchableOpacity`
  margin-bottom: 80;
  width: 250;
  background-color: white;
  border-radius: 50;
  height: 45;
  border: 1px solid #333;
`;

const SignUpButton = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30;
  color: white;
`;

const SignInButton = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 30;
  color: #333;
`;

const Position = styled.View`
  flex: 1;
`;

const Title = styled.Text`
  text-align: center;
  margin-top: 100px;
  font-weight: bold;
  font-size: 30px;
  color: #333;
`;
const Welcome = ({navigation}) => {
  return (
    <>
      <WelcomeBox source={WelcomeImage}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={'transparent'}
          translucent={false}
        />
        <Position>
          <Title>Welcome!</Title>
        </Position>
        <SignUpButtonWrapper onPress={() => navigation.navigate('Register')}>
          <SignUpButton>Sign Up</SignUpButton>
        </SignUpButtonWrapper>
        <SignInButtonWrapper onPress={() => navigation.navigate('Login')}>
          <SignInButton>Sign In</SignInButton>
        </SignInButtonWrapper>
      </WelcomeBox>
    </>
  );
};

export default Welcome;
