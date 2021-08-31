import React from 'react';
import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

import colors from '../utils/colors';
import picIcon from '../assets/images/pic-icon.png';
import Text from './Text';

const PersonImagePicker = ({value, onValueChange}) => {
  const onImageSelectPress = () => {
    launchImageLibrary({mediaType: 'photo'}, data => {
      onValueChange(data.assets?.[0]?.uri);
    });
  };

  return (
    <View style={styles.imagePickerContainer}>
      <TouchableOpacity
        onPress={onImageSelectPress}
        style={styles.imagePickerUploadButton}>
        {value ? (
          <Image source={{uri: value}} style={styles.imagePickerImage} />
        ) : (
          <>
            <Image source={picIcon} style={styles.imagePickerIcon} />
            <Text style={styles.imagePickerText}>Select an image</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePickerContainer: {
    alignItems: 'center',
    flex: 0,
    height: 200,
  },
  imagePickerImage: {
    borderRadius: 100,
    height: 180,
    resizeMode: 'cover',
    width: 180,
  },
  imagePickerIcon: {
    height: 35,
    marginBottom: 10,
    tintColor: colors.white,
    width: 35,
  },
  imagePickerUploadButton: {
    alignItems: 'center',
    backgroundColor: colors.lightGray,
    borderRadius: 100,
    height: 180,
    justifyContent: 'center',
    padding: 10,
    width: 180,
  },
  imagePickerText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PersonImagePicker;
