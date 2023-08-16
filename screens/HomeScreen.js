import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Screen from '../components/Screen';
import colors from '../config/colors';
import TeacherInfo from '../components/homescreen/TeacherInfo';
import HomeInfo from '../components/homescreen/HomeInfo';
import GradientBackground from '../components/GradientBackground';

export default function HomeScreen() {
  return (
    <Screen>
      <GradientBackground color1={colors.secondary} color2={colors.light} />
      <TeacherInfo />
      <View style={styles.container}>
        <HomeInfo label="Siguiente Clase" info="2° medio B" icon="clock" />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
