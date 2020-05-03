import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5, Entypo, MaterialCommunityIcons} from '@expo/vector-icons'

import Asteroid from '../../pages/Asteroid';
import MarsPhotos from '../../pages/MarsPhotos';
import Apod from '../../pages/Apod';

const Tab = createBottomTabNavigator();

const icons = {
  Asteroid: {
    lib: FontAwesome5,
    name: 'meteor'
  },

  Apod: {
    lib: Entypo,
    name: 'camera'
  },

  MarsPhotos: {
    lib: MaterialCommunityIcons,
    name: 'alien'
  },
}

export default function Menu() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size}) => {
          const { lib: Icon, name } =  icons[route.name];
          return <Icon name={name} size={size} color={color}/>
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: '#212121',
          borderTopColor: 'rgba(255, 255, 255, 0.2)'
        },
        activeTintColor: '#1351D8',
        inactiveTintColor: '#92929C'
      }}
    >
      <Tab.Screen 
        name="Asteroid" 
        component={Asteroid}
        options={{
          title: 'Asteróides'
        }}
      />
      <Tab.Screen 
        name="Apod" 
        component={Apod}
        options={{
          title: 'APOD'
        }}
      />
      <Tab.Screen 
        name="MarsPhotos" 
        component={MarsPhotos}
        options={{
          title: 'Marte'
        }}
      />
    </Tab.Navigator>
  );
}
