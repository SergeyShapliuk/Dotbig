import React, {useRef, useState} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useLessonAppNavigation} from '../types/types';
import {useAppDispatch, useAppSelector} from '../store/store';
import {setBurgerList} from '../store/mainReducer';

type BurgerButtonPropsType = {
  activated?: boolean;
  onHandlerActivated?: (value: boolean) => void;
};
const BurgerButton = ({}: // activated,
// onHandlerActivated,
BurgerButtonPropsType) => {
  const dispatch = useAppDispatch();
  const navigation = useLessonAppNavigation();
  const [activated, setActivated] = useState(false);
  const burgerList = useAppSelector(state => state.mainReducer.burgerList);
  const animation = useRef(new Animated.Value(0)).current;
  const rotation = useRef(new Animated.Value(0)).current;
  console.log('burgerBUtton', burgerList);

  const startAnimation = () => {
    const toValue = activated ? 0 : 1;
    setActivated(!activated);
    Animated.parallel([
      Animated.timing(animation, {
        toValue,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.spring(rotation, {
        toValue,
        friction: 20,
        tension: 140,
        useNativeDriver: false,
      }),
    ]).start(() => {
      if (!activated) {
        navigation.navigate('Burger', {screen: 'Burgers'});
      }
      if (activated) {
        navigation.goBack();
      }
    });
  };
  const animatedStyles = {
    lower: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -4],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg'],
          }),
        },
      ],
    },
    upper: {
      transform: [
        {
          translateY: animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 4],
          }),
        },
        {
          rotate: rotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '-45deg'],
          }),
        },
      ],
    },
    middle: {
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [1.5, 0],
      }),
    },
    burgerButton: {
      backgroundColor: animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['#3C455C', '#3C455C'],
      }),
    },
  };

  return (
    <View>
      <TouchableOpacity onPress={startAnimation}>
        <Animated.View style={[styles.burger, animatedStyles.burgerButton]}>
          <Animated.View style={[styles.burgerLine, animatedStyles.upper]} />
          <Animated.View style={[styles.burgerLine, animatedStyles.middle]} />
          <Animated.View style={[styles.burgerLine, animatedStyles.lower]} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};
export default BurgerButton;

const styles = StyleSheet.create({
  burger: {
    width: 45,
    height: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 15,
    // marginHorizontal: 5,
    backgroundColor: '#3C455C',
    // zIndex: 1,
  },
  burgerLine: {
    width: 18,
    height: 2,
    margin: 1.5,
    backgroundColor: '#FFFFFF',
    // zIndex: 3,
  },
});
