import React from 'react';
import styled from 'styled-components';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderBox = styled.View`
  position: relative;
  height: 10%;
  width: 100%;
`;

const LogoWarrper = styled.TouchableOpacity`
  text-align: left;
  margin-top: 10;
  margin-left: 20;
`;

const Logo = styled.Text`
  color: #333;
  font-size: 28;

  font-weight: bold;
`;

const Icon = styled(Ionicons)``;

const IconWarrper = styled.TouchableOpacity`
  position: absolute;
  top: 15;
  right: 20;
`;

const Header = ({navigation, user, onToggle}) => {
  return (
    <>
      <HeaderBox>
        <LogoWarrper onPress={() => navigation.navigate('Home')}>
          <Logo>Ticket</Logo>
        </LogoWarrper>
        {!user && (
          <IconWarrper onPress={onToggle}>
            <Icon name={'ios-menu'} size={28} color={'#333'} />
          </IconWarrper>
        )}
      </HeaderBox>
    </>
  );
};

export default Header;
