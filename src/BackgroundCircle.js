export const BackgroundCircle = ({ radius, strokeWidth }) => {
  return (
    <circle
      // cx={centerX}
      // cy={centerY}
      // {centerY - strokeWidth / 2}
      r={radius}
      fill="yellow"
      stroke="black"
      strokeWidth={strokeWidth}
    />
  );
};
