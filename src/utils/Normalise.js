import { Dimensions, Platform, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height } = Dimensions.get("window");

const scale = SCREEN_WIDTH / height;

export function pixelNormalize(size) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
