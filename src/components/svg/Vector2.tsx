import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';

const Vector2 = (props: SvgProps) => (
  <Svg width={12} height={14} fill="none" {...props}>
    <Path
      d="M11.443.371h-5.12a.917.917 0 0 0-.865.588L.668 13.757h5.158L10.616.96a.896.896 0 0 1 .322-.416.935.935 0 0 1 .505-.171V.37Z"
      fill="#0996C7"
    />
  </Svg>
);

const MemoVector2 = memo(Vector2);
export default MemoVector2;
