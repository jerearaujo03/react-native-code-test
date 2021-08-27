import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';

import {signOut} from '../redux/auth';

import Text from '../components/Text';
import {StyleSheet} from 'react-native';
import colors from '../utils/colors';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.signOutContainer}
          onPress={() => dispatch(signOut())}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      ),
    });
  }, [dispatch, navigation]);
  return <Text>Home</Text>;
};

const styles = StyleSheet.create({
  signOutContainer: {
    margin: 5,
  },
  signOutText: {
    color: colors.primary,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
