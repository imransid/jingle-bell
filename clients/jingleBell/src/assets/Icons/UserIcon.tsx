import * as React from 'react';
import Svg, { SvgProps, Path, Rect } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="#31CF77"
      d="M33 16.5v2.625a.75.75 0 1 1-1.5 0V16.5h-2.625a.75.75 0 1 1 0-1.5H31.5a1.5 1.5 0 0 1 1.5 1.5Zm-.75 11.625a.75.75 0 0 0-.75.75V31.5h-2.625a.75.75 0 1 0 0 1.5H31.5a1.5 1.5 0 0 0 1.5-1.5v-2.625a.75.75 0 0 0-.75-.75ZM19.125 31.5H16.5v-2.625a.75.75 0 1 0-1.5 0V31.5a1.5 1.5 0 0 0 1.5 1.5h2.625a.75.75 0 1 0 0-1.5ZM15.75 19.875a.75.75 0 0 0 .75-.75V16.5h2.625a.75.75 0 1 0 0-1.5H16.5a1.5 1.5 0 0 0-1.5 1.5v2.625a.75.75 0 0 0 .75.75ZM28.5 28.5a.748.748 0 0 1-.6-.3 4.876 4.876 0 0 0-7.8 0 .75.75 0 1 1-1.2-.9 6.368 6.368 0 0 1 2.569-2.033 3.75 3.75 0 1 1 5.057 0 6.369 6.369 0 0 1 2.571 2.032.749.749 0 0 1-.597 1.201ZM24 24.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
    />
    <Rect width={47} height={47} x={0.5} y={0.5} stroke="#000" strokeOpacity={0.23} rx={3.5} />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
