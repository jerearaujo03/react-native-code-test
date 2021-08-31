import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DateTime} from 'luxon';
import {Formik} from 'formik';
import * as yup from 'yup';

import {genders} from '../utils/utils';
import colors from '../utils/colors';

import Button from './Button';
import Spacer from './Spacer';
import AddressModalInput from './AddressModalInput';
import DateInput from './DateInput';
import Picker from './Picker';
import TextInput from './TextInput';
import PersonImagePicker from './PersonImagePicker';
import Text from './Text';

const schema = yup.object().shape({
  firstName: yup.string().required().label('First Name'),
  lastName: yup.string().required().label('Last Name'),
  gender: yup.string().required().label('Gender'),
  birth: yup.string().required().label('Date of birth'),
  address: yup
    .object()
    .shape({description: yup.string().required().label('Address')}),
});

const PersonForm = ({
  submitLabel = 'Save',
  image = '',
  firstName = '',
  lastName = '',
  gender = '',
  birth = '',
  address = {},
  onSubmit,
  pending,
}) => {
  return (
    <Formik
      initialValues={{
        image,
        firstName,
        lastName,
        gender,
        birth,
        address,
      }}
      validationSchema={schema}
      onSubmit={onSubmit}>
      {({
        handleChange,
        setFieldValue,
        handleSubmit,
        submitCount,
        values,
        errors,
      }) => {
        const showErrors = submitCount > 0;
        return (
          <View style={styles.card}>
            <PersonImagePicker
              value={values.image}
              onValueChange={handleChange('image')}
            />

            <TextInput
              onChangeText={handleChange('firstName')}
              label="First Name"
              placeholder="John"
              defaultValue={values.firstName}
              error={showErrors && errors.firstName}
            />
            {showErrors && errors.firstName && (
              <Text style={styles.errorText}>{errors.firstName}</Text>
            )}

            <Spacer />
            <TextInput
              onChangeText={handleChange('lastName')}
              label="Last Name"
              placeholder="Smith"
              defaultValue={values.lastName}
              error={showErrors && errors.firstName}
            />
            {showErrors && errors.lastName && (
              <Text style={styles.errorText}>{errors.lastName}</Text>
            )}

            <Spacer />
            <Picker
              onValueChange={handleChange('gender')}
              items={genders}
              label="Gender"
              placeholder="Select your gender..."
              value={values.gender}
              error={showErrors && errors.gender}
            />
            {showErrors && errors.gender && (
              <Text style={styles.errorText}>{errors.gender}</Text>
            )}

            <Spacer />
            <DateInput
              onValueChange={handleChange('birth')}
              displayValue={
                values.birth
                  ? DateTime.fromISO(values.birth).toLocaleString(
                      DateTime.DATE_FULL,
                    )
                  : null
              }
              value={values.birth}
              label="Date of birth"
              placeholder="Select your date of birth..."
              error={showErrors && errors.birth}
            />
            {showErrors && errors.birth && (
              <Text style={styles.errorText}>{errors.birth}</Text>
            )}

            <Spacer />
            <AddressModalInput
              placeholder="493 9th AveNew York, NY 10018, EE. UU."
              onValueChange={address => setFieldValue('address', address)}
              displayValue={values.address?.description || ''}
              error={showErrors && errors.address?.description}
            />
            {showErrors && errors.address?.description && (
              <Text style={styles.errorText}>
                {errors.address?.description}
              </Text>
            )}

            <Spacer vertical={20} />

            <Button
              text={submitLabel}
              onPress={handleSubmit}
              loading={pending}
            />
          </View>
        );
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 15,
    padding: 20,
    margin: 15,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  errorText: {
    color: colors.red,
    fontSize: 13,
    marginTop: 3,
  },
});

export default PersonForm;
