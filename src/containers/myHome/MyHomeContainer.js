import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MyHomeForm from '../../components/myHome/MyHomeForm';

const MyHome = createStackNavigator();

const MyHomeContainer = () => {
  return (
    <MyHome.Navigator>
      <MyHome.Screen name="MyHome" component={MyHomeForm} />
    </MyHome.Navigator>
  );
};

export default MyHomeContainer;
