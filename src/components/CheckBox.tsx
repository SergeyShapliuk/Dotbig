import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Checked from './svg/Checked';

type CheckBoxTxtType = {
  step: number;
  isDone?: boolean;
  onProgress: (taskNum: number, value: boolean) => void;
  input1?: string;
  input2?: string;
  input3?: string;
  setDisabledChecked?: (item: boolean) => void;
};
const CheckBoxTxt = ({
  step,
  isDone,
  input1,
  input2,
  input3,
  onProgress,
  setDisabledChecked,
}: CheckBoxTxtType) => {

  const validate = () => {
    if (step === 3 && !input1 && !input2 && !input3) {
      if (setDisabledChecked) {
        setDisabledChecked(true);
        return false;
      }
    }
    return true;
  };
  const onCheck = () => {
    if (!validate()) {
      return;
    }
    onProgress(step, true);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
        style={styles.btn}
        onPress={onCheck}
        disabled={isDone}>
        <LinearGradient
          colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          {!isDone ? (
            <View style={styles.unChecked} />
          ) : (
            <View style={styles.checked}>
              <Checked />
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>
      <Text
        style={
          isDone ? styles.checkText : [styles.checkText, {color: '#61646F'}]
        }>
        Готово
      </Text>
    </View>
  );
};
export default CheckBoxTxt;
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  btn: {
    marginHorizontal: 3,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  unChecked: {
    borderRadius: 3,
    backgroundColor: 'white',
    margin: 2,
    width: 20,
    height: 20,
  },
  checked: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    width: 20,
    height: 20,
  },
  checkText: {
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 27,
    color: '#9356A1',
  },
});
