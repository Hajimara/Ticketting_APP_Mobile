import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Animated} from 'react-native';

const IconWrapperOpacity = styled.TouchableOpacity`
  z-index: 1;
`;
const LoginButton = styled.TouchableOpacity`
  position: absolute;
  top: 55;
  left: -59;
  width: 100;
  z-index: 1;
`;
const RegisterButton = styled.TouchableOpacity`
  position: absolute;
  top: 45;
  left: -100;
  width: 100;
  z-index: 1;
`;

const DropdownCover = styled.TouchableOpacity`
  position: absolute;
  top: -1000;
  right: 0;
  width: 10000;
  height: 10000;
  background-color: rgba(0, 0, 0, 0.125);
  z-index: -1;
  overflow: hidden;
`;

const DropdownButton = styled.Button`
  background-color: #333;
  color: tomato;
`;

const IconWrapper = ({fadeAnim, onToggle}) => {
  return (
    <>
      <IconWrapperOpacity onPress={() => onToggle()}>
        <Ionicons
          name={'logo-buffer'}
          size={30}
          color={'tomato'}
          style={{paddingRight: 20}}
        />
      </IconWrapperOpacity>

      {/* <LoginButton onPress={() => console.log('멍청이')}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          <DropdownButton color={'tomato'} title="로그인" />
        </Animated.View>
      </LoginButton>

      <RegisterButton onPress={() => console.log('바보')}>
        <Animated.View
          style={{
            opacity: fadeAnim,
          }}>
          <DropdownButton color={'#333'} title="회원가입" />
        </Animated.View>
      </RegisterButton> */}

      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        <DropdownCover onPress={() => onToggle()} />
      </Animated.View>
    </>
  );
};

export default IconWrapper;
