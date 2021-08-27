import React from 'react';
import {Text as RNText} from 'react-native';
import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const Text = ({children, style, ...rest}) => {
  return <RNText style={[styles.text, style && {...style}]}>{children}</RNText>;
};

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 15,
  },
});

export default Text;
