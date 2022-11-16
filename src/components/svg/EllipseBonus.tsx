import * as React from 'react';
import Svg, {
  Circle,
  Defs,
  LinearGradient,
  Stop,
  SvgProps,
} from 'react-native-svg';
import {memo} from 'react';

const EllipseBonus = (props: SvgProps) => (
  <Svg width={6} height={12} fill="none" {...props}>
    <Circle cx={5.536} cy={5.966} r={5.435} fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.101}
        y1={0.531}
        x2={13.222}
        y2={6.046}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);
const MemoEllipseBonus = memo(EllipseBonus);
export default MemoEllipseBonus;
