import React from 'react';
import styled from 'styled-components';
import {Dimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');

const LoginFormBox = styled.KeyboardAvoidingView`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  background-color: white;
`;
const TitleWapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;
const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
`;
const ActiveWapper = styled.View`
  flex: 5;
`;

const Input = styled.TextInput`
  width: ${width / 1.5}px;
  padding: 12.5px 20px;
  border: 1px solid grey;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 10px;
  font-weight: 500;
  height: 50px;
`;

const ButtonWapper = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const GobackWrapper = styled.TouchableOpacity`
  border: 1px solid grey;
  border-radius: 30px;
  align-items: center;
  width: 110px;
  margin-right: 10px;
`;
const LoginWrapper = styled.TouchableOpacity`
  border: 1px solid grey;
  border-radius: 30px;
  width: 150px;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const GobackButton = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const LoginButton = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: white;
`;
const LoginForm = ({navigation}) => {
  return (
    // <KeyboardAvoidingView
    //   style={{backgroundColor: 'white'}}
    //   resetScrollToCoords={{x: 0, y: 0}}
    //   scrollEnabled={false}>
    <ScrollView style={{backgroundColor: 'white'}}>
      <LoginFormBox>
        <TitleWapper>
          <Title>Sign In</Title>
        </TitleWapper>
        <ActiveWapper>
          <Input style={{marginTop: 80}} />
          <Input />
          <ButtonWapper style={{marginBottom: 10, marginTop: 30}}>
            <GobackWrapper onPress={() => navigation.goBack()}>
              <GobackButton>GoBack</GobackButton>
            </GobackWrapper>
            <LoginWrapper>
              <LoginButton>Sign In</LoginButton>
            </LoginWrapper>
          </ButtonWapper>
        </ActiveWapper>
      </LoginFormBox>
    </ScrollView>
  );
};

export default LoginForm;
