import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './src/pages/Home';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{
            title:'',
            headerStyle:{
              backgroundColor: '#f2f2f2'
            }
            // headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
