import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ImageBackground,
} from "react-native";
import ListItem from "../components/ListItem";

const DATA = [
  {
    dt_txt: "2022-08-30 15:00:00",
    main: {
      temp_min: 296.76,
      temp_max: 297.87,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 18:00:00",
    main: {
      temp_min: 292.84,
      temp_max: 295.45,
    },
    weather: [
      {
        main: "Rain",
      },
    ],
  },
  {
    dt_txt: "2022-08-30 21:00:00",
    main: {
      temp_min: 290.31,
      temp_max: 292.46,
    },
    weather: [
      {
        main: "Clouds",
      },
    ],
  },
];

export default function UpcomingWeather() {
  const renderItem = ({ item }) => {
    return (
      <ListItem
        condition={item.weather[0].main}
        dt_txt={item.dt_txt}
        min={item.main.temp_min}
        max={item.main.temp_max}
      />
    );
  };

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      {/* <StatusBar
        // barStyle="light-content" // Use "dark-content" for dark text on light background
        backgroundColor="skyblue" // Customize the background color as needed
      /> */}
      <ImageBackground
        source={require("../../assets/cloudImage.jpg")}
        style={image}
      >
        <View>
          <Text>UpcomingWeather</Text>

          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt.toString()} // Use a unique key for each item
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
    backgroundColor: "skyblue",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
  },
});
