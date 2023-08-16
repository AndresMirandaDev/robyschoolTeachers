import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBackground({
  color1,
  color2,
  startX = 1,
  startY = 1.2,
  endX = 0.9,
  endY = 0.6,
}) {
  return (
    <LinearGradient
      colors={[color1, color2]}
      start={{ x: startX, y: startY }}
      end={{ x: endX, y: endY }}
      style={styles.background}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});
