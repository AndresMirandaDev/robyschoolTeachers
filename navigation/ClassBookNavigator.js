import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ClassBookScreen from '../screens/classbookscreens/ClassBookScreen';
import SelectClassScreen from '../screens/classbookscreens/SelectClassScreen';

const Stack = createNativeStackNavigator();

const ClassBookNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="selectClass" component={SelectClassScreen} />
      <Stack.Screen name="classbookHome" component={ClassBookScreen} />
    </Stack.Navigator>
  );
};

export default ClassBookNavigator;
