import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

import colors from '../utils/colors';
import {genders} from '../utils/utils';
import TextInput from '../components/TextInput';
import Spacer from '../components/Spacer';
import Picker from '../components/Picker';

const AddPersonScreen = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [gender, setGender] = useState();

  return (
    <ScrollView>
      <View style={styles.card}>
        <TextInput
          onTextChange={setFirstName}
          label="First Name"
          placeholder="John"
        />
        <Spacer />
        <TextInput
          onTextChange={setLastName}
          label="Last Name"
          placeholder="Smith"
        />
        <Spacer />
        <Picker
          onValueChange={setGender}
          items={genders}
          label="Gender"
          placeholder="Select your gender..."
        />
      </View>
    </ScrollView>
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
});

export default AddPersonScreen;
