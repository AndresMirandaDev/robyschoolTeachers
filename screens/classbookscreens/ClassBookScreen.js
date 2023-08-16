import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import Screen from '../../components/Screen';
import colors from '../../config/colors';
import AppForm from '../../components/forms/AppForm';
import AppFormPicker from '../../components/forms/AppFormPicker';
import SubmitButton from '../../components/forms/SubmitButton';
import AppText from '../../components/AppText';
import GradeListItem from '../../components/classbookscreen/GradeListItem';
import GradientBackground from '../../components/GradientBackground';

const students = [
  { id: 1, name: 'Juan Lopez', grades: ['5,6', '6,1', '5,9'] },
  { id: 2, name: 'Mauricio Donoso', grades: ['4,6', '5,1', '4,9'] },
  { id: 3, name: 'Pedro Jimenez', grades: ['5,2', '6,0', '4,9'] },
  { id: 4, name: 'Valentina Ramirez', grades: ['4,6', '5,1', '5,9'] },
  { id: 5, name: 'Macarena Sanchez', grades: ['5,9', '6,5', '5,9'] },
  { id: 6, name: 'Rodrigo Cartagena', grades: ['5,4', '6,1', '5,2'] },
];

const evaluations = [
  { id: 1, name: 'Ecuaciones diferenciales', number: 1 },
  { id: 2, name: 'Trigonometría', number: 2 },
  { id: 3, name: 'Cálculo', number: 3 },
  { id: 4, name: 'Álgebra', number: 4 },
];

export default function ClassBookScreen() {
  const [number, setNumber] = useState('');

  const handleChange = ({ evaluation }) => {
    setNumber(evaluation.number);
  };

  return (
    <Screen>
      <View style={styles.container}>
        <GradientBackground color1={colors.primary} color2={colors.light} />

        <View style={styles.gradesContainer}>
          <View style={styles.studentName}>
            <AppText style={styles.studentNameText}>Alumnos</AppText>
            <View style={styles.evaluationContainer}>
              <AppText style={styles.evaluationNumber}>
                Evaluación número {number}
              </AppText>
              <View style={styles.pickerContainer}>
                <AppForm
                  initialValues={{
                    evaluation: '',
                  }}
                  onSubmit={handleChange}
                >
                  <AppFormPicker
                    placeholder={number}
                    items={evaluations}
                    name="evaluation"
                  />
                  <View>
                    <SubmitButton title="Ir" color="secondary" big={false} />
                  </View>
                </AppForm>
              </View>
            </View>
          </View>
          <View style={styles.gradesList}>
            <FlatList
              data={students}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => {
                return <GradeListItem student={item} />;
              }}
            />
          </View>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  evaluationContainer: {
    padding: 5,
    backgroundColor: colors.lightBlue,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  evaluationNumber: {
    color: colors.light,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 23,
  },
  gradesContainer: {
    flex: 1,
  },

  pickerContainer: {
    marginLeft: 10,
  },
  studentName: {
    marginTop: 5,
  },
  studentNameText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: colors.primary,
  },
});
