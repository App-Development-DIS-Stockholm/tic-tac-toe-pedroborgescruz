import { View } from "react-native";

export default function BoardDecoration() {
  const borderWidth = 3;
  return (
    <View style={{ width: "100%", height: "100%", position: "absolute" }}>
      <View style={{ width: "100%", height: "100%" }}>
        <View style={{ flex: 1 }} />
        <View
          style={{
            flex: 1,
            borderTopWidth: borderWidth,
            borderBottomWidth: borderWidth,
          }}
        />
        <View style={{ flex: 1 }} />
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          flexDirection: "row",
        }}
      >
        <View style={{ flex: 1 }} />
        <View
          style={{
            flex: 1,
            borderLeftWidth: borderWidth,
            borderRightWidth: borderWidth,
          }}
        />
        <View style={{ flex: 1 }} />
      </View>
    </View>
  );
}
