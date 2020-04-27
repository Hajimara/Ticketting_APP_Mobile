import React from 'react';
import Header from '../../components/common/Header';
import {useNavigation, DrawerActions} from '@react-navigation/native';

const HeaderContainer = () => {
  const navigation = useNavigation();

  const onToggle = () => navigation.dispatch(DrawerActions.toggleDrawer());

  return <Header navigation={navigation} onToggle={onToggle} />;
};

export default HeaderContainer;
