import React, {useState} from 'react';
import {TextInput as RNTextInput, StyleSheet} from 'react-native';
import Text from './Text';
import colors from '../utils/colors';

const TextInput = ({label = '', error = false, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
      <Text>{label}</Text>
      <RNTextInput
        style={[
          styles.textInput,
          error && {borderColor: colors.red, color: colors.red},
          isFocused && {borderColor: colors.primary},
        ]}
        placeholderTextColor={colors.lightGray}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...rest}
      />
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderColor: colors.darkGray,
    borderRadius: 5,
    borderBottomWidth: 1,
    height: 40,
    paddingHorizontal: 5,
  },
});

export default TextInput;
