import React from 'react';
import Button from './Button';
import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const FAB = ({onPress, text}) => {
  return <Button style={styles.fab} text={text} onPress={onPress} />;
};

const styles = StyleSheet.create({
  fab: {
    bottom: 0,
    flex: 1,
    margin: 10,
    paddingHorizontal: 15,
    position: 'absolute',
    right: 0,

    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
});

export default FAB;
