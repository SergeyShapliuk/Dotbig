import React, {useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Vimeo} from 'react-native-vimeo-iframe';
import {scaleHeight, scaleWidth} from '../constans/constants';
import EllipseButton from './svg/EllipseButton';
import Rastangle from './svg/Rastangle';
import Button from './svg/Button';

type VideoType = {
  videoId: string;
  poster: any;
};

const VideoPlayers = React.memo(({videoId, poster}: VideoType) => {
  const [preview, setPreview] = useState<boolean>(false);

  console.log('preview', preview);
  const videoCallbacks = {
    timeupdate: (data: any) => console.log('timeupdate: ', data),
    play: (data: any) => {
      console.log('play', data);
      setPreview(true);
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
          <Image source={poster} style={styles.imgVideoPreview} />
          <TouchableOpacity onPress={videoCallbacks.play}>
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
        allowsFullscreenVideo={true}
        containerStyle={{
          width: scaleWidth(300),
          height: scaleHeight(180),
          zIndex: -1,
        }}
      />
    </>
  );
});
export default VideoPlayers;
const styles = StyleSheet.create({
  backgroundVideo: {
    width: scaleWidth(320),
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  imgVideoPreview: {
    position: 'absolute',
    width: scaleWidth(300),
    height: scaleHeight(180),
    resizeMode: 'cover',
    top: 0,
  },
  previewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: 95,
  },
});
