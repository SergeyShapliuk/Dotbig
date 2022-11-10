import * as React from 'react';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
import {memo} from 'react';

const EllipseButton = (props: SvgProps) => (
  <Svg width={37} height={37} fill="none" {...props}>
    <Circle cx={18.5} cy={18.415} r={17.792} fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.708}
        y1={0.623}
        x2={43.66}
        y2={18.677}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default memo(EllipseButton);
