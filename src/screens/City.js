import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
// import { Feather } from "@expo/vector-icons";
import IconText from "../components/IconText";

export default function City() {
  const {
    container,
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require("../../assets/cityBackground.jpg")}
        style={imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={populationWrapper}>
          <IconText
            iconName={"user"}
            iconColor={"black"}
            bodyText={"9000"}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          {/* <Feather name={"sunrise"} size={50} color={"white"} />
          <Text style={riseSetText}>10:46:58am</Text>
          <Feather name={"sunset"} size={50} color={"white"} />
          <Text style={riseSetText}>17:28:15pm</Text> */}
          <IconText
            iconName={"sunrise"}
            iconColor={"white"}
            bodyText={"10:46:58am"}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={"sunset"}
            iconColor={"white"}
            bodyText={"17:28:15pm"}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "black",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 30,
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
});
