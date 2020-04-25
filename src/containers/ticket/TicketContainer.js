import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TicketForm from '../../components/ticket/TicketForm';

const TicketStack = createStackNavigator();

const TicketContainer = () => {
  return (
    <TicketStack.Navigator>
      <TicketStack.Screen name="Ticket" component={TicketForm} />
    </TicketStack.Navigator>
  );
};

export default TicketContainer;
