import * as React from 'react';
import Svg, { SvgProps, Circle, Rect, Path } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <Circle cx={42.8} cy={38.574} r={3.2} fill="#3FC086" />
    <Circle cx={36.2} cy={52.775} r={2.8} fill="#48DA98" />
    <Circle cx={33.2} cy={42.574} r={2.8} fill="#3FC086" />
    <Circle cx={27.8} cy={34.174} r={2.6} fill="#B5BFCB" />
    <Circle cx={36.2} cy={26.974} r={2.4} fill="#B5BFCB" />
    <Rect width={18} height={52.4} x={138.4} y={3.374} fill="#3FC086" rx={8} />
    <Path
      fill="#3FC086"
      d="M50.069 5.456a8 8 0 0 1 11.307.395L62.54 7.1a8 8 0 0 1-.395 11.306l-12.35 11.517L37.72 16.972l12.35-11.516Z"
    />
    <Path
      fill="#48DA98"
      d="M9.85 18.407A8 8 0 0 1 9.457 7.1l1.165-1.25a8 8 0 0 1 11.307-.394l12.35 11.516-12.077 12.952L9.85 18.407Z"
    />
    <Rect
      width={17.708}
      height={56.716}
      x={91.427}
      y={0.174}
      fill="#48DA98"
      rx={8.854}
      transform="rotate(28 91.427 .174)"
    />
    <Rect
      width={17.708}
      height={56.716}
      x={83.141}
      y={8.447}
      fill="#3FC086"
      rx={8.854}
      transform="rotate(-28 83.14 8.447)"
    />
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
