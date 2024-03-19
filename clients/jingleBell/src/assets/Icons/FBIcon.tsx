import * as React from 'react';
import Svg, { SvgProps, Path, Rect, Defs, LinearGradient, Stop } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Path
      fill="url(#a)"
      d="M36 24c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854V27.47h-3.047V24h3.047v-2.644c0-3.007 1.791-4.669 4.533-4.669 1.313 0 2.686.235 2.686.235v2.953H27.83c-1.491 0-1.956.925-1.956 1.874V24h3.328l-.532 3.469h-2.796v8.385C31.612 34.954 36 29.99 36 24Z"
    />
    <Path
      fill="#fff"
      d="M28.671 27.469 29.203 24h-3.328v-2.251c0-.949.465-1.874 1.956-1.874h1.513v-2.953s-1.373-.235-2.686-.235c-2.742 0-4.533 1.662-4.533 4.67V24h-3.047v3.469h3.047v8.385a12.087 12.087 0 0 0 3.75 0V27.47h2.796Z"
    />
    <Rect width={47} height={47} x={0.5} y={0.5} stroke="#000" strokeOpacity={0.23} rx={3.5} />
    <Defs>
      <LinearGradient id="a" x1={24} x2={24} y1={12} y2={35.854} gradientUnits="userSpaceOnUse">
        <Stop stopColor="#19AEFF" />
        <Stop offset={1} stopColor="#0062E0" />
      </LinearGradient>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
