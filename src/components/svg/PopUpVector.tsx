import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
import {memo} from 'react';

const PopUpVector = (props: SvgProps) => (
  <Svg width={20} height={15} fill="none" {...props}>
    <Path
      d="M6.656 11.205 2.268 6.817.806 8.28l5.85 5.85L19.194 1.593 17.73.13 6.656 11.205Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.806}
        y1={0.13}
        x2={20.822}
        y2={11.181}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#EAB9AC" />
        <Stop offset={0.297} stopColor="#D58EA4" />
        <Stop offset={0.693} stopColor="#A968A0" />
        <Stop offset={1} stopColor="#8046A2" />
      </LinearGradient>
    </Defs>
  </Svg>
);

const MemoPopUpVector = memo(PopUpVector);
export default MemoPopUpVector;
