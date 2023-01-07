import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {memo} from 'react';

const BackArrowSvg = (props: SvgProps) => (
  <Svg width={14} height={24} viewBox="0 0 7 12" fill="none" {...props}>
    <Path
      d="M5.57047 1.32812L0.759277 6.13932L5.57047 10.9505"
      stroke="#5F6368"
      strokeLinecap="round"
    />
  </Svg>
);
const MemoBackArrowSvg = memo(BackArrowSvg);
export default MemoBackArrowSvg;
