import * as React from 'react';
import Svg, { SvgProps, G, Path, Rect, Defs, ClipPath } from 'react-native-svg';
import { memo } from 'react';
const SvgComponent = (props: SvgProps) => (
  <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#4285F4"
        d="M35.709 24.224c0-.983-.08-1.7-.253-2.445H24.228v4.438h6.591c-.133 1.103-.85 2.764-2.445 3.88l-.022.149 3.55 2.75.246.024c2.259-2.086 3.56-5.155 3.56-8.796Z"
      />
      <Path
        fill="#34A853"
        d="M24.23 35.921c3.229 0 5.94-1.063 7.92-2.897L28.375 30.1c-1.01.705-2.366 1.196-4.146 1.196-3.163 0-5.848-2.086-6.804-4.97l-.14.012-3.692 2.857-.049.135c1.967 3.907 6.007 6.591 10.685 6.591Z"
      />
      <Path
        fill="#FBBC05"
        d="M17.425 26.325a7.364 7.364 0 0 1-.399-2.365c0-.824.147-1.622.386-2.366l-.007-.158-3.738-2.903-.122.058a11.97 11.97 0 0 0-1.275 5.369c0 1.926.465 3.747 1.275 5.368l3.88-3.003Z"
      />
      <Path
        fill="#EB4335"
        d="M24.229 16.624c2.245 0 3.76.97 4.624 1.78l3.375-3.295c-2.073-1.926-4.77-3.109-8-3.109-4.677 0-8.716 2.684-10.683 6.59l3.867 3.004c.97-2.884 3.654-4.97 6.817-4.97Z"
      />
    </G>
    <Rect width={47} height={47} x={0.5} y={0.5} stroke="#000" strokeOpacity={0.23} rx={3.5} />
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M12 12h24v24H12z" />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgComponent);
export default Memo;
