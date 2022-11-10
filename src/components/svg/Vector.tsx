import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {memo} from 'react';

const Vector = (props: SvgProps) => (
  <Svg width={6} height={11} fill="none" {...props}>
    <Path
      d="M4.426.113.802 9.903a.684.684 0 0 1-.227.305.702.702 0 0 1-.356.14v.005h3.832c.3 0 .556-.187.652-.45l.343-.926s-.49-2.289-.416-3.72c.073-1.43.987-5.144.987-5.144h-1.19Z"
      fill="#0996C7"
    />
  </Svg>
);

export default memo(Vector);
