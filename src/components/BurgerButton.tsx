import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {useAppNavigation} from '../types/types';
import {useAppSelector} from '../store/store';

type BurgerButtonPropsType = {
  activated?: boolean;
  onHandlerActivated?: (value: boolean) => void;
};
const BurgerButton = ({}: // activated,
// onHandlerActivated,
BurgerButtonPropsType) => {
  const navigation = useAppNavigation();
  const burgerList = useAppSelector(state => state.authReducer.burgerList);
  // const animation = useRef(new Animated.Value(0)).current;
  // const rotation = useRef(new Animated.Value(0)).current;
  console.log('burgerBUtton', burgerList);

  const onChangeHandler = () => {
    navigation.navigate('Burger');
    if (burgerList) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.burger}>
      <TouchableOpacity
        hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
        onPress={onChangeHandler}>
        {/*<Animated.View style={[styles.burger, animatedStyles.burgerButton]}>*/}
        {/*  <Animated.View style={[styles.burgerLine, animatedStyles.upper]} />*/}
        {/*  <Animated.View style={[styles.burgerLine, animatedStyles.middle]} />*/}
        {/*  <Animated.View style={[styles.burgerLine, animatedStyles.lower]} />*/}
        {/*</Animated.View>*/}
        {!burgerList && (
          <View>
            <View style={styles.burgerLine} />
            <View style={styles.burgerLine} />
            <View style={styles.burgerLine} />
          </View>
        )}
        {burgerList && (
          <View>
            <View
              style={[
                styles.burgerLine,
                {
                  transform: [
                    {rotate: '45deg'},
                    {translateY: 2},
                    {translateX: 1.5},
                  ],
                },
              ]}
            />
            <View
              style={[
                styles.burgerLine,
                {
                  transform: [
                    {rotate: '-45deg'},
                    {translateY: -2},
                    {translateX: 1.5},
                  ],
                },
              ]}
            />
          </View>
        )}
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
