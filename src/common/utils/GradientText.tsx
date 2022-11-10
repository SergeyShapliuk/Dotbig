import React from 'react';
import {Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

type GradientPropsType = {
  text: string;
  style: any;
};
const GradientText = ({text, style}: GradientPropsType) => {
  return (
    <MaskedView maskElement={<Text style={style}>{text}</Text>}>
      <LinearGradient
        colors={['#EAB9AC', '#D58EA4', '#A968A0', '#8046A2']}
        start={{x: 0.0, y: 1.0}}
        end={{x: 1.0, y: 1.0}}>
        <Text style={[style, {opacity: 0}]}>{text}</Text>
      </LinearGradient>
    </MaskedView>
  );
};
export default GradientText;
