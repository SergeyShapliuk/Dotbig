import React, {memo} from 'react';
import {StyleSheet, View, Text, Platform, TouchableOpacity} from 'react-native';
import {useAppNavigation} from '../types/types';
import MemoBackArrowSvg from './svg/BackArrowSvg';

const SimpleHeader = () => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.back}>
      <View style={styles.container}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 20,
          }}
          onPress={() => navigation.goBack()}>
          <MemoBackArrowSvg />
          <Text
            style={{
              fontSize: 16,
              color: '#646464',
              textAlign: 'center',
              marginLeft: 10,
            }}>
            Назад
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#17181B', width: '100%', height: 1.5}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // height: Platform.OS === 'ios' ? 70 : 60,
    paddingVertical: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#0B1633',
    flexDirection: 'row',
    borderBottomColor: '#17181B',
    alignItems: 'center',
    paddingLeft: 30,
    paddingTop: Platform.OS === 'ios' ? 30 : 30,
  },
  back: {
    backgroundColor: '#0B1633',
  },
});

export default memo(SimpleHeader);
