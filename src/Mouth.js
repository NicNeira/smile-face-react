import { arc } from "d3";

export const Mouth = ({ mouthRadius, mouthWidth }) => {
  const mouthArc = arc()
    // radio interno (queda un borde)
    .innerRadius(mouthRadius)
    .outerRadius(mouthRadius + mouthWidth)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);

  return <path d={mouthArc()} />;
};
