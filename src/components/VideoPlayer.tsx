import React, {useRef} from 'react';
import Video from 'react-native-video';
import {poster} from '../assets/img/uri';
import {StyleSheet} from 'react-native';
// import {DEVICE_WIDTH} from '../constans/constants';
// import MediaControls, {PLAYER_STATES} from 'react-native-media-controls';
// import {noop} from 'react-native-media-controls/dist/utils';

const VideoPlayer = () => {
  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // // const [isFullScreen, setIsFullScreen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [paused, setPaused] = useState(false);
  // const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);
  const videoPlayer = useRef(null);
  // const onSeek = (seek: any) => {
  //   console.log(seek);
  //   // videoPlayer.current.seek(seek);
  // };
  // const onSeeking = (currentVideoTime: any) => setCurrentTime(currentVideoTime);
  // const onPaused = (newState: any) => {
  //   setPaused(!paused);
  //   setPlayerState(newState);
  // };
  // const onReplay = () => {
  //   // videoPlayer.current.seek(0);
  //   setCurrentTime(0);
  //   if (Platform.OS === 'android') {
  //     setPlayerState(PLAYER_STATES.PAUSED);
  //     setPaused(true);
  //   } else {
  //     setPlayerState(PLAYER_STATES.PLAYING);
  //     setPaused(false);
  //   }
  // };

  // const onProgress = (data: any) => {
  //   if (!isLoading) {
  //     setCurrentTime(data.currentTime);
  //   }
  // };
  //
  // const onLoad = (data: any) => {
  //   setDuration(Math.round(data.duration));
  //   setIsLoading(false);
  // };
  //
  // const onLoadStart = () => setIsLoading(true);
  //
  // const onEnd = () => {
  //   setPlayerState(PLAYER_STATES.ENDED);
  //   setCurrentTime(duration);
  // };
  return (
    <>
      <Video
        // onEnd={onEnd}
        // onLoad={onLoad}
        // onLoadStart={onLoadStart}
        posterResizeMode={'contain'}
        // onProgress={onProgress}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        paused={true}
        poster={poster}
        ref={videoPlayer}
        // resizeMode={'cover'}
        style={styles.backgroundVideo}
      />
      {/*<MediaControls*/}
      {/*  isFullScreen*/}
      {/*  duration={duration}*/}
      {/*  isLoading={isLoading}*/}
      {/*  mainColor="orange"*/}
      {/*  onFullScreen={noop}*/}
      {/*  onPaused={onPaused}*/}
      {/*  onReplay={onReplay}*/}
      {/*  onSeek={onSeek}*/}
      {/*  onSeeking={onSeeking}*/}
      {/*  playerState={playerState}*/}
      {/*  progress={currentTime}*/}
      {/*  containerStyle={styles.stylesControl}*/}
      {/*  sliderStyle={{containerStyle: {}, thumbStyle: {}, trackStyle: {}}}>*/}
      {/*  <MediaControls.Toolbar>*/}
      {/*    <View style={styles.toolbar}>*/}
      {/*      <Text>I'm a custom toolbar </Text>*/}
      {/*    </View>*/}
      {/*  </MediaControls.Toolbar>*/}
      {/*</MediaControls>*/}
    </>
  );
};
export default VideoPlayer;
const styles = StyleSheet.create({
  backgroundVideo: {
    // width: DEVICE_WIDTH/,
    height: 120,
    // margin: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 250,
    right: 0,
    marginHorizontal: 32,
    padding: 95,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignSelf: 'center',
  },
  stylesControl: {
    // height: '100%',
    // flex: 1,
    // alignSelf: 'center',
  },
  toolbar: {},
});
