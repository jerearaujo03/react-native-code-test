import React from 'react';
import {View} from 'react-native';

const Spacer = ({vertical = 10}) => {
  return <View style={{marginVertical: vertical}} />;
};

export default Spacer;
