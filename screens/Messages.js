import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Messages = () => {
  return (
    <View style={styles.messagesView}>
      <View style={styles.backgroundView} />
      <View style={styles.card6View}>
        <Text style={styles.youngGirlsSalon}>Young Girls Salon</Text>
        <Text style={styles.youCanComeInThe}>You can come in the aftern…</Text>
        <Text style={styles.jun2Text}>Jun 2</Text>
        <Image
          style={styles.ovalIcon}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
      </View>
      <View style={styles.card5View}>
        <View style={styles.rectangleCopy8} />
        <Text style={styles.daleHowardFriend}>{`Dale Howard & Friends`}</Text>
        <Text style={styles.thankYouText}>Thank you.</Text>
        <Text style={styles.jun10Text}>Jun 10</Text>
        <Image
          style={styles.ovalIcon1}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
      </View>
      <View style={styles.card4View}>
        <View style={styles.rectangleCopy7} />
        <Text style={styles.shermanBarberShop}>Sherman Barber Shop</Text>
        <Text style={styles.okayLetMeCheckT}>Okay, let me check this.</Text>
        <Text style={styles.daysAgoText}>2 days ago</Text>
        <Image
          style={styles.groupIcon}
          resizeMode="cover"
          source={require("../assets/group-51.png")}
        />
      </View>
      <View style={styles.card3View}>
        <View style={styles.rectangleCopy6} />
        <Text style={styles.norahBeautySalon}>Norah Beauty Salon</Text>
        <Text style={styles.yahYouCanCallMe}>Yah, you can call me at 3…</Text>
        <Text style={styles.yesterdayText}>Yesterday</Text>
        <Image
          style={styles.groupIcon1}
          resizeMode="cover"
          source={require("../assets/group-51.png")}
        />
      </View>
      <View style={styles.card2View}>
        <View style={styles.rectangleCopy5} />
        <Text style={styles.carolineBriggsSalo}>Caroline Briggs Salon</Text>
        <Text style={styles.ohSoNice}>Oh, so nice.</Text>
        <Text style={styles.aMText}>8:30 AM</Text>
        <Image
          style={styles.ovalIcon2}
          resizeMode="cover"
          source={require("../assets/oval.png")}
        />
      </View>
      <View style={styles.card1View}>
        <View style={styles.rectangleCopy4} />
        <Text style={styles.margueriteCrossDa}>Marguerite Cross Da…</Text>
        <Text style={styles.hiJacksonCanYou}>Hi Jackson, can you tell …</Text>
        <Text style={styles.nowText}>Now</Text>
        <Image
          style={styles.groupIcon2}
          resizeMode="cover"
          source={require("../assets/group-51.png")}
        />
      </View>
      <View style={styles.navbarView}>
        <View style={styles.groupView}>
          <Image
            style={styles.path2Icon}
            resizeMode="cover"
            source={require("../assets/path-2.png")}
          />
          <View style={styles.iPhoneXHomeIndicatorHomeI}>
            <View style={styles.rectangleView} />
          </View>
          <View style={styles.view}>
            <Image
              style={styles.iconsFilledGrid}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid.png")}
            />
            <View style={styles.navbarTextDefaultView}>
              <Text style={styles.discoverText}>Discover</Text>
            </View>
          </View>
          <View style={styles.view1}>
            <Image
              style={styles.iconsFilledGridCopy9}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy-9.png")}
            />
            <View style={styles.navbarTextActiveView}>
              <Text style={styles.discoverText1}>Nearby</Text>
            </View>
          </View>
          <View style={styles.view2}>
            <Image
              style={styles.iconsFilledGridCopy}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy.png")}
            />
            <View style={styles.navbarTextActiveCopy2}>
              <Text style={styles.discoverText2}>Appointment</Text>
            </View>
          </View>
          <View style={styles.view3}>
            <Image
              style={styles.iconsFilledGridCopy2}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy-2.png")}
            />
            <View style={styles.navbarTextActiveView1}>
              <Text style={styles.discoverText3}>Messages</Text>
            </View>
          </View>
          <View style={styles.view4}>
            <Image
              style={styles.iconsFilledGridCopy3}
              resizeMode="cover"
              source={require("../assets/22-iconsfilledgrid-copy-3.png")}
            />
            <View style={styles.navbarTextActiveCopy4}>
              <Text style={styles.discoverText4}>Profiles</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.btnsearchView}>
        <Image
          style={styles.groupIcon3}
          resizeMode="cover"
          source={require("../assets/group-21.png")}
        />
        <View style={styles.groupView1}>
          <View style={styles.rectangleView1} />
          <Text style={styles.searchText}>Search</Text>
          <Image
            style={styles.iconsLineLocation}
            resizeMode="cover"
            source={require("../assets/22-iconslinelocation1.png")}
          />
        </View>
      </View>
      <View style={styles.rectangleCopy3} />
      <View style={styles.groupView2}>
        <Text style={styles.messagesText}>Messages</Text>
        <View style={styles.rectangleCopy2} />
        <Image
          style={styles.ovalIcon3}
          resizeMode="cover"
          source={require("../assets/oval13.png")}
        />
        <Text style={styles.text}>3</Text>
      </View>
      <Text style={styles.callsText}>Calls</Text>
      <View style={styles.iPhoneXStatusBarsStatusBa1}>
        <View style={styles.iPhoneXStatusBarsStatusBa}>
          <View style={styles.rectangleView2} />
          <Image
            style={styles.groupIcon4}
            resizeMode="cover"
            source={require("../assets/group1.png")}
          />
          <View style={styles.timeStyleView}>
            <Text style={styles.timeText}>
              <Text style={styles.text1}>9:4</Text>1
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
    height: "87.93%",
    width: "100%",
    top: "12.07%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f4f4f4",
  },
  youngGirlsSalon: {
    position: "absolute",
    transform: [
      {
        translateY: -21.5,
      },
    ],
    top: "50%",
    left: 70,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 182,
  },
  youCanComeInThe: {
    position: "absolute",
    transform: [
      {
        translateY: 3.5,
      },
    ],
    top: "50%",
    left: 70,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 182,
  },
  jun2Text: {
    position: "absolute",
    transform: [
      {
        translateY: 3.5,
      },
    ],
    top: "50%",
    right: 0,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "right",
    width: 71,
  },
  ovalIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -27.5,
      },
    ],
    top: "50%",
    left: 0,
    width: 55,
    height: 55,
  },
  card6View: {
    position: "absolute",
    transform: [
      {
        translateY: 205,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 55,
    overflow: "hidden",
  },
  rectangleCopy8: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  daleHowardFriend: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 182,
  },
  thankYouText: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 182,
  },
  jun10Text: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "right",
    width: 71,
  },
  ovalIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  card5View: {
    position: "absolute",
    transform: [
      {
        translateY: 119,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy7: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  shermanBarberShop: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 174,
  },
  okayLetMeCheckT: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 182,
  },
  daysAgoText: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "right",
    width: 71,
  },
  groupIcon: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  card4View: {
    position: "absolute",
    transform: [
      {
        translateY: 33,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy6: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  norahBeautySalon: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 175,
  },
  yahYouCanCallMe: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 182,
  },
  yesterdayText: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "right",
    width: 71,
  },
  groupIcon1: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  card3View: {
    position: "absolute",
    transform: [
      {
        translateY: -53,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy5: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  carolineBriggsSalo: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 182,
  },
  ohSoNice: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 182,
  },
  aMText: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "right",
    width: 71,
  },
  ovalIcon2: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  card2View: {
    position: "absolute",
    transform: [
      {
        translateY: -139,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  rectangleCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: 34.5,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  margueriteCrossDa: {
    position: "absolute",
    transform: [
      {
        translateY: -29.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 17,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#2e3a59",
    textAlign: "left",
    width: 240,
  },
  hiJacksonCanYou: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    left: 85,
    fontSize: 15,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "left",
    width: 182,
  },
  nowText: {
    position: "absolute",
    transform: [
      {
        translateY: -4.5,
      },
    ],
    top: "50%",
    right: 15,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#8f9bb3",
    textAlign: "right",
    width: 71,
  },
  groupIcon2: {
    position: "absolute",
    transform: [
      {
        translateY: -35.5,
      },
    ],
    top: "50%",
    left: 15,
    width: 55,
    height: 55,
  },
  card1View: {
    position: "absolute",
    transform: [
      {
        translateY: -225,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    height: 71,
    overflow: "hidden",
  },
  path2Icon: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
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
    height: "50%",
    width: "100%",
    top: "50%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  iconsFilledGrid: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextDefaultView: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view: {
    position: "absolute",
    transform: [
      {
        translateY: -24,
      },
    ],
    top: "50%",
    left: 0,
    width: 75,
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy9: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText1: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveView: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view1: {
    position: "absolute",
    width: "20%",
    right: "60%",
    bottom: 18,
    left: "20%",
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText2: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view2: {
    position: "absolute",
    width: "20%",
    right: "40%",
    bottom: 18,
    left: "40%",
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy2: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText3: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontWeight: "500",
    fontFamily: "SF UI Display",
    color: "#ff7e00",
    textAlign: "center",
  },
  navbarTextActiveView1: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view3: {
    position: "absolute",
    width: "20%",
    right: "20%",
    bottom: 18,
    left: "60%",
    height: 40,
    overflow: "hidden",
  },
  iconsFilledGridCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -20,
      },
      {
        translateX: -11.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 24,
    height: 24,
  },
  discoverText4: {
    position: "absolute",
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    fontSize: 10,
    fontFamily: "SF UI Display",
    color: "#c5cee0",
    textAlign: "center",
  },
  navbarTextActiveCopy4: {
    position: "absolute",
    transform: [
      {
        translateY: 8,
      },
      {
        translateX: -37.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 75,
    height: 12,
  },
  view4: {
    position: "absolute",
    transform: [
      {
        translateY: -24,
      },
    ],
    top: "50%",
    right: 0,
    width: 75,
    height: 40,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    transform: [
      {
        translateY: -34,
      },
    ],
    width: "100%",
    top: "50%",
    right: "0%",
    left: "0%",
    height: 68,
    overflow: "hidden",
  },
  navbarView: {
    position: "absolute",
    height: "8.37%",
    width: "100%",
    top: "91.63%",
    right: "0%",
    bottom: "0%",
    left: "0%",
  },
  groupIcon3: {
    position: "absolute",
    transform: [
      {
        translateY: -21,
      },
    ],
    top: "50%",
    right: 0,
    width: 42,
    height: 42,
    overflow: "hidden",
  },
  rectangleView1: {
    position: "absolute",
    height: "100.73%",
    width: "100.35%",
    top: "-0.36%",
    right: "-0.17%",
    bottom: "-0.36%",
    left: "-0.17%",
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
  searchText: {
    position: "absolute",
    transform: [
      {
        translateY: -9,
      },
    ],
    top: "50%",
    left: 35,
    fontSize: 15,
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "left",
  },
  iconsLineLocation: {
    position: "absolute",
    transform: [
      {
        translateY: -12,
      },
    ],
    top: "50%",
    left: 6,
    width: 24,
    height: 24,
  },
  groupView1: {
    position: "absolute",
    transform: [
      {
        translateY: -21,
      },
    ],
    top: "50%",
    right: 57,
    left: 0,
    height: 42,
    overflow: "hidden",
  },
  btnsearchView: {
    position: "absolute",
    transform: [
      {
        translateY: -292,
      },
    ],
    top: "50%",
    right: 15,
    left: 15,
    height: 42,
    overflow: "hidden",
  },
  rectangleCopy3: {
    position: "absolute",
    transform: [
      {
        translateY: -308,
      },
    ],
    top: "50%",
    right: 0,
    left: 0,
    backgroundColor: "#e4e9f2",
    height: 1,
  },
  messagesText: {
    position: "absolute",
    height: "72.73%",
    width: "51.06%",
    top: "12.12%",
    right: "24.47%",
    bottom: "15.15%",
    left: "24.47%",
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#ff7e00",
    textAlign: "center",
  },
  rectangleCopy2: {
    position: "absolute",
    height: "3.03%",
    width: "99.73%",
    top: "96.97%",
    right: "0.27%",
    bottom: "0%",
    left: "0%",
    borderRadius: 2,
    backgroundColor: "#ff7e00",
  },
  ovalIcon3: {
    position: "absolute",
    height: "39.39%",
    width: "6.91%",
    top: "0%",
    right: "19.68%",
    bottom: "60.61%",
    left: "73.4%",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  text: {
    position: "absolute",
    transform: [
      {
        translateY: -15.5,
      },
    ],
    width: "3.19%",
    top: "50%",
    right: "21.28%",
    left: "75.53%",
    fontSize: 8,
    fontWeight: "700",
    fontFamily: "SF Pro Display",
    color: "#fff",
    textAlign: "left",
  },
  groupView2: {
    position: "absolute",
    transform: [
      {
        translateY: -340,
      },
      {
        translateX: -187.5,
      },
    ],
    top: "50%",
    left: "50%",
    width: 188,
    height: 33,
    overflow: "hidden",
  },
  callsText: {
    position: "absolute",
    transform: [
      {
        translateY: -336,
      },
      {
        translateX: 63.5,
      },
    ],
    top: "50%",
    left: "50%",
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "SF Pro Display",
    color: "#c5cee0",
    textAlign: "center",
    width: 62,
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
  groupIcon4: {
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
  messagesView: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Messages;
