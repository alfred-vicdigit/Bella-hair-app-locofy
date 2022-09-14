import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const ChatCall = () => {
  return (
    <View style={styles.chatCall}>
      <View style={styles.videoCall1} />
      <Image
        style={styles.btnendCallIcon}
        resizeMode="cover"
        source={require("../assets/btnend-call.png")}
      />
      <Image
        style={styles.btnturnOffCameraIcon}
        resizeMode="cover"
        source={require("../assets/btnturn-off-camera.png")}
      />
      <Image
        style={styles.btnturnOffMicIcon}
        resizeMode="cover"
        source={require("../assets/btnturn-off-mic.png")}
      />
      <View style={styles.iPhoneXHomeIndicatorHomeI}>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.videoCall2}>
        <View style={styles.rectangleView1} />
        <View style={styles.rectangleView2} />
      </View>
      <Image
        style={styles.iconsLineLeftArrowLongCop}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long-copy-21.png")}
      />
      <Text style={styles.margueriteCrossText}>Marguerite Cross…</Text>
      <Image
        style={styles.iconsLineLeftArrowLong}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long1.png")}
      />
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView3} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group4.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  videoCall1: {
    position: "absolute",
    height: "100%",
    width: "121.66%",
    top: "0%",
    right: "-0.06%",
    bottom: "0%",
    left: "-21.6%",
    backgroundColor: "#2e3a59",
  },
  btnendCallIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 304,
      },
      {
        translateX: -33.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 68,
    height: 68,
  },
  btnturnOffCameraIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 317,
      },
      {
        translateX: 79.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 42,
    height: 42,
  },
  btnturnOffMicIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 317,
      },
      {
        translateX: -120.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 42,
    height: 42,
  },
  rectangleView: {
    position: "absolute",
    transform: [
      {
        translateX: -66.5,
      },
    ],
    bottom: 9,
    left: "50%",
    borderRadius: 100,
    backgroundColor: "#fff",
    width: 134,
    height: 5,
  },
  iPhoneXHomeIndicatorHomeI: {
    position: "absolute",
    height: "4.19%",
    width: "100%",
    top: "95.81%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  rectangleView1: {
    position: "absolute",
    transform: [
      {
        translateY: -104.5,
      },
    ],
    top: "50%",
    right: 0,
    borderRadius: 8,
    backgroundColor: "#fff",
    width: 146,
    height: 209,
  },
  rectangleView2: {
    position: "absolute",
    transform: [
      {
        translateY: -100.5,
      },
    ],
    top: "50%",
    right: 4,
    borderRadius: 8,
    backgroundColor: "#8f9bb3",
    width: 138,
    height: 201,
  },
  videoCall2: {
    position: "absolute",
    transform: [
      {
        translateY: 75,
      },
    ],
    top: "50%",
    right: 15,
    width: 146,
    height: 209,
  },
  iconsLineLeftArrowLongCop: {
    position: "absolute",
    top: 49,
    right: 15,
    width: 24,
    height: 24,
  },
  margueriteCrossText: {
    position: "absolute",
    transform: [
      {
        translateY: -355,
      },
      {
        translateX: -82.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
    width: 165,
  },
  iconsLineLeftArrowLong: {
    position: "absolute",
    top: 49,
    left: 15,
    width: 24,
    height: 24,
  },
  rectangleView3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupIcon: {
    position: "absolute",
    top: 17,
    right: 14,
    width: 68,
    height: 12,
    overflow: "hidden",
  },
  text: {
    letterSpacing: -0.28,
  },
  timeText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "SF Pro Text",
    color: "#fff",
    textAlign: "center",
    width: 54,
  },
  timeStyleView: {
    position: "absolute",
    top: 13,
    left: 21,
    width: 54,
    height: 21,
  },
  iPhoneXStatusBarsStatusBa: {
    position: "absolute",
    transform: [
      {
        translateY: -22,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 44,
    overflow: "hidden",
  },
  iPhoneXStatusBarsStatusBa1: {
    position: "absolute",
    height: "5.42%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.58%",
    left: "0%",
  },
  chatCall: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default ChatCall;
