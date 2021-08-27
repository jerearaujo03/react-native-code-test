import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';

const ScreenContainer = ({padding = 10, style = {}, children, ...rest}) => {
  return (
    <SafeAreaView style={styles.flex}>
      <View style={[styles.flex, {padding}, style]} {...rest}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});

export default ScreenContainer;
