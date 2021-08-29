import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {DateTime} from 'luxon';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';

import colors from '../utils/colors';
import {genders} from '../utils/utils';
import picIcon from '../assets/images/pic-icon.png';

import TextInput from '../components/TextInput';
import Spacer from '../components/Spacer';
import Picker from '../components/Picker';
import DateInput from '../components/DateInput';
import AddressModalInput from '../components/AddressModalInput';
import Text from '../components/Text';
import Button from '../components/Button';
import {addPerson} from '../redux/people';

const AddPersonScreen = ({navigation}) => {
  const [image, setImage] = useState();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState();
  const [birth, setBirth] = useState();
  const [address, setAddress] = useState();

  const dispatch = useDispatch();

  const handleSave = async () => {
    // TODO validate required fields and submit
    await dispatch(
      addPerson({
        image,
        firstName,
        lastName,
        gender,
        birth: DateTime.fromJSDate(birth).toISODate(),
        address: address?.description,
      }),
    );
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View style={styles.card}>
        <ImagePicker value={image} onValueChange={setImage} />

        <TextInput
          onChangeText={setFirstName}
          label="First Name"
          placeholder="John"
        />
        <Spacer />
        <TextInput
          onChangeText={setLastName}
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
        <Spacer />
        <DateInput
          onValueChange={setBirth}
          displayValue={
            birth
              ? DateTime.fromJSDate(birth).toLocaleString(DateTime.DATE_FULL)
              : null
          }
          value={birth}
          label="Date of birth"
          placeholder="Select your date of birth..."
        />
        <Spacer />

        <AddressModalInput
          placeholder="493 9th AveNew York, NY 10018, EE. UU."
          onValueChange={setAddress}
          displayValue={address?.description || ''}
        />

        <Spacer vertical={20} />

        <Button text="Save" onPress={handleSave} />
      </View>
    </ScrollView>
  );
};

const ImagePicker = ({value, onValueChange}) => {
  const onImageSelectPress = () => {
    launchImageLibrary({mediaType: 'photo'}, data => {
      onValueChange(data.assets?.[0]?.uri);
    });
  };

  return (
    <View style={styles.imagePickerContainer}>
      <TouchableOpacity
        onPress={onImageSelectPress}
        style={styles.imagePickerUploadButton}>
        {value ? (
          <Image source={{uri: value}} style={styles.imagePickerImage} />
        ) : (
          <>
            <Image source={picIcon} style={styles.imagePickerIcon} />
            <Text style={styles.imagePickerText}>Select an image</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
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
  imagePickerContainer: {
    alignItems: 'center',
    flex: 0,
    height: 200,
  },
  imagePickerImage: {
    borderRadius: 100,
    height: 180,
    resizeMode: 'cover',
    width: 180,
  },
  imagePickerIcon: {
    height: 35,
    marginBottom: 10,
    tintColor: colors.white,
    width: 35,
  },
  imagePickerUploadButton: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    height: 180,
    justifyContent: 'center',
    padding: 10,
    width: 180,
  },
  imagePickerText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddPersonScreen;
