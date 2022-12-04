import React, {useCallback} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Images} from '../assets/image';
import {useAppNavigation} from '../types/types';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';
import {useFocusEffect} from '@react-navigation/native';
import {setBurgerList} from '../store/authReducer';
import {useAppDispatch} from '../store/store';

const Bonus_4 = () => {
  const navigation = useAppNavigation();
  const dispatch = useAppDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(setBurgerList({value: true}));
      return () => {
        dispatch(setBurgerList({value: false}));
      };
    }, [dispatch]),
  );
  const onChangeHandler = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.imgButton}
          onPress={onChangeHandler}
          hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}>
          <Image source={Images.iconBack} style={styles.iconBack} />
        </TouchableOpacity>
        <Image
          source={Images.bonus4}
          style={{
            // marginTop: StatusBar.currentHeight,
            width: DEVICE_WIDTH,
            height: DEVICE_HEIGHT,
            resizeMode: 'stretch',
            zIndex: 3,
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Bonus_4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgButton: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: 22,
    height: 22,
    borderRadius: 50,
    backgroundColor: '#e0e0e1',
    // opacity: 0.15,
    resizeMode: 'contain',
    top: 25,
    right: 30,
    zIndex: 10,
  },
  iconBack: {
    color: '#FFFFFF',
    resizeMode: 'contain',
  },
});
