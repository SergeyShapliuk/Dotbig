import React from 'react';
import {StyleSheet} from 'react-native';
import {Vimeo} from 'react-native-vimeo-iframe';
import {DEVICE_WIDTH} from '../constans/constants';

type VideoType = {
  videoId: string;
};

const VideoPlayers = ({videoId}: VideoType) => {
  const videoCallbacks = {
    timeupdate: (data: any) => console.log('timeupdate: ', data),
    play: (data: any) => console.log('play: ', data),
    pause: (data: any) => console.log('pause: ', data),
    fullscreenchange: (data: any) => console.log('fullscreenchange: ', data),
    ended: (data: any) => console.log('ended: ', data),
    controlschange: (data: any) => console.log('controlschange: ', data),
  };

  return (
    <>
      <Vimeo
        videoId={videoId}
        params={'api=1&autoplay=0'}
        handlers={videoCallbacks}
        style={styles.backgroundVideo}
        // minimumFontSize={4}
        containerStyle={{width: DEVICE_WIDTH - 50}}
      />
    </>
  );
};
export default VideoPlayers;
const styles = StyleSheet.create({
  backgroundVideo: {
    width: DEVICE_WIDTH - 25,
    height: 180,
    // margin: 0,
    // position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    marginHorizontal: 32,
    // padding: 95,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  stylesControl: {
    // height: '100%',
    // flex: 1,
    // alignSelf: 'center',
  },
  toolbar: {},
});
