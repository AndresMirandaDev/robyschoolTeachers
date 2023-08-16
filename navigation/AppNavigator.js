import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';
import HomeNavigator from './HomeNavigator';

const Tab = createMaterialBottomTabNavigator();

function AppNavigator() {
  return (
    <Tab.Navigator
      activeColor={colors.primary}
      barStyle={{ backgroundColor: colors.secondary }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name="home"
              size={20}
              color={focused ? color : colors.light}
            />
          ),
          tabBarColor: colors.danger,
        }}
      />
    </Tab.Navigator>
  );
}

export default AppNavigator;
