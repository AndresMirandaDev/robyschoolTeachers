import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

import Screen from '../../components/Screen';
import GradientBackground from '../../components/GradientBackground';
import colors from '../../config/colors';
import AppForm from '../../components/forms/AppForm';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/forms/SubmitButton';

const classes = [
  { id: 1, name: 'Primero Medio A' },
  { id: 2, name: 'Primero Medio B' },
  { id: 3, name: 'Primero Medio C' },
  { id: 4, name: 'Segundo Medio A' },
  { id: 5, name: 'Segundo Medio B' },
  { id: 6, name: 'Segundo Medio C' },
  { id: 7, name: 'Tercero Medio A' },
  { id: 8, name: 'Tercero Medio B' },
  { id: 9, name: 'Tercero Medio C' },
  { id: 10, name: 'Cuarto Medio A' },
  { id: 11, name: 'Cuarto Medio B' },
  { id: 12, name: 'Cuarto Medio C' },
];

export default function SelectClassScreen({ navigation }) {
  return (
    <Screen>
      <View style={styles.container}>
        <GradientBackground color1={colors.secondary} color2={colors.light} />
        <View style={styles.formContainer}>
          <AppForm
            initialValues={{
              class: '',
            }}
            onSubmit={() => {
              navigation.navigate('classbookHome');
            }}
          >
            <AppFormPicker
              items={classes}
              icon="google-classroom"
              placeholder="Escoga un curso"
            />
            <View style={styles.buttonContainer}>
              <SubmitButton title="Ir a libro" />
            </View>
          </AppForm>
        </View>
        <View style={styles.animation}>
          <LottieView
            source={require('../../assets/animations/class.json')}
            loop
            autoPlay
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  animation: {
    height: '90%',
    width: '90%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  formContainer: {
    top: 100,
    flex: 1,
  },
});
