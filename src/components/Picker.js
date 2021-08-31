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
  value,
  error = false,
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
        onValueChange={v => onValueChange(v || '')}
        items={items}
        textInputProps={
          error ? {...styles.picker, borderColor: colors.red} : styles.picker
        }
        useNativeAndroidPickerStyle={false}
        placeholder={placeholderObject}
        value={value}
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
  pickerError: {
    borderColor: colors.red,
    borderRadius: 5,
    borderBottomWidth: 1,
    height: 40,
    paddingHorizontal: 5,
  },
});

export default Picker;
