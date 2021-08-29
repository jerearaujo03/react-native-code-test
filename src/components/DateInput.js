import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';
import TextInput from './TextInput';

const DateInput = ({
  label,
  displayValue,
  value,
  placeholder,
  onValueChange,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    onValueChange(date);
    hideDatePicker();
  };

  return (
    <>
      <Pressable onPress={showDatePicker}>
        <View pointerEvents="none">
          <TextInput
            label={label}
            value={displayValue}
            placeholder={placeholder}
          />
        </View>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={value}
      />
    </>
  );
};

export default DateInput;