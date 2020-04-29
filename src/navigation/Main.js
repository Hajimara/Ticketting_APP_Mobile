import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainContainer from '../containers/main/MainContainer';
import MyHomeContainer from '../containers/myHome/MyHomeContainer';
import TicketContainer from '../containers/ticket/TicketContainer';
import MovieContainer from '../containers/movie/Moviecontainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';

// const DrawerNav = createDrawerNavigator();
// const drawers = () => {
//   return (
//     <DrawerNav.Navigator>
//       <DrawerNav.Screen name="Home" component={MainContainer} />
//       <DrawerNav.Screen name="Movie" component={MovieContainer} />
//     </DrawerNav.Navigator>
//   );
// };

const Tab = createBottomTabNavigator();
const tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Movie') {
            iconName = focused ? 'ios-videocam' : 'ios-videocam';
          } else if (route.name === 'Ticket') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar';
          } else if (route.name === 'MyHome') {
            iconName = focused ? 'ios-contact' : 'ios-contact';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MainContainer} />
      <Tab.Screen name="Movie" component={MovieContainer} />
      <Tab.Screen name="Ticket" component={TicketContainer} />
      <Tab.Screen name="MyHome" component={MyHomeContainer} />
    </Tab.Navigator>
  );
};

const MainNavigator = createStackNavigator();
const Main = () => {
  return (
    <MainNavigator.Navigator
      screenOptions={
        {
          // headerBackTitleVisible: false,
          // headerBackImage: () => <BackBtn />,
        }
      }>
      <MainNavigator.Screen
        name="tabs"
        component={tabs}
        options={{headerShown: false}}
        independent={true}
      />
    </MainNavigator.Navigator>
  );
};

export default Main;
