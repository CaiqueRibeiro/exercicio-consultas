import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import CheckIn from '../pages/CheckIn';
import Appointment from '../pages/Appointment';

const MainNav = createStackNavigator();

const MainRoutes: React.FC = () => (
  <MainNav.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3498db',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <MainNav.Screen name="Home" component={Home} />
    <MainNav.Screen name="CheckIn" component={CheckIn} />
    <MainNav.Screen name="Consulta" component={Appointment} />
  </MainNav.Navigator>
);

export default MainRoutes;
