import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const InviteFriends = () => {



  return (
    <View style={styles.inviteFriendsView}>
      <View style={styles.backgroundView} />
      <View style={styles.inviteFriendsMethods}>
        <View style={styles.rectangleCopy4} />
        <View style={styles.contactsView}>
          <Image
            style={styles.ovalIcon}
            resizeMode="cover"
            source={require("../assets/oval6.png")}
          />
          <Text style={styles.contactsText}>Contacts</Text>
          <Image
            style={styles.iconsFilledDiscoverCopy2}
            resizeMode="cover"
            source={require("../assets/22-iconsfilleddiscover-copy-2.png")}
          />
        </View>
        <View style={styles.instagramView}>
          <Image
            style={styles.ovalIcon1}
            resizeMode="cover"
            source={require("../assets/oval7.png")}
          />
          <Text style={styles.instagramText}>Instagram</Text>
          <Image
            style={styles.logoIcon}
            resizeMode="cover"
            source={require("../assets/logo1.png")}
          />
        </View>
        <View style={styles.twitterView}>
          <Image
            style={styles.ovalIcon2}
            resizeMode="cover"
            source={require("../assets/oval8.png")}
          />
          <Text style={styles.twitterText}>Twitter</Text>
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group-31.png")}
          />
        </View>
        <View style={styles.fbView}>
          <Image
            style={styles.ovalIcon3}
            resizeMode="cover"
            source={require("../assets/oval9.png")}
          />
          <Text style={styles.facebookText}>Facebook</Text>
          <Image
            style={styles.fill1Icon}
            resizeMode="cover"
            source={require("../assets/fill-1.png")}
          />
        </View>
        <Image
          style={styles.iconsLineRightArrowCopy8}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy81}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy82}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
        <Image
          style={styles.iconsLineRightArrowCopy83}
          resizeMode="cover"
          source={require("../assets/22-iconslineright-arrow-copy-8.png")}
        />
      </View>
      <View style={styles.codeShareView}>
        <View style={styles.backgroundView1} />
        <View style={styles.btncodeView}>
          <View style={styles.groupView}>
            <View style={styles.rectangleCopyView} />
            <Text style={styles.hK457fb068Text}>HK457fb068</Text>
          </View>
          <View style={styles.groupView1}>
            <View style={styles.rectangleView} />
            <Text style={styles.copyText}>Copy</Text>
          </View>
        </View>
        <Text style={styles.pleaseShareTheCod}>
          Please share the code below for your friends to join the HASA.
        </Text>
        <Image
          style={styles.artworkIcon}
          resizeMode="cover"
          source={require("../assets/artwork.png")}
        />
      </View>
      <View style={styles.iPhoneXHomeIndicatorHomeI}>
        <View style={styles.rectangleView1} />
      </View>
      <Image
        style={styles.iconsLineLeftArrowLong}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long.png")}
      />
      <Text style={styles.inviteFriendsText}>Invite Friends</Text>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.groupIcon1}
            resizeMode="cover"
            source={require("../assets/group1.png")}
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
  backgroundView: {
    position: "absolute",
    height: "87.68%",
    width: "100%",
    top: "12.32%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f4f4",
  },
  rectangleCopy4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(140, 136, 175, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  ovalIcon: {
    position: "absolute",
    height: "100%",
    width: "32.08%",
    top: "0%",
    right: "67.92%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  contactsText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "56.6%",
    top: "50%",
    right: "0%",
    left: "43.4%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  iconsFilledDiscoverCopy2: {
    position: "absolute",
    height: "70.59%",
    width: "22.64%",
    top: "14.71%",
    right: "72.64%",
    bottom: "14.71%",
    left: "4.72%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  contactsView: {
    position: "absolute",
    transform: [
      {
        translateY: 71.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 106,
    height: 34,
    overflow: "hidden",
  },
  ovalIcon1: {
    position: "absolute",
    height: "97.14%",
    width: "30.63%",
    top: "2.44%",
    right: "69.37%",
    bottom: "0.42%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  instagramText: {
    position: "absolute",
    transform: [
      {
        translateY: -8.65,
      },
    ],
    width: "58.56%",
    top: "50%",
    right: "0%",
    left: "41.44%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  logoIcon: {
    position: "absolute",
    height: "51.43%",
    width: "16.22%",
    top: "25.29%",
    right: "76.58%",
    bottom: "23.28%",
    left: "7.21%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  instagramView: {
    position: "absolute",
    transform: [
      {
        translateY: 11.65,
      },
    ],
    top: "50%",
    left: 12,
    width: 111,
    height: 35,
    overflow: "hidden",
  },
  ovalIcon2: {
    position: "absolute",
    height: "100%",
    width: "37.36%",
    top: "0%",
    right: "62.64%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  twitterText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "49.45%",
    top: "50%",
    right: "0%",
    left: "50.55%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    height: "41.18%",
    width: "18.68%",
    top: "29.41%",
    right: "71.43%",
    bottom: "29.41%",
    left: "9.89%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  twitterView: {
    position: "absolute",
    transform: [
      {
        translateY: -46.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 91,
    height: 34,
    overflow: "hidden",
  },
  ovalIcon3: {
    position: "absolute",
    height: "100%",
    width: "30.91%",
    top: "0%",
    right: "69.09%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  facebookText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "58.18%",
    top: "50%",
    right: "0%",
    left: "41.82%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#222b45",
    textAlign: "left",
  },
  fill1Icon: {
    position: "absolute",
    height: "61.76%",
    width: "9.09%",
    top: "20.59%",
    right: "80%",
    bottom: "17.65%",
    left: "10.91%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  fbView: {
    position: "absolute",
    transform: [
      {
        translateY: -105.5,
      },
    ],
    top: "50%",
    left: 12,
    width: 110,
    height: 34,
    overflow: "hidden",
  },
  iconsLineRightArrowCopy8: {
    position: "absolute",
    transform: [
      {
        translateY: 79.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy81: {
    position: "absolute",
    transform: [
      {
        translateY: 20.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy82: {
    position: "absolute",
    transform: [
      {
        translateY: -38.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  iconsLineRightArrowCopy83: {
    position: "absolute",
    transform: [
      {
        translateY: -97.5,
      },
    ],
    top: "50%",
    right: 12,
    width: 18,
    height: 18,
    opacity: 0.15,
  },
  inviteFriendsMethods: {
    position: "absolute",
    transform: [
      {
        translateY: 42,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 251,
    overflow: "hidden",
  },
  backgroundView1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(140, 136, 175, 0.07)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    elevation: 20,
    shadowOpacity: 1,
  },
  rectangleCopyView: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 8,
    backgroundColor: "#f4f4f4",
  },
  hK457fb068Text: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 188,
  },
  groupView: {
    position: "absolute",
    transform: [
      {
        translateY: -22,
      },
    ],
    top: "50%",
    right: 59,
    left: 0,
    height: 44,
    overflow: "hidden",
  },
  rectangleView: {
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
  copyText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    width: "86.36%",
    top: "50%",
    right: "6.82%",
    left: "6.82%",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF UI Display",
    color: "#fff",
    textAlign: "center",
  },
  groupView1: {
    position: "absolute",
    transform: [
      {
        translateY: -22,
      },
    ],
    top: "50%",
    right: 0,
    width: 44,
    height: 44,
    overflow: "hidden",
  },
  btncodeView: {
    position: "absolute",
    transform: [
      {
        translateY: 91.5,
      },
    ],
    top: "50%",
    right: 12,
    left: 12,
    height: 44,
    overflow: "hidden",
  },
  pleaseShareTheCod: {
    position: "absolute",
    transform: [
      {
        translateY: 18.5,
      },
      {
        translateX: -122.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "center",
    width: 245,
  },
  artworkIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -127.5,
      },
      {
        translateX: -109.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 219,
    height: 121,
  },
  codeShareView: {
    position: "absolute",
    transform: [
      {
        translateY: -291,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 321,
    overflow: "hidden",
  },
  rectangleView1: {
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
  iconsLineLeftArrowLong: {
    position: "absolute",
    top: 49,
    left: 15,
    width: 24,
    height: 24,
  },
  inviteFriendsText: {
    position: "absolute",
    transform: [
      {
        translateY: -355,
      },
      {
        translateX: -50.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "center",
  },
  rectangleView2: {
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
    color: "#000",
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
  inviteFriendsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default InviteFriends;
