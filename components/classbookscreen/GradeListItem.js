import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText';
import colors from '../../config/colors';
import AppForm from '../forms/AppForm';
import AppFormField from '../forms/AppFormField';
import GradientBackground from '../GradientBackground';

export default function GradeListItem({ student }) {
  return (
    <View style={styles.container}>
      <GradientBackground
        color1={colors.green}
        color2={colors.lightBlue}
        startX={1}
        endX={0.4}
        endY={1.8}
        startY={0.9}
      />
      <View style={styles.name}>
        <AppText style={styles.nameText}>{student.name}</AppText>
        <TouchableOpacity>
          <View style={styles.link}>
            <AppText style={styles.linkText}>Ver notas</AppText>

            <MaterialCommunityIcons
              name="chevron-right"
              size={20}
              color={colors.medium}
            />
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.formContainer}>
        <AppForm
          initialValues={{
            grade: '',
          }}
        >
          <AppFormField placeholder="Nota" keyboardType="numeric" />
        </AppForm>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  nameText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: colors.white,
    fontSize: 23,
  },
  link: {
    flexDirection: 'row',

    alignItems: 'center',
  },
  linkText: {
    color: colors.medium,
  },
  formContainer: {
    justifyContent: 'center',
    width: 80,
  },
});
