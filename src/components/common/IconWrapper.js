import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Button, Text} from 'react-native';
import Animated from 'react-native-reanimated';

const Wrapper = styled.TouchableOpacity``;
const DropdownWrapper = styled.View`
  position: absolute;
  top: 56;
  left: -55;
  width: 100;
  height: 50;
`;
const DropdownButton = styled.Button`
  background-color: #333;
  color: tomato;
`;
const IconWrapper = ({menu, fadeAnim, menuToggle, onToggle}) => {
  return (
    <>
      <Wrapper>
        <Ionicons
          onPress={() => onToggle()}
          name={'logo-buffer'}
          size={30}
          color={'tomato'}
          style={{paddingRight: 20}}
        />
      </Wrapper>
      <Animated.View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
        }}>
        <Text>ss</Text>
      </Animated.View>
      {!menuToggle && (
        <DropdownWrapper>
          <DropdownButton
            color={'tomato'}
            touchSoundDisabled={false}
            opPress={() => alert('zzz')}
            title="로그인"
          />
          <DropdownButton
            color={'#333'}
            touchSoundDisabled={false}
            opPress={() => alert('zzz')}
            title="회원가입"
          />
        </DropdownWrapper>
      )}
    </>
  );
};

export default IconWrapper;
