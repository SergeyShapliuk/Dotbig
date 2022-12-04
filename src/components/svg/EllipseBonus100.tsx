import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {memo} from 'react';

const EllipseBonus100 = (props: SvgProps) => (
  <Svg width={9} height={8} fill="none" {...props}>
    <Path
      opacity={0.6}
      d="M8.284 4.176c0 2.065-1.693 3.74-3.781 3.74C2.414 7.915.72 6.24.72 4.175c0-2.066 1.693-3.74 3.782-3.74 2.088 0 3.78 1.674 3.78 3.74Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.721}
        y1={0.436}
        x2={9.819}
        y2={4.302}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const MemoEllipseBonus100 = memo(EllipseBonus100);
export default MemoEllipseBonus100;
