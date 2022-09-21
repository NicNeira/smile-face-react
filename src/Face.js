import { BackgroundCircle } from "./BackgroundCircle";
import { Eyes } from "./Eyes";
import { FaceContainer } from "./FaceContainer";
import { Mouth } from "./Mouth";

export const Face = ({
  width,
  height,
  centerX,
  centerY,
  strokeWidth,
  eyeOffsetX,
  eyeOffsetY,
  eyeRadius,
  mouthWidth,
  mouthRadius
}) => {
  return (
    <FaceContainer
      centerX={centerX}
      centerY={centerY}
      width={width}
      height={height}
    >
      {/* cx para eje x cy para eje y r = radio fill = relleno */}
      <BackgroundCircle
        radius={centerY - strokeWidth / 2}
        strokeWidth={strokeWidth}
      />
      <Eyes
        eyeOffsetX={eyeOffsetX}
        eyeOffsetY={eyeOffsetY}
        eyeRadius={eyeRadius}
      />

      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth} />
    </FaceContainer>
  );
};
