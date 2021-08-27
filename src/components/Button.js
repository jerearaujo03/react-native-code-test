import React from 'react';
import {ActivityIndicator, Pressable} from 'react-native';
import colors from '../utils/colors';
import Text from './Text';
import {StyleSheet} from 'react-native';

const Button = ({
  text,
  loading = false,
  disabled = false,
  onPress = () => {},
  ...rest
}) => {
  const handleButtonPress = () => {
    if (loading || disabled) {
      return;
    }
    onPress();
  };

  return (
    <Pressable
      style={({pressed}) => [
        {backgroundColor: pressed ? colors.primaryLight : colors.primary},
        disabled && {backgroundColor: colors.gray},
        styles.button,
      ]}
      onPress={handleButtonPress}
      {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colors.white} />
      ) : (
        <Text style={styles.buttonText}>{text}</Text>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    height: 45,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
