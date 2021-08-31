import React from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {addPerson} from '../redux/people';
import PersonForm from '../components/PersonForm';

const AddPersonScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const pending = useSelector(state => state.people.pending);

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
      <PersonForm onSubmit={handleSave} pending={pending} />
    </ScrollView>
  );
};

export default AddPersonScreen;
