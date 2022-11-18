import * as React from 'react';
import Svg, {SvgProps, Rect, Path} from 'react-native-svg';
import {memo} from 'react';

const SvgComponent = (props: SvgProps) => (
  <Svg width={30} height={29} fill="none" {...props}>
    <Rect x={0.709} width={29} height={29} rx={14.5} fill="#9356A1" />
    <Path
      d="m12.592 17.689-3.434-3.434-1.144 1.144 4.578 4.579 9.812-9.811-1.145-1.145-8.667 8.667Z"
      fill="#F8F8F8"
    />
  </Svg>
);

const Memo = memo(SvgComponent);
export default Memo;
