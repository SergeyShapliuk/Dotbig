import * as React from 'react';
import Svg, {SvgProps, G, Rect, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

import {memo} from 'react';

const Rectangle251 = (props: SvgProps) => (
  <Svg width={50} height={50} fill="none" {...props}>
    <G filter="url(#a)">
      <Rect width={50} height={50} rx={24} fill="#9356A1" fillOpacity={0.65} />
    </G>
    <Defs />
  </Svg>
);

const MemoRectangle251 = memo(Rectangle251);
export default MemoRectangle251;
