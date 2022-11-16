import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
import {memo} from 'react';

const Button = (props: SvgProps) => (
  <Svg width={17} height={15} fill="none" {...props}>
    <Path
      d="M8.458.674c-2.697 0-3.497.21-4.93.506-1.053.21-2.064.968-2.274 2.19a22.587 22.587 0 0 0-.337 4.045c0 1.811.168 3.033.379 4.044.21 1.18 1.18 1.938 2.275 2.19 1.516.296 2.233.506 4.929.506s3.412-.21 4.887-.505c1.053-.253 2.064-1.011 2.275-2.19.168-.97.379-2.234.421-4.045 0-1.812-.21-3.076-.421-4.087-.21-1.18-1.18-1.938-2.275-2.19h-.042C11.87.884 11.112.673 8.458.673Zm-1.56 3.581a.85.85 0 0 1 .464.126l3.623 2.065a.878.878 0 0 1 0 1.559l-3.623 2.064c-.632.295-1.39-.127-1.39-.8V5.181c0-.548.421-.927.927-.927Z"
      fill="#E0E0E0"
    />
  </Svg>
);
const MemoButton = memo(Button);
export default MemoButton;
