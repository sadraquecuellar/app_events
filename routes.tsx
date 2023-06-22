import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { UserProfile } from './src/components/Header/UserProfile';
import { Logo } from './src/components/Header/Logo';

import { Home } from './src/pages/Home';
import { Search } from './src/pages/Search';
import { ListSearched } from './src/pages/ListSearched';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SearchStack = () =>{
  return (
    <Stack.Navigator initialRouteName='SearchStack'>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title:'',
          headerStyle:{
            backgroundColor: '#fff'
          },
          headerLeft: () => (
            <Logo/>
          ),
          headerRight: () => (
            <UserProfile/>
          ),
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="ListSearched"
        component={ListSearched}
        options={{
          title:'',
          headerShadowVisible: false,
          headerRight: () => (
            <UserProfile/>
          ),
          headerBackTitle: "Voltar",

        }}
      />
    </Stack.Navigator>
  )
}
const HomeStack = () =>{
  return (
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen
        name="HomeScreen" 
        component={Home} 
        options={{
          title:'',
          headerStyle:{
            backgroundColor: '#FFF'
          },
          headerLeft: () => (
            <Logo/>
          ),
          headerRight: () => (
            <UserProfile/>
            ),
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  )
}

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
        component={HomeStack} 
        options={{
          tabBarLabel: 'Home',
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({color})=> {
            return <AntDesign name={'home'} size={22} color={color}/>
          },
          }} 
      />
      <Tab.Screen 
        name="SearchStack" 
        component={SearchStack} 
        options={{
          tabBarLabel: 'Buscar',
          tabBarHideOnKeyboard: true,
          headerShown: false,
          tabBarIcon: ({color})=> {
            return <AntDesign name={'search1'} size={22} color={color}/>
          },
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
          name="HomeStack"
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
