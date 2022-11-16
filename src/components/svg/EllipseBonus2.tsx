import * as React from 'react';
import Svg, {
  SvgProps,
  Ellipse,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {memo} from 'react';

const EllipseBonus2 = (props: SvgProps) => (
  <Svg width={7} height={16} fill="none" {...props}>
    <Ellipse cx={7.378} cy={8.012} rx={7.184} ry={7.105} fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.194}
        y1={0.907}
        x2={17.479}
        y2={8.253}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const MemoEllipseBonus2 = memo(EllipseBonus2);
export default MemoEllipseBonus2;
