import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const SalonSpecialists = () => {


  return (
    <View style={styles.salonSpecialistsView}>
      <View style={styles.backgroundView} />
      <View style={styles.makeupArtistView}>
        <View style={styles.card3View}>
          <View style={styles.rectangleView} />
          <View style={styles.rectangleView1} />
          <Text style={styles.theresaFloydText}>Theresa Floyd</Text>
        </View>
        <View style={styles.card2View}>
          <View style={styles.rectangleView2} />
          <View style={styles.rectangleView3} />
          <Text style={styles.willieCarpenText}>Willie Carpen</Text>
        </View>
        <View style={styles.card1View}>
          <View style={styles.rectangleView4} />
          <View style={styles.rectangleView5} />
          <Text style={styles.georgiaDanielsText}>Georgia Daniels</Text>
        </View>
        <Text style={styles.makeupArtistText}>Makeup Artist</Text>
      </View>
      <View style={styles.groupView}>
        <View style={styles.group23Copy6}>
          <View style={styles.rectangleView6} />
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle.png")}
          />
          <Text style={styles.georgiaDanielsText1}>Georgia Daniels</Text>
        </View>
        <View style={styles.group23Copy7}>
          <View style={styles.rectangleView7} />
          <Image
            style={styles.rectangleIcon1}
            resizeMode="cover"
            source={require("../assets/rectangle1.png")}
          />
          <Text style={styles.willieCarpenText1}>Willie Carpen</Text>
        </View>
        <View style={styles.group23Copy8}>
          <View style={styles.rectangleView8} />
          <Image
            style={styles.rectangleIcon2}
            resizeMode="cover"
            source={require("../assets/rectangle2.png")}
          />
          <Text style={styles.theresaFloydText1}>Theresa Floyd</Text>
        </View>
        <Text style={styles.srBarberText}>Sr.Barber</Text>
      </View>
      <View style={styles.shadownView} />
      <View style={styles.hairStylistView}>
        <View style={styles.card3View1}>
          <View style={styles.rectangleView9} />
          <View style={styles.rectangleView10} />
          <Text style={styles.brianParsonsText}>Brian Parsons</Text>
        </View>
        <View style={styles.card2View1}>
          <View style={styles.rectangleView11} />
          <View style={styles.rectangleView12} />
          <Text style={styles.pearlAustinText}>Pearl Austin</Text>
        </View>
        <View style={styles.card1View1}>
          <View style={styles.rectangleView13} />
          <View style={styles.rectangleView14} />
          <Text style={styles.roseHansenText}>Rose Hansen</Text>
        </View>
        <Text style={styles.hairStylistText}>Hair Stylist</Text>
      </View>
      <View style={styles.menuView}>
        <Text style={styles.aboutText}>About</Text>
        <Text style={styles.salonSpecialistsText}>Salon Specialists</Text>
        <Text style={styles.servicesText}>Services</Text>
        <Text style={styles.gText}>G</Text>
        <View style={styles.rectangleCopy2} />
      </View>
      <View style={styles.iPhoneXHomeIndicatorHomeI}>
        <View style={styles.rectangleView15} />
      </View>
      <View style={styles.photoView}>
        <View style={styles.rectangleView16} />
        <View style={styles.rectangleCopy4} />
        <View style={styles.rectangleCopyView} />
      </View>
      <View style={styles.ratingView}>
        <Text style={styles.text}>4.5</Text>
        <Image
          style={styles.icons}
          resizeMode="cover"
          source={require("../assets/22-icons.png")}
        />
      </View>
      <View style={styles.rectangleCopy3} />
      <View style={styles.iconsLineFilter2Copy}>
        <View style={styles.rectangleView17} />
        <Text style={styles.oPENText}>OPEN</Text>
      </View>
      <Text style={styles.margueriteCrossDay}>Marguerite Cross Day Salon</Text>
      <Image
        style={styles.iconsLineLeftArrowLongCop}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long-copy.png")}
      />
      <Image
        style={styles.iconsLineLeftArrowLongCop1}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long-copy-2.png")}
      />
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView18} />
          <Image
            style={styles.groupIcon}
            resizeMode="cover"
            source={require("../assets/group.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text1}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.iconsLineLeftArrowLong}
        resizeMode="cover"
        source={require("../assets/22-iconslineleft-arrow-long1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    position: "absolute",
    height: "64.04%",
    width: "100%",
    top: "35.96%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f4f4",
  },
  rectangleView: {
    position: "absolute",
    height: "100.61%",
    width: "100.8%",
    top: "-0.31%",
    right: "-0.4%",
    bottom: "-0.31%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView1: {
    position: "absolute",
    height: "76.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "23.31%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  theresaFloydText: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  card3View: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    right: 0,
    left: 274,
    height: 163,
    overflow: "hidden",
  },
  rectangleView2: {
    position: "absolute",
    height: "100.61%",
    width: "100.8%",
    top: "-0.31%",
    right: "-0.4%",
    bottom: "-0.31%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView3: {
    position: "absolute",
    height: "76.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "23.31%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  willieCarpenText: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  card2View: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    right: 137,
    left: 137,
    height: 163,
    overflow: "hidden",
  },
  rectangleView4: {
    position: "absolute",
    height: "100.61%",
    width: "100.8%",
    top: "-0.31%",
    right: "-0.4%",
    bottom: "-0.31%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView5: {
    position: "absolute",
    height: "76.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "23.31%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  georgiaDanielsText: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  card1View: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    right: 274,
    left: 0,
    height: 163,
    overflow: "hidden",
  },
  makeupArtistText: {
    position: "absolute",
    transform: [
      {
        translateY: -99,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 173,
  },
  makeupArtistView: {
    position: "absolute",
    transform: [
      {
        translateY: 124,
      },
    ],
    top: "50%",
    left: 15,
    width: 399,
    height: 198,
    overflow: "hidden",
  },
  rectangleView6: {
    position: "absolute",
    transform: [
      {
        translateY: -82,
      },
    ],
    top: "50%",
    left: -0.5,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    width: 126,
    height: 164,
  },
  rectangleIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -81.5,
      },
    ],
    top: "50%",
    left: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 125,
    height: 125,
  },
  georgiaDanielsText1: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  group23Copy6: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    left: 0,
    width: 125,
    height: 163,
  },
  rectangleView7: {
    position: "absolute",
    transform: [
      {
        translateY: -82,
      },
    ],
    top: "50%",
    left: -0.5,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    width: 126,
    height: 164,
  },
  rectangleIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -81.5,
      },
    ],
    top: "50%",
    left: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 125,
    height: 125,
  },
  willieCarpenText1: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  group23Copy7: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    left: 137,
    width: 125,
    height: 163,
  },
  rectangleView8: {
    position: "absolute",
    transform: [
      {
        translateY: -82,
      },
    ],
    top: "50%",
    left: -0.5,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
    width: 126,
    height: 164,
  },
  rectangleIcon2: {
    position: "absolute",
    transform: [
      {
        translateY: -81.5,
      },
    ],
    top: "50%",
    left: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: 125,
    height: 125,
  },
  theresaFloydText1: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  group23Copy8: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    left: 274,
    width: 125,
    height: 163,
  },
  srBarberText: {
    position: "absolute",
    transform: [
      {
        translateY: -99,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 173,
  },
  groupView: {
    position: "absolute",
    transform: [
      {
        translateY: 347,
      },
    ],
    top: "50%",
    left: 15,
    width: 399,
    height: 198,
    overflow: "hidden",
  },
  shadownView: {
    position: "absolute",
    height: "7.14%",
    width: "100%",
    top: "100%",
    right: "0%",
    bottom: "-7.14%",
    left: "0%",
  },
  rectangleView9: {
    position: "absolute",
    height: "100.61%",
    width: "100.8%",
    top: "-0.31%",
    right: "-0.4%",
    bottom: "-0.31%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView10: {
    position: "absolute",
    height: "76.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "23.31%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  brianParsonsText: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  card3View1: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    right: 0,
    left: 274,
    height: 163,
    overflow: "hidden",
  },
  rectangleView11: {
    position: "absolute",
    height: "100.61%",
    width: "100.8%",
    top: "-0.31%",
    right: "-0.4%",
    bottom: "-0.31%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView12: {
    position: "absolute",
    height: "76.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "23.31%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  pearlAustinText: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  card2View1: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    right: 137,
    left: 137,
    height: 163,
    overflow: "hidden",
  },
  rectangleView13: {
    position: "absolute",
    height: "100.61%",
    width: "100.8%",
    top: "-0.31%",
    right: "-0.4%",
    bottom: "-0.31%",
    left: "-0.4%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "rgba(244, 244, 244, 0.8)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#f0f0f0",
    borderWidth: 1,
  },
  rectangleView14: {
    position: "absolute",
    height: "76.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "23.31%",
    left: "0%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#8f9bb3",
  },
  roseHansenText: {
    position: "absolute",
    transform: [
      {
        translateY: 53.5,
      },
    ],
    top: "50%",
    left: 10,
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 105,
  },
  card1View1: {
    position: "absolute",
    transform: [
      {
        translateY: -64,
      },
    ],
    top: "50%",
    right: 274,
    left: 0,
    height: 163,
    overflow: "hidden",
  },
  hairStylistText: {
    position: "absolute",
    transform: [
      {
        translateY: -99,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 173,
  },
  hairStylistView: {
    position: "absolute",
    transform: [
      {
        translateY: -99,
      },
    ],
    top: "50%",
    left: 15,
    width: 399,
    height: 198,
    overflow: "hidden",
  },
  aboutText: {
    position: "absolute",
    transform: [
      {
        translateY: -20.5,
      },
    ],
    top: "50%",
    left: 168,
    fontSize: 17,
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "left",
    width: 44,
  },
  salonSpecialistsText: {
    position: "absolute",
    transform: [
      {
        translateY: -20.5,
      },
    ],
    top: "50%",
    left: 0,
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "left",
    width: 128,
  },
  servicesText: {
    position: "absolute",
    transform: [
      {
        translateY: -20.5,
      },
    ],
    top: "50%",
    left: 252,
    fontSize: 17,
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "left",
    width: 61,
  },
  gText: {
    position: "absolute",
    transform: [
      {
        translateY: -20.5,
      },
    ],
    top: "50%",
    left: 353,
    fontSize: 17,
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "left",
    width: 61,
  },
  rectangleCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: 19.5,
      },
    ],
    top: "50%",
    left: 0,
    borderRadius: 2,
    backgroundColor: "#ff7e00",
    width: 33,
    height: 1,
  },
  menuView: {
    position: "absolute",
    transform: [
      {
        translateY: -155,
      },
    ],
    top: "50%",
    left: 15,
    width: 414,
    height: 41,
  },
  rectangleView15: {
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
  rectangleView16: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#8f9bb3",
  },
  rectangleCopy4: {
    position: "absolute",
    height: "38.16%",
    width: "100%",
    top: "100%",
    right: "0%",
    bottom: "-38.16%",
    left: "0%",
  },
  rectangleCopyView: {
    position: "absolute",
    height: "38.16%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "61.84%",
    left: "0%",
  },
  photoView: {
    position: "absolute",
    height: "28.08%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "71.92%",
    left: "0%",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    right: 23,
    fontSize: 15,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "right",
    width: 30,
  },
  icons: {
    position: "absolute",
    transform: [
      {
        translateY: -10,
      },
    ],
    top: "50%",
    right: 0,
    width: 20,
    height: 20,
  },
  ratingView: {
    position: "absolute",
    transform: [
      {
        translateY: -242,
      },
    ],
    top: "50%",
    right: 15,
    width: 53,
    height: 20,
  },
  rectangleCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -115,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  rectangleView17: {
    position: "absolute",
    height: "75%",
    width: "91.53%",
    top: "12.5%",
    right: "5.08%",
    bottom: "12.5%",
    left: "3.39%",
    borderRadius: 4,
    backgroundColor: "#4cd964",
  },
  oPENText: {
    position: "absolute",
    transform: [
      {
        translateY: -7.5,
      },
    ],
    width: "59.32%",
    top: "50%",
    right: "20.34%",
    left: "20.34%",
    fontSize: 13,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "left",
  },
  iconsLineFilter2Copy: {
    position: "absolute",
    transform: [
      {
        translateY: -217,
      },
    ],
    top: "50%",
    right: 15,
    width: 59,
    height: 24,
  },
  margueriteCrossDay: {
    position: "absolute",
    transform: [
      {
        translateY: -251,
      },
    ],
    top: "50%",
    left: 15,
    fontSize: 24,
    fontWeight: "600",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "left",
    width: 189,
  },
  iconsLineLeftArrowLongCop: {
    position: "absolute",
    top: 49,
    right: 15,
    width: 24,
    height: 24,
  },
  iconsLineLeftArrowLongCop1: {
    position: "absolute",
    top: 49,
    right: 54,
    width: 24,
    height: 24,
  },
  rectangleView18: {
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
  text1: {
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
  iconsLineLeftArrowLong: {
    position: "absolute",
    top: 49,
    left: 15,
    width: 24,
    height: 24,
  },
  salonSpecialistsView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SalonSpecialists;
