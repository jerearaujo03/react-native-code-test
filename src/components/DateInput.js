import React, {useState} from 'react';
import {Pressable, View} from 'react-native';
import {DateTimePickerModal} from 'react-native-modal-datetime-picker';
import TextInput from './TextInput';
import {DateTime} from 'luxon';

const DateInput = ({
  label,
  displayValue,
  value,
  placeholder,
  onValueChange,
  error,
}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    onValueChange(DateTime.fromJSDate(date).toISODate());
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
            error={error}
          />
        </View>
      </Pressable>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        date={value ? DateTime.fromISO(value).toJSDate() : new Date()}
      />
    </>
  );
};

export default DateInput;
