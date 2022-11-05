import React, {useCallback, useState} from 'react';
import {
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from '../common/deviceInfo';
import {useAppNavigation} from '../types/types';
// import {DEVICE_WIDTH} from '../constans/constants';
import LinearGradient from 'react-native-linear-gradient';


const wait = (timeout: any) => {
  // @ts-ignore
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const BottomTab = () => {
  const navigation = useAppNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  const next = () => {
    navigation.navigate('Lesson_2');
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 0}}>
        <View />
      </ScrollView>
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={navigation.goBack}>
          <LinearGradient
            colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.linearGradient}>
            <View style={styles.btnBack}>
              <Text style={styles.btnBackText}>Предыдущий урок</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.btnBroker}>
            <Text style={styles.btnBrokerText}>Кабинет брокера</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={next}>
          <LinearGradient
            colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
            start={{x: 0.0, y: 1.0}}
            end={{x: 1.0, y: 1.0}}
            style={styles.linearGradient}>
            <View style={styles.btnNext}>
              <Text style={styles.btnNextText}>Следующий урок</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  tabContainer: {
    // position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // alignSelf: 'flex-end',
    // width: DEVICE_WIDTH,
    height: 80,
    bottom: 0,
    backgroundColor: '#0B1633',
  },
  linearGradient: {
    // // alignItems: 'center',
    // justifyContent: 'flex-start',
    borderRadius: 7,
  },
  btnBackText: {
    color: '#FFFFFF',
    // paddingHorizontal: 8,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 12,
    textAlign: 'center',
    marginBottom: 2,
  },
  btnBack: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#0B1633',
    margin: 2,
  },
  btnBrokerText: {
    textAlign: 'center',
    color: '#C9CFDF',
  },
  btnBroker: {
    width: 80,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#909CA9',
  },
  btnNextText: {
    color: '#FFFFFF',
    // paddingHorizontal: 8,
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 11,
    lineHeight: 12,
    textAlign: 'center',
    marginBottom: 2,
  },
  btnNext: {
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#0B1633',
    margin: 2,
  },
});
