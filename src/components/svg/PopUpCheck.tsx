import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {memo} from 'react';

const PopUpCheck = (props: SvgProps) => (
  <Svg width={64} height={64} fill="none" {...props}>
    <Rect
      x={0.75}
      y={0.75}
      width={62.5}
      height={62.5}
      rx={9.25}
      stroke="url(#a)"
      strokeWidth={1.5}
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={0}
        x2={77.252}
        y2={32.471}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const MemoPopUpCheck = memo(PopUpCheck);
export default MemoPopUpCheck;
