import React, {useCallback, useState} from 'react';
import {
  Image,
  Platform,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {DEVICE_HEIGHT, DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import {useAppNavigation} from '../types/types';
import {message} from '../config/translations/resources/en';
import {getStatusBarHeight} from '../common/deviceInfo';

const wait = (timeout: any) => {
  // @ts-ignore
  return new Promise(resolve => setTimeout(resolve, timeout));
};

const Home = () => {
  const navigation = useAppNavigation();
  const [refreshing, setRefreshing] = useState(false);
  // const onRefresh = async () => {
  //   setRefreshing({
  //     refreshing: true,
  //     loading1: true,
  //     loading2: true,
  //     loading3: true,
  //     loading4: true,
  //   });
  //   await this.onGetData();
  //   this.setState({refreshing: false});
  // };
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 150}}>
        <Image source={Images.bannerHome} style={styles.imgBanner} />
        <View style={styles.header}>
          <Image source={Images.iconHome} style={styles.iconHome} />
          {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={Images.iconSearch} style={styles.iconHeader} />
              <Image
                source={Images.iconNotification}
                style={styles.iconHeader}
              />
            </View> */}
          {/*{!user?.token && (*/}
          <View style={styles.loginRegister}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={styles.loginRegisterText}>{message.login}</Text>
            </TouchableOpacity>
            <Text style={styles.loginRegisterIcon}>|</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('RegisterScreen')}>
              <Text style={styles.loginRegisterText}>{message.register}</Text>
            </TouchableOpacity>
          </View>
          {/*// )}*/}
        </View>

        {/*{user?.token && (*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      paddingHorizontal: 16,*/}
        {/*      marginTop: 16,*/}
        {/*    }}>*/}
        {/*    <TouchableOpacity*/}
        {/*      onPress={() => navigation.navigate('ProfileStackScreen')}*/}
        {/*      style={{flexDirection: 'row'}}>*/}
        {/*      <Image*/}
        {/*        style={styles.avatar}*/}
        {/*        source={{*/}
        {/*          uri:*/}
        {/*            user?.info?.avatar_url ||*/}
        {/*            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjCj43UJiVu-3Qp9b5yj-SwLGR-kndCzqLaiMv5SMkITd4CcbQQ7vX_CEZd-xxqka8ZM&usqp=CAU',*/}
        {/*        }}*/}
        {/*      />*/}
        {/*      <View style={{marginLeft: 15}}>*/}
        {/*        <Text style={styles.fullname}>{user?.info?.name}</Text>*/}
        {/*        <Text style={styles.email}>{user?.info?.email}</Text>*/}
        {/*      </View>*/}
        {/*    </TouchableOpacity>*/}
        {/*  </View>*/}
        {/*)}*/}

        {/*{user?.token && dataOverview?.id && (*/}
        {/*  <View style={styles.overview}>*/}
        {/*    <Text style={styles.overTitle}>{t('home.overview.title')}</Text>*/}
        {/*    <View*/}
        {/*      style={{*/}
        {/*        flexDirection: 'row',*/}
        {/*        alignItems: 'center',*/}
        {/*        marginTop: 16,*/}
        {/*      }}>*/}
        {/*      <ProgressCircle*/}
        {/*        widthX={77}*/}
        {/*        progress={*/}
        {/*          Math.round(dataOverview.course_data?.result?.result) / 100*/}
        {/*        }*/}
        {/*        strokeWidth={8}*/}
        {/*        backgroundColor="#F6F6F6"*/}
        {/*        progressColor="#958CFF"*/}
        {/*      />*/}
        {/*      <View style={{marginLeft: 24}}>*/}
        {/*        <View style={styles.viewItem}>*/}
        {/*          <Image source={Images.iconLession} style={styles.iconItem} />*/}
        {/*          <View>*/}
        {/*            <Text style={styles.txtItem}>{t('lesson')}</Text>*/}
        {/*            <View style={styles.line}>*/}
        {/*              <View*/}
        {/*                style={[*/}
        {/*                  styles.progress,*/}
        {/*                  {*/}
        {/*                    width: `${*/}
        {/*                      (dataOverview.course_data?.result?.items?.lesson*/}
        {/*                        ?.completed /*/}
        {/*                        dataOverview.course_data?.result?.items?.lesson*/}
        {/*                          ?.total) **/}
        {/*                      100*/}
        {/*                    }%`,*/}
        {/*                    backgroundColor: '#FFD336',*/}
        {/*                  },*/}
        {/*                ]}*/}
        {/*              />*/}
        {/*            </View>*/}
        {/*          </View>*/}
        {/*        </View>*/}
        {/*        <View style={styles.viewItem}>*/}
        {/*          <Image source={Images.iconQuiz} style={styles.iconItem} />*/}
        {/*          <View>*/}
        {/*            <Text style={styles.txtItem}>{t('quiz')}</Text>*/}
        {/*            <View style={styles.line}>*/}
        {/*              <View*/}
        {/*                style={[*/}
        {/*                  styles.progress,*/}
        {/*                  {*/}
        {/*                    width: `${*/}
        {/*                      (dataOverview.course_data?.result?.items?.quiz*/}
        {/*                        ?.completed /*/}
        {/*                        dataOverview.course_data?.result?.items?.quiz*/}
        {/*                          ?.total) **/}
        {/*                      100*/}
        {/*                    }%`,*/}
        {/*                    backgroundColor: '#41DBD2',*/}
        {/*                  },*/}
        {/*                ]}*/}
        {/*              />*/}
        {/*            </View>*/}
        {/*          </View>*/}
        {/*        </View>*/}

        {/*        {dataOverview.course_data?.result?.items?.assignment?.total >*/}
        {/*          0 && (*/}
        {/*          <View style={styles.viewItem}>*/}
        {/*            <Image*/}
        {/*              source={Images.iconAssignment}*/}
        {/*              style={styles.iconItem}*/}
        {/*            />*/}
        {/*            <View>*/}
        {/*              <Text style={styles.txtItem}>{t('assignment')}</Text>*/}
        {/*              <View style={styles.line}>*/}
        {/*                <View*/}
        {/*                  style={[*/}
        {/*                    styles.progress,*/}
        {/*                    {*/}
        {/*                      width: `${*/}
        {/*                        (dataOverview.course_data?.result?.items*/}
        {/*                          ?.assignment?.completed /*/}
        {/*                          dataOverview.course_data?.result?.items*/}
        {/*                            ?.assignment?.total) **/}
        {/*                        100*/}
        {/*                      }%`,*/}
        {/*                      backgroundColor: '#958CFF',*/}
        {/*                    },*/}
        {/*                  ]}*/}
        {/*                />*/}
        {/*              </View>*/}
        {/*            </View>*/}
        {/*          </View>*/}
        {/*        )}*/}
        {/*      </View>*/}
        {/*    </View>*/}
        {/*    <TouchableOpacity*/}
        {/*      onPress={() =>*/}
        {/*        navigation.navigate('CoursesDetailsScreen', {*/}
        {/*          id: dataOverview.id,*/}
        {/*        })*/}
        {/*      }*/}
        {/*      style={styles.container}>*/}
        {/*      <Text*/}
        {/*        numberOfLines={1}*/}
        {/*        style={[styles.overTitle, {marginTop: 30}]}>*/}
        {/*        {dataOverview?.name}*/}
        {/*      </Text>*/}
        {/*      <Text style={styles.txt1}>*/}
        {/*        {dataOverview?.sections.length}{' '}*/}
        {/*        {dataOverview?.sections.length > 1*/}
        {/*          ? t('home.overview.sections').toUpperCase()*/}
        {/*          : t('home.overview.section').toUpperCase()}*/}
        {/*      </Text>*/}
        {/*    </TouchableOpacity>*/}
        {/*  </View>*/}
        {/*)}*/}
        {/*<View style={styles.viewList}>*/}
        {/*  <View*/}
        {/*    style={{*/}
        {/*      flexDirection: 'row',*/}
        {/*      alignItems: 'center',*/}
        {/*      justifyContent: 'space-between',*/}
        {/*      marginRight: 15,*/}
        {/*    }}>*/}
        {/*    <Text style={styles.titleList}>{t('home.category')}</Text>*/}
        {/*  </View>*/}
        {/*  {dataCate.length > 0 && (*/}
        {/*    <LearnToday*/}
        {/*      navigation={navigation}*/}
        {/*      contentContainerStyle={{paddingHorizontal: 16}}*/}
        {/*      data={dataCate}*/}
        {/*      horizontal*/}
        {/*    />*/}
        {/*  )}*/}
        {/*  {loading1 && <LazyLoading visible={loading1} horizontal />}*/}
        {/*</View>*/}

        {/*{topCourseWithStudent.length > 0 && (*/}
        {/*  <View style={styles.viewList}>*/}
        {/*    <Text style={styles.titleList}>{t('home.popular')}</Text>*/}
        {/*    <PopularCourses*/}
        {/*      navigation={navigation}*/}
        {/*      contentContainerStyle={{paddingHorizontal: 16}}*/}
        {/*      data={topCourseWithStudent}*/}
        {/*      horizontal*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*)}*/}
        {/*{loading2 && (*/}
        {/*  <View style={styles.viewList}>*/}
        {/*    <Text style={styles.titleList}>{t('home.popular')}</Text>*/}
        {/*    <LazyLoading visible={loading2} horizontal />*/}
        {/*  </View>*/}
        {/*)}*/}
        {/*{dataNewCourse.length > 0 && (*/}
        {/*  <View style={styles.viewList}>*/}
        {/*    <Text style={styles.titleList}>{t('home.new')}</Text>*/}
        {/*    <PopularCourses*/}
        {/*      navigation={navigation}*/}
        {/*      contentContainerStyle={{paddingHorizontal: 16}}*/}
        {/*      data={dataNewCourse}*/}
        {/*      horizontal*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*)}*/}
        {/*{loading3 && (*/}
        {/*  <View style={styles.viewList}>*/}
        {/*    <Text style={styles.titleList}>{t('home.new')}</Text>*/}
        {/*    <LazyLoading visible={loading3} horizontal />*/}
        {/*  </View>*/}
        {/*)}*/}
        {/* <View style={styles.viewList}>
            <Text style={styles.titleList}>Upcoming Courses</Text>
            <UpcomingCourses
              navigation={navigation}
              contentContainerStyle={{ paddingHorizontal: 16 }}
              data={dataUpcomimg}
              horizontal
            />
          </View> */}
        {/*{dataInstructor && dataInstructor.length > 0 && (*/}
        {/*  <View style={styles.viewList}>*/}
        {/*    <Text style={[styles.titleList, {marginBottom: 8}]}>*/}
        {/*      {t('instructor')}*/}
        {/*    </Text>*/}

        {/*    <Instructor*/}
        {/*      navigation={navigation}*/}
        {/*      contentContainerStyle={{*/}
        {/*        paddingHorizontal: 16,*/}
        {/*        paddingVertical: 16,*/}
        {/*      }}*/}
        {/*      data={dataInstructor}*/}
        {/*      horizontal*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*)}*/}
        {/*{loading4 && (*/}
        {/*  <View style={styles.viewList}>*/}
        {/*    <Text style={[styles.titleList, {marginBottom: 8}]}>*/}
        {/*      {t('instructor')}*/}
        {/*    </Text>*/}
        {/*    <LazyLoading visible={loading4} horizontal />*/}
        {/*  </View>*/}
        {/*)}*/}
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0B1633',
    paddingTop: Platform.OS !== 'ios' ? getStatusBarHeight(0) : 0,
  },
  header: {
    height: 66,
    paddingTop: Platform.OS === 'ios' ? getStatusBarHeight(0) : 0,
    marginTop: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imgBanner: {
    width: DEVICE_WIDTH,
    height: (198 / 375) * DEVICE_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    top: -20,
    zIndex: -1,
  },
  iconHome: {
    width: 115,
    height: 30,
    resizeMode: 'contain',
  },
  iconHeader: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  imgBottom: {
    width: DEVICE_WIDTH,
    height: (440 / 1500) * DEVICE_WIDTH,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textBottom: {
    marginTop: 40,
    fontSize: 14,
    color: '#fff',
    fontFamily: 'Sniglet-Regular',
    fontWeight: '400',
  },
  logo: {
    height: (98 / 375) * DEVICE_WIDTH,
    width: (73 / 375) * DEVICE_WIDTH,
    resizeMode: 'contain',
    // position: "absolute",
  },
  viewLogo: {
    alignSelf: 'center',
    zIndex: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '400',
    fontFamily: 'Sniglet-Regular',
  },
  containerImg: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    fontSize: 15,
    color: '#000',
  },
  textInput: {
    flex: 1,
    color: '#000',
    backgroundColor: '#F3F3F3',
    height: 45,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 15,
    fontFamily: 'Poppins',
    fontSize: 14,
  },
  button: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 1,
    top: DEVICE_HEIGHT / 2 - 20,
  },
  nextButton: {
    height: (264 / 375) * DEVICE_WIDTH,
    width: (264 / 375) * DEVICE_WIDTH,
    resizeMode: 'contain',
  },
  iconBack: {
    height: 22,
    width: 22,
    resizeMode: 'contain',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
  fullname: {
    fontSize: 16,
    color: '#000',
    lineHeight: 24,
    fontWeight: '500',
    fontFamily: 'Poppins-Medium',
  },
  email: {
    fontSize: 13,
    color: '#929292',
    lineHeight: 19,
    fontFamily: 'Poppins',
  },
  overview: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 24,
    backgroundColor: '#fff',
    marginTop: 25,
    marginHorizontal: 16,
    // width: deviceWidth - 32,
    // height: isIos ? (260 / 375) * deviceWidth : (260 / 375) * deviceWidth + 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 10,
  },
  overTitle: {
    fontSize: 14,
    color: '#000',
    lineHeight: 21,
    fontFamily: 'Poppins',
  },
  viewItem: {
    flexDirection: 'row',
    marginBottom: 22,
    alignItems: 'center',
  },
  iconItem: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 13,
  },
  txtItem: {
    fontFamily: 'Poppins-Medium',
    fontWeight: '500',
    fontSize: 10,
  },
  line: {
    marginTop: 4,
    width: (150 / 375) * DEVICE_WIDTH,
    height: 6,
    borderColor: '#000',
    borderWidth: 1,
  },
  progress: {
    height: 4,
  },
  txt1: {
    fontFamily: 'Poppins',
    fontSize: 12,
    lineHeight: 18,
    color: '#929292',
  },
  viewList: {
    // paddingHorizontal: 16,
  },
  titleList: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    lineHeight: 24,
    color: '#000',
    fontWeight: '500',
    marginLeft: 16,
    marginVertical: 25,
  },
  txtAllSource: {
    fontFamily: 'Poppins-ExtraLight',
    fontSize: 13,
    lineHeight: 19,
    color: '#929292',
    fontWeight: '300',
    textDecorationLine: 'underline',
  },
  loginRegister: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  loginRegisterText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  loginRegisterIcon: {
    color: '#000',
    fontWeight: '500',
    marginHorizontal: 5,
  },
});
