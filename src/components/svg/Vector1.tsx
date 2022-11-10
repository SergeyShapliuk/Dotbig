import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {memo} from 'react';

const Vector = (props: SvgProps) => (
  <Svg width={5} height={8} fill="none" {...props}>
    <Path
      d="M3.812 7.807V5.698c-.428.059-.655.059-.838.059-.435 0-.917-.093-1.29-.247C.848 5.168.35 4.3.35 3.187c0-.555.137-1.571 1.059-2.119C1.87.797 2.417.681 3.238.681c.293 0 .69.022 1.073.043l.623.032V7.32l-1.122.488ZM3.156 1.53c-1.114 0-1.678.559-1.678 1.658 0 1.416.842 1.713 1.55 1.713.172 0 .366 0 .795-.054V1.56a9.923 9.923 0 0 0-.667-.03Z"
      fill="#231F20"
    />
  </Svg>
);

export default memo(Vector);
