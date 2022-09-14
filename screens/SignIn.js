import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const SignIn = () => {
  return (
    <View style={styles.signInView}>
      <View style={styles.background1View} />
      <View style={styles.background2View} />
      <View style={styles.iPhoneXHomeIndicatorHomeI}>
        <View style={styles.rectangleView} />
      </View>
      <View style={styles.btnsignUpView}>
        <Text style={styles.youDontHaveAnAc}>You don’t have an account?</Text>
        <Text style={styles.signUpText}>Sign Up</Text>
      </View>
      <View style={styles.btnsignInWithView}>
        <View style={styles.noteView}>
          <Text style={styles.orSignInWith}>Or sign in with</Text>
          <View style={styles.rectangleCopy3} />
          <View style={styles.rectangleCopy4} />
        </View>
        <Image
          style={styles.socialMediaIcon}
          resizeMode="cover"
          source={require("../assets/social-media.png")}
        />
      </View>
      <View style={styles.btnsignInView}>
        <View style={styles.rectangleView1} />
        <Text style={styles.signInText}>Sign In</Text>
      </View>
      <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      <View style={styles.txtpasswordView}>
        <Text style={styles.passwordText}>Password</Text>
        <View style={styles.rectangleCopyView} />
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-4.png")}
        />
        <Image
          style={styles.iconsLineLocation}
          resizeMode="cover"
          source={require("../assets/22-iconslinelocation.png")}
        />
      </View>
      <View style={styles.txtemailView}>
        <Text style={styles.emailText}>Email</Text>
        <Text style={styles.theresaCohen68examText}>
          theresa_cohen68@example.com
        </Text>
        <View style={styles.rectangleView2} />
      </View>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView3} />
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.logoIcon}
        resizeMode="cover"
        source={require("../assets/logo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background1View: {
    position: "absolute",
    height: "34.98%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "65.02%",
    left: "0%",
    backgroundColor: "#ff7e00",
  },
  background2View: {
    position: "absolute",
    transform: [
      {
        translateY: -164,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    height: 570,
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
    backgroundColor: "#000",
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
  youDontHaveAnAc: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: -119,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 180,
  },
  signUpText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: 65,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "left",
    width: 54,
  },
  btnsignUpView: {
    position: "absolute",
    transform: [
      {
        translateY: 354,
      },
      {
        translateX: -118.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 238,
    height: 18,
  },
  orSignInWith: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
      {
        translateX: -69.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 140,
  },
  rectangleCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: 62.5,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#e4e9f2",
    width: 95,
    height: 1,
  },
  rectangleCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: -157.5,
      },
    ],
    top: "50%",
    left: "50%",
    backgroundColor: "#e4e9f2",
    width: 95,
    height: 1,
  },
  noteView: {
    position: "absolute",
    transform: [
      {
        translateY: -39,
      },
      {
        translateX: -157.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 315,
    height: 18,
  },
  socialMediaIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 0,
      },
      {
        translateX: -89.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 180,
    height: 39,
  },
  btnsignInWithView: {
    position: "absolute",
    transform: [
      {
        translateY: 198,
      },
      {
        translateX: -157.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 315,
    height: 78,
  },
  rectangleView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#ff7e00",
  },
  signInText: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
      {
        translateX: -25.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "center",
  },
  btnsignInView: {
    position: "absolute",
    transform: [
      {
        translateY: 114,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 44,
    overflow: "hidden",
  },
  forgotPasswordText: {
    position: "absolute",
    transform: [
      {
        translateY: 47,
      },
    ],
    top: "50%",
    right: 30,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "right",
    width: 270,
  },
  passwordText: {
    position: "absolute",
    transform: [
      {
        translateY: -27.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 270,
  },
  rectangleCopyView: {
    position: "absolute",
    height: "1.82%",
    width: "100%",
    top: "98.18%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#e4e9f2",
  },
  groupIcon: {
    position: "absolute",
    transform: [
      {
        translateY: 7.5,
      },
    ],
    top: "50%",
    left: 0,
    width: 127,
    height: 6,
  },
  iconsLineLocation: {
    position: "absolute",
    transform: [
      {
        translateY: -1.5,
      },
    ],
    top: "50%",
    right: 0,
    width: 24,
    height: 24,
  },
  txtpasswordView: {
    position: "absolute",
    transform: [
      {
        translateY: -33,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
  },
  emailText: {
    position: "absolute",
    transform: [
      {
        translateY: -27.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 270,
  },
  theresaCohen68examText: {
    position: "absolute",
    transform: [
      {
        translateY: 0.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 270,
  },
  rectangleView2: {
    position: "absolute",
    height: "1.82%",
    width: "100%",
    top: "98.18%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#e4e9f2",
  },
  txtemailView: {
    position: "absolute",
    transform: [
      {
        translateY: -118,
      },
    ],
    top: "50%",
    right: 30,
    left: 30,
    height: 55,
    overflow: "hidden",
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
  groupIcon1: {
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
  logoIcon: {
    position: "absolute",
    height: "11.33%",
    width: "58.4%",
    top: "12.44%",
    right: "20.8%",
    bottom: "76.23%",
    left: "20.8%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  signInView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SignIn;
