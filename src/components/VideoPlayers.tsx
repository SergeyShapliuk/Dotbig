import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Vimeo} from 'react-native-vimeo-iframe';
import {DEVICE_WIDTH} from '../constans/constants';
import {Images} from '../assets/image';
import EllipseButton from './svg/EllipseButton';
import Rastangle from './svg/Rastangle';
import Button from './svg/Button';

type VideoType = {
  videoId: string;
};

const VideoPlayers = React.memo(({videoId}: VideoType) => {
  const [preview, setPreview] = useState<boolean>(false);
  console.log('preview', preview);
  const videoCallbacks = {
    timeupdate: (data: any) => console.log('timeupdate: ', data),
    play: (data: any) => {
      console.log('play', data);
      setPreview(data);
    },
    pause: (data: any) => console.log('pause: ', data),
    fullscreenchange: (data: any) => console.log('fullscreenchange: ', data),
    ended: (data: any) => console.log('ended: ', data),
    controlschange: (data: any) => console.log('controlschange: ', data),
  };

  return (
    <>
      {!preview && (
        <View style={styles.previewContainer}>
          <Image
            source={Images.imgVideoPreview}
            style={styles.imgVideoPreview}
          />
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Rastangle style={{position: 'absolute'}} />
              <EllipseButton style={{position: 'absolute'}} />
              <Button style={{position: 'absolute'}} />
            </View>
          </TouchableOpacity>
        </View>
      )}
      <Vimeo
        videoId={videoId}
        params={'api=1&autoplay=0'}
        handlers={videoCallbacks}
        style={styles.backgroundVideo}
        // minimumFontSize={4}
        containerStyle={{width: DEVICE_WIDTH - 60, zIndex: -1}}
      />
    </>
  );
});
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
  imgVideoPreview: {
    position: 'absolute',
    width: DEVICE_WIDTH - 60,
    height: 180,
    top: 0,
    // height: '100%',
    // flex: 1,
    // alignSelf: 'center',
  },
  previewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 95,
  },
});
