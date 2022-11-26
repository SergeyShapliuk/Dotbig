import {Dimensions, PixelRatio, Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
const {width, height} = Dimensions.get('window');
export const WIDTH = width;
export const HEIGHT = height;
export const PADDING = 30;
export const GAP = 5;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export const DEVICE_WIDTH = deviceWidth;
export const DEVICE_HEIGHT = deviceHeight;

export const isTablet = DeviceInfo.getDeviceType() !== 'Handset';

export const scaleWidth = (widthScale: number) => {
  if (isTablet) {
    return widthScale;
  }
  return (Dimensions.get('screen').width / DEVICE_WIDTH) * widthScale;
};

export const scaleHeight = (heightScale: number) => {
  if (isTablet) {
    return heightScale;
  }
  return (Dimensions.get('screen').width / DEVICE_WIDTH) * heightScale;
};

export const scaleX = scaleWidth;

export const scaleY = (heightScale: number) =>
  (Dimensions.get('screen').height / DEVICE_HEIGHT) * heightScale;

export const scaleFont = scaleWidth;

export const widthDP = (widthPercent: string) => {
  // Convert string input to decimal number
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((deviceWidth * elemWidth) / 100);
};
export const heightDP = (heightPercent: string) => {
  // Convert string input to decimal number
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((deviceHeight * elemHeight) / 100);
};
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
