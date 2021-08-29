import React, {useState, useRef, useEffect} from 'react';
import {
  Pressable,
  View,
  Modal,
  SafeAreaView,
  Image,
  StyleSheet,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import colors from '../utils/colors';
import closeIcon from '../assets/images/close-icon.png';
import TextInput from './TextInput';
import Text from './Text';

// TODO move to env file
const GOOGLE_PLACES_API_KEY = 'AIzaSyBdcSdtTT4OAst0cFvflrXV4Jv4n_mj0_A';

const AddressModalInput = ({
  label = 'Address',
  placeholder,
  onValueChange,
  displayValue,
}) => {
  const [addressModalVisible, setAddressModalVisible] = useState(false);
  const googlePlacesAutocompleteInput = useRef();

  const showAddressPickerModal = () => {
    setAddressModalVisible(true);
  };

  const hideAddressPickerModal = () => {
    setAddressModalVisible(false);
  };

  useEffect(() => {
    if (addressModalVisible === true) {
      googlePlacesAutocompleteInput.current?.focus();
    }
  }, [addressModalVisible]);

  return (
    <>
      <Pressable onPress={showAddressPickerModal}>
        <View pointerEvents="none">
          <TextInput
            label={label}
            placeholder={placeholder}
            value={displayValue}
            selection={{start: 0}} // fix android, show overflowing text from the start
          />
        </View>
      </Pressable>

      <Modal
        animationType="slide"
        transparent={false}
        visible={addressModalVisible}
        onRequestClose={hideAddressPickerModal}>
        <SafeAreaView style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{label}</Text>
            <Pressable onPress={hideAddressPickerModal}>
              <Image source={closeIcon} style={styles.modalCloseButtonImage} />
            </Pressable>
          </View>
          <View style={styles.flex}>
            <GooglePlacesAutocomplete
              ref={googlePlacesAutocompleteInput}
              keepResultsAfterBlur
              placeholder="Search"
              onPress={data => {
                onValueChange(data);
                hideAddressPickerModal();
              }}
              query={{
                key: GOOGLE_PLACES_API_KEY,
                language: 'en',
              }}
              listViewDisplayed={false}
              styles={{
                textInput: {
                  borderColor: colors.darkGray,
                  borderRadius: 5,
                  borderBottomWidth: 1,
                  height: 40,
                  paddingHorizontal: 5,
                },
                container: {
                  flex: 1,
                  elevation: 10,
                },
              }}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  modalHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  modalCloseButtonImage: {
    height: 25,
    width: 25,
  },
  modalContent: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AddressModalInput;
