import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import MemoHeadphonesSvg2 from './svg/HeadphonesSvg2';
import MemoGroupBonus from './svg/GroupBonus';
import MemoVector from './svg/Vector';
import MemoVector1 from './svg/Vector1';
import MemoEllipseBonus from './svg/EllipseBonus';
import MemoEllipseBonus2 from './svg/EllipseBonus2';
import MemoRectangle251 from './svg/Rectangle251';
import MemoEllipseButton from './svg/EllipseButton';
import MemoButton from './svg/Button';
import MemoPause from './svg/Pause';
import MemoEllipseBonus100 from './svg/EllipseBonus100';
import MemoVector2 from './svg/Vector2';

const BonusContentWithAudio = () => {
  const [play, setPlay] = useState<boolean>(false);
  const music = [
    {
      title: 'death bed',
      artist: 'Powfu',
      artwork:
        'https://images-na.ssl-images-amazon.com/images/I/A1LVEJikmZL._AC_SX425_.jpg',
      url: 'https://ru.dotbig.study/wp-content/uploads/2022/09/file_example_MP3_700KB.mp3',
      duration: 2 * 60 + 53,
      id: '1',
    },
  ];

  const onPlay = () => {
    setPlay(!play);
  };
  return (
    <>
      <View style={styles.imgBonus1}>
        <MemoHeadphonesSvg2 />
        <MemoGroupBonus style={{position: 'absolute', top: 27}} />

        <MemoVector style={{position: 'absolute', left: 12.5, top: 27}} />
        <MemoVector1 style={{position: 'absolute', right: 12.5, top: 33.5}} />
        <MemoVector2 style={{position: 'absolute', left: 5.5, top: 27.5}} />
        <MemoEllipseBonus100 style={{position: 'absolute', left: 12, top: 7}} />
        <MemoEllipseBonus2 style={{position: 'absolute', right: 0, top: 17}} />
        <MemoRectangle251 style={{position: 'absolute'}} />
        {!play && (
          <MemoButton style={{position: 'absolute', top: 30.5, zIndex: 1}} />
        )}

        {play && <MemoPause style={{position: 'absolute', zIndex: 1}} />}
        <TouchableOpacity
          hitSlop={{left: 10, right: 10, top: 10, bottom: 10}}
          onPress={onPlay}
          style={styles.button}>
          <MemoEllipseButton style={{left: 0.5}} />
        </TouchableOpacity>
      </View>
    </>
  );
};
export default BonusContentWithAudio;

const styles = StyleSheet.create({
  imgBonus1: {
    width: 75,
    height: 76,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginBottom: 30,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  button: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
