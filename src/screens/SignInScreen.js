import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {signIn} from '../redux/auth';

import colors from '../utils/colors';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Spacer from '../components/Spacer';
import Text from '../components/Text';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const {error, pending} = useSelector(state => state.auth);

  const submitEnabled = !(username.length > 0 && password.length > 0);

  const handleSignIn = () => {
    dispatch(signIn(username, password));
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        placeholder="johnsmith"
        label="Username"
        autoCapitalize="none"
        onChangeText={setUsername}
      />
      <Spacer />
      <TextInput
        placeholder="johnsmith"
        label="Password"
        autoCapitalize="none"
        secureTextEntry
        onChangeText={setPassword}
      />
      <Spacer />
      <View style={styles.errorContainer}>
        {!!error && <Text style={styles.errorText}>{error}</Text>}
      </View>
      <Spacer />
      <Button
        text="Sign in"
        onPress={handleSignIn}
        disabled={submitEnabled}
        loading={pending}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  errorContainer: {
    justifyContent: 'center',
    minHeight: 50,
  },
  errorText: {
    color: colors.red,
    fontSize: 14,
    textAlign: 'center',
  },
});

export default SignInScreen;
