import * as React from 'react';
import Svg, {SvgProps, Path, Defs, Pattern, Use, Image} from 'react-native-svg';
import {memo} from 'react';
const PopUpImage = (props: SvgProps) => (
  <Svg width={260} height={125} fill="none" {...props}>
    <Path fill="url(#a)" d="M-1046-354H338v577h-1384z" />
    <Defs>
      <Pattern
        id="a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#b" transform="scale(.00024 .00059)" />
      </Pattern>
      <Image
        id="b"
        width={4096}
        height={1708}
      />
    </Defs>
  </Svg>
);
const MemoPopUpImage = memo(PopUpImage);
export default MemoPopUpImage;