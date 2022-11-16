import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {memo} from 'react';

const Checked = (props: SvgProps) => (
  <Svg width={15} height={12} fill="none" {...props}>
    <Path
      d="M4.593 8.837 1.159 5.403.014 6.548l4.579 4.579 9.811-9.812L13.26.171 4.593 8.837Z"
      fill="#F8F8F8"
    />
  </Svg>
);
const MemoChecked = memo(Checked);
export default MemoChecked;
