import React from 'react';
import {StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Text from './Text';
import colors from '../utils/colors';

const Picker = ({
  onValueChange,
  items,
  label,
  placeholder = 'Select an item...',
}) => {
  const placeholderObject = {
    label: placeholder,
    value: null,
    color: colors.gray,
  };
  return (
    <>
      <Text>{label}</Text>
      <RNPickerSelect
        onValueChange={onValueChange}
        items={items}
        textInputProps={styles.picker}
        useNativeAndroidPickerStyle={false}
        placeholder={placeholderObject}
      />
    </>
  );
};

const styles = StyleSheet.create({
  picker: {
    borderColor: colors.darkGray,
    borderRadius: 5,
    borderBottomWidth: 1,
    height: 40,
    paddingHorizontal: 5,
  },
});

export default Picker;
