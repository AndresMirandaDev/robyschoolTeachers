import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import LottieView from 'lottie-react-native';
import AppText from '../components/AppText';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import GradientBackground from '../components/GradientBackground';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <GradientBackground color1={colors.primary} color2={colors.light} />
      <View style={styles.backgroundCircle}></View>
      <View style={styles.backgroundCircleBottom}></View>
      <View style={styles.animation}>
        <LottieView
          source={require('../assets/animations/animation_ll4gwq3k.json')}
          autoPlay
          loop
        />
      </View>

      <View style={styles.title}>
        <AppText style={styles.titleText}>RobySchool</AppText>
        <AppText style={styles.slogan}>Profesor</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="login"
          color="primary"
          //   onPress={() => navigation.navigate('login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
    flex: 1,
  },
  backgroundCircle: {
    backgroundColor: colors.lightBlue,
    height: 400,
    width: 400,
    position: 'absolute',
    top: -10,
    left: 100,
    borderRadius: 200,
  },
  backgroundCircleBottom: {
    backgroundColor: colors.secondary,
    height: 400,
    width: 400,
    position: 'absolute',
    top: 400,
    right: 100,
    borderRadius: 200,
  },

  buttonContainer: {
    flex: 1,
    width: '90%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: colors.primary,
  },
  slogan: {
    textAlign: 'center',
    color: colors.medium,
    fontWeight: 'bold',
  },
});
