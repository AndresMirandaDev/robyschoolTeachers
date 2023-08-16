import React from 'react';
import AppButton from '../AppButton';
import { useFormikContext } from 'formik';
import { Button } from 'react-native';

export default function SubmitButton({ title, color, big = true }) {
  const { handleSubmit } = useFormikContext();
  return big ? (
    <AppButton color={color} title={title} onPress={handleSubmit} />
  ) : (
    <Button title={title} onPress={handleSubmit} />
  );
}
