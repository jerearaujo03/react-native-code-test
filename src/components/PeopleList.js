import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getGenderLabel} from '../utils/utils';

import deleteIcon from '../assets/images/delete-icon.png';
import editIcon from '../assets/images/edit-icon.png';

import Text from './Text';
import {DateTime} from 'luxon';
import colors from '../utils/colors';
import Spacer from './Spacer';
import {deletePerson} from '../redux/people';

const PeopleList = () => {
  const dispatch = useDispatch();
  const people = useSelector(state => state.people.people);

  const handleDelete = personId => {
    dispatch(deletePerson(personId));
  };

  const handleEdit = personId => {
    alert(`editing ${personId}`);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({item: person}) => (
          <Person person={person} onDelete={handleDelete} onEdit={handleEdit} />
        )}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>People List</Text>
            <Spacer />
          </>
        }
        ListEmptyComponent={<Text>No people yet!</Text>}
      />
    </View>
  );
};

const Person = ({person, onDelete, onEdit}) => {
  const genderLabel = getGenderLabel(person.gender);
  const birthLabel = person.birth
    ? DateTime.fromISO(person.birth).toLocaleString(DateTime.DATE_FULL)
    : '';

  return (
    <View style={styles.personContainer}>
      <Image source={{uri: person.image}} style={styles.personImage} />
      <View style={styles.personInfo}>
        <Text style={styles.personName}>
          <Text>{person.firstName}</Text>
          <Text> {person.lastName}</Text>
        </Text>
        <Text>{genderLabel}</Text>
        <Text>{birthLabel}</Text>
        <Text>{person.address}</Text>
      </View>
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity onPress={() => onEdit(person.id)}>
          <Image source={editIcon} style={styles.editPersonIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(person.id)}>
          <Image source={deleteIcon} style={styles.deletePersonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    flex: 0,
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
  },
  deletePersonIcon: {
    height: 25,
    tintColor: colors.red,
    width: 25,
  },
  editPersonIcon: {
    height: 25,
    width: 25,
  },
  personContainer: {
    borderRadius: 5,
    backgroundColor: colors.white,
    flexDirection: 'row',
    marginVertical: 7,
    padding: 10,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  personImage: {
    borderRadius: 100,
    height: 70,
    resizeMode: 'cover',
    width: 70,
  },
  personInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  personName: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
});

export default PeopleList;
