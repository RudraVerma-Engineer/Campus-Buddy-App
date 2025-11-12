import { Dimensions, Image } from "react-native";
import ImageZoom from "react-native-image-pan-zoom";

export default function App() {
  const { width, height } = Dimensions.get("screen");

  return (
    <ImageZoom
      cropWidth={width}
      cropHeight={height}
      imageWidth={300}
      imageHeight={300}
    >
      <Image
        style={{ width:"100%",height:"100%" }} resizeMode="contain"
        source={require("../../images/timetable.png")}
      />
    </ImageZoom>
  );
}
