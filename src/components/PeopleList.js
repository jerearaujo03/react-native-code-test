import React from 'react';
import {View, StyleSheet} from 'react-native';
import Text from './Text';

const PeopleList = () => {
  return (
    <View style={styles.container}>
      <Text>PeopleList</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PeopleList;
