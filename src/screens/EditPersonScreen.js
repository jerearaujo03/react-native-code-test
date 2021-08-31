import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {updatePerson} from '../redux/people';
import PersonForm from '../components/PersonForm';

const EditPersonScreen = ({navigation, route}) => {
  const {id} = route.params;

  const dispatch = useDispatch();
  const pending = useSelector(state => state.people.pending);
  const person = useSelector(state =>
    state.people.people.find(person => person.id === id),
  );
  const {image, firstName, lastName, gender, birth, address} = person || {};

  useEffect(() => {
    if (!id) {
      navigation.goBack();
    }
  }, [id, navigation]);

  const handleUpdate = async ({
    image,
    firstName,
    lastName,
    gender,
    birth,
    address,
  }) => {
    await dispatch(
      updatePerson({
        id,
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
      <PersonForm
        onSubmit={handleUpdate}
        image={image}
        firstName={firstName}
        lastName={lastName}
        gender={gender}
        birth={birth}
        address={address}
        submitLabel="Update"
        pending={pending}
      />
    </ScrollView>
  );
};

export default EditPersonScreen;
