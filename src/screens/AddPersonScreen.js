import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch} from 'react-redux';

import {addPerson} from '../redux/people';
import PersonForm from '../components/PersonForm';

const AddPersonScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const handleSave = async ({
    image,
    firstName,
    lastName,
    gender,
    birth,
    address,
  }) => {
    await dispatch(
      addPerson({
        image,
        firstName,
        lastName,
        gender,
        birth,
        address,
      }),
    );
    navigation.goBack();
  };

  return (
    <ScrollView>
      <PersonForm onSubmit={handleSave} />
    </ScrollView>
  );
};

export default AddPersonScreen;
