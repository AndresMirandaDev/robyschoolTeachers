import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import AppText from '../AppText';
import colors from '../../config/colors';

export default function TeacherInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundDesign}></View>
      <View style={styles.animation}>
        <LottieView
          source={require('../../assets/animations/teacher.json')}
          autoPlay
          loop
          resizeMode="cover"
        />
      </View>
      <View>
        <AppText style={styles.name}>Claudia Alfaro</AppText>
        <AppText style={styles.classInfo}>Matematicas</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: 200,
    width: 200,
  },
  backgroundDesign: {
    height: 500,
    width: 500,
    borderRadius: 250,
    backgroundColor: colors.lightBlue,
    position: 'absolute',
    top: -200,
  },
  classInfo: {
    textAlign: 'center',
    color: colors.light,
  },
  container: {
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.light,
  },
});
