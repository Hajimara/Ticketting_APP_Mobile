import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainContainer from './src/containers/main/MainContainer';
import MyHomeContainer from './src/containers/myHome/MyHomeContainer';
import TicketContainer from './src/containers/ticket/TicketContainer';
import MovieContainer from './src/containers/movie/Moviecontainer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" size={'32px'} component={MainContainer} />
        <Tab.Screen name="Movie" component={MovieContainer} />
        <Tab.Screen name="Ticket" component={TicketContainer} />
        <Tab.Screen name="MyHome" component={MyHomeContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
