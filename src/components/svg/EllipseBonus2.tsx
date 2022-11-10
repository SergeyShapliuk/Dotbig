import * as React from 'react';
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
import {memo} from 'react';

const EllipseBonus2 = (props: SvgProps) => (
  <Svg width={7} height={7} fill="none" {...props}>
    <Path
      opacity={0.6}
      d="M6.338 3.382a2.86 2.86 0 1 1-5.721 0 2.86 2.86 0 0 1 5.721 0Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.617}
        y1={0.521}
        x2={7.523}
        y2={3.424}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default memo(EllipseBonus2);
