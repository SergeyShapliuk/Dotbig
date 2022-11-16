import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const Pause = (props: SvgProps) => (
  <Svg width={10} height={10} fill="none" {...props}>
    <Path
      d="M.5 1.55a1.5 1.5 0 1 1 3 0v6.9a1.5 1.5 0 1 1-3 0v-6.9ZM6.5 1.55a1.5 1.5 0 1 1 3 0v6.9a1.5 1.5 0 1 1-3 0v-6.9Z"
      fill="#D9D9D9"
    />
  </Svg>
);

const MemoPause = memo(Pause);
export default MemoPause;
