import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {Images} from '../assets/image';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../assets/image';
// import CheckBox from '@react-native-community/checkbox';

const CheckBoxTxt = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const onCheck = () => {
    setToggleCheckBox(!toggleCheckBox);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onCheck}>
        <LinearGradient
          colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
          start={{x: 0.0, y: 0.5}}
          end={{x: 1, y: 1}}
          style={styles.linearGradient}>
          {toggleCheckBox ? (
            <View style={styles.unChecked} />
          ) : (
            <View style={styles.checked}>
              <Image source={Images.iconChecked} style={{}} />
            </View>
          )}
        </LinearGradient>
      </TouchableOpacity>
      {/*<CheckBox*/}
      {/*  disabled={false}*/}
      {/*  onTintColor={'pink'}*/}
      {/*  onFillColor={'green'}*/}
      {/*  tintColor={'red'}*/}
      {/*  onCheckColor={'black'}*/}
      {/*  tintColors={{true: 'red', false: 'blue'}}*/}
      {/*  value={toggleCheckBox}*/}
      {/*  onValueChange={newValue => setToggleCheckBox(newValue)}*/}
      {/*  style={styles.checkBox}*/}
      {/*/>*/}
      <Text
        style={
          !toggleCheckBox
            ? styles.checkText
            : [styles.checkText, {color: '#61646F'}]
        }>
        Готово
      </Text>
    </View>
  );
};
export default CheckBoxTxt;
const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  btn: {
    marginHorizontal: 10,
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
