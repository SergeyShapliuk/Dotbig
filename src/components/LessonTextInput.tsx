import React from 'react';
import {StyleSheet, Text, TextInput} from 'react-native';

type LessonTextInputProps = {
  input: string;
  placeholder: string;
  setInput: (value: string) => void;
  disabledChecked: boolean;
};
const LessonTextInput = ({
  input,
  placeholder,
  setInput,
  disabledChecked,
}: LessonTextInputProps) => {
  return (
    <>
      <TextInput
        value={input}
        onChangeText={value => setInput(value)}
        placeholder={placeholder}
        placeholderTextColor="#8A8C95"
        style={
          !disabledChecked || input.length > 0
            ? styles.textInput
            : styles.inValidInput
        }
        autoCapitalize="none"
        autoCorrect={false}
      />
      {disabledChecked && !input.length ? (
        <Text style={{color: '#E24D36'}}>
          Это поле обязательно к заполнению
        </Text>
      ) : (
        ''
      )}
    </>
  );
};
export default LessonTextInput;

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    // width: DEVICE_WIDTH - 60,
    // // marginHorizontal: 132,
    // // flexDirection: 'row',
    // // justifyContent: 'space-between',
    // // alignItems: 'flex-start',
    // alignSelf: 'center',
    marginTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#FCFCFD',
    color: '#8A8C95',
    fontFamily: 'Inter',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#E0E0E0',
  },
  inValidInput: {
    // marginHorizontal: 132,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'flex-start',
    marginTop: 20,
    paddingHorizontal: 15,
    height: 48,
    backgroundColor: '#FCFCFD',
    color: '#8A8C95',
    fontFamily: 'Inter',
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'red',
  },
});
