import * as React from 'react';
import {Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from './src/pages/Home';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const TabNavigation = () => {
  return (
    <Tab.Navigator 
      screenOptions={() => ({
        tabBarActiveTintColor: '#DB1E99',
        tabBarInactiveTintColor: '#000',
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
          title:'',
          headerStyle:{
            backgroundColor: '#f2f2f2'
          },
          headerRight: () => (
            <Text>Perfil</Text>
            ),
          headerLeft: () => (
            <Text>Logo</Text>
          ),
          headerShadowVisible: false,
          tabBarIcon: ({color})=> {
            return <AntDesign name={'home'} size={22} color={color}/>
          },
          tabBarLabel: 'Home'
          }} 
      />
      <Tab.Screen 
        name="Search" 
        component={Home} 
        options={{
          title:'',
          headerStyle:{
            backgroundColor: '#f2f2f2'
          },
          headerRight: () => (
            <Text>Perfil</Text>
            ),
          headerLeft: () => (
            <Text>Logo</Text>
          ),
          headerShadowVisible: false,
          tabBarIcon: ({color})=> {
            return <AntDesign name={'search1'} size={22} color={color}/>
          },
          tabBarLabel: 'Buscar'
          }} 
        />
    </Tab.Navigator>
  )
}

export function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={TabNavigation}
            options={{
              headerTransparent: false,
              title: '',
              headerShown: false,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
