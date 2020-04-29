import React from 'react';
import styled from 'styled-components';
import {Dimensions, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

const {width} = Dimensions.get('screen');

const RegisterFormBox = styled.KeyboardAvoidingView`
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
  font-size: 30px;
  font-weight: bold;
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
const RegisterWrapper = styled.TouchableOpacity`
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

const RegisterButton = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
`;
const RegisterForm = ({
  navigation,
  accountId,
  setAccountId,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
  username,
  setUsername,
  address,
  setAddress,
  phoneNumber,
  setPhoneNumber,
  onSubmit,
  error,
}) => {
  return (
    // <KeyboardAvoidingView
    //   style={{backgroundColor: 'white'}}
    //   resetScrollToCoords={{x: 0, y: 0}}
    //   scrollEnabled={false}>
    <ScrollView style={{backgroundColor: 'white'}}>
      <RegisterFormBox>
        <TitleWapper>
          <Title>Sign Up</Title>
        </TitleWapper>
        <ActiveWapper>
          <Input
            style={{marginTop: 30}}
            value={accountId}
            placeholder="accountId"
            onChangeText={(text) => setAccountId(text)}
          />
          <Input
            value={password}
            placeholder="password"
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          />
          <Input
            value={passwordConfirm}
            placeholder="passwordConfirm"
            onChangeText={(text) => setPasswordConfirm(text)}
            secureTextEntry={true}
          />
          <Input
            value={username}
            placeholder="username"
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            value={address}
            placeholder="address"
            onChangeText={(text) => setAddress(text)}
            keyboardType={'email-address'}
          />
          <Input
            value={phoneNumber}
            placeholder="phoneNumber"
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType={'phone-pad'}
          />
          <ButtonWapper style={{marginBottom: 80}}>
            <GobackWrapper onPress={() => navigation.goBack()}>
              <GobackButton>GoBack</GobackButton>
            </GobackWrapper>
            <RegisterWrapper onPress={() => onSubmit()}>
              <RegisterButton>Sign Up</RegisterButton>
            </RegisterWrapper>
          </ButtonWapper>
          {error && (
            <View style={{position: 'absolute', bottom: 40, left: 0}}>
              <Text style={{color: 'red'}}>{error}</Text>
            </View>
          )}
        </ActiveWapper>
      </RegisterFormBox>
    </ScrollView>
  );
};

export default RegisterForm;
