import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{ backgroundColor: '#3498db', flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor="#3498db" />
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
