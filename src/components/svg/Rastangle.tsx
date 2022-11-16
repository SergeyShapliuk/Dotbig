import * as React from 'react';
import Svg, {
  G,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
import {memo} from 'react';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Rectangle = (props: SvgProps) => (
  <Svg width={63} height={64} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect
        y={0.915}
        width={63}
        height={63}
        rx={31.5}
        fill="#fff"
        fillOpacity={0.1}
      />
      <Rect
        x={0.292}
        y={1.207}
        width={62.417}
        height={62.417}
        rx={31.208}
        stroke="url(#b)"
        strokeWidth={0.583}
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={0}
        y1={0.915}
        x2={76.045}
        y2={32.879}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);
const MemoRectangle = memo(Rectangle);
export default MemoRectangle;
