import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');
export const WIDTH = width;
export const HEIGHT = height;
export const PADDING = 30;
export const GAP = 5;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const DEVICE_WIDTH = deviceWidth;
export const DEVICE_HEIGHT = deviceHeight;

export const extraHeaderConfig =
  PixelRatio.get() <= 2 && Platform.OS === 'ios' ? {minWidth: 800} : {};

export const headerStyle = {
  backgroundColor: '#000',
  borderWidth: 0,
  borderBottomColor: 'transparent',
  shadowColor: 'transparent',
  elevation: 0,
  shadowRadius: 0,
  shadowOffset: {
    height: 0,
  },
};
export const headerTitleStyle = {
  alignSelf: 'center',
  width: width * 0.86,
  textAlign: 'center',
  fontSize: 19,
  ...extraHeaderConfig,
};
