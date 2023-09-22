// import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import RowText from "../components/RowText";
import { weatherType } from "../utilities/WeatherType";

export default function CurrentWeather({ weatherData }) {
  const {
    wrapper,
    container,
    temperature,
    feels,
    highLowWrapper,
    highLow,
    bodyWrapper,
    description,
    message,
  } = styles;
  console.log(weatherData);
  return (
    <SafeAreaView style={wrapper}>
      <View style={container}>
        <Feather name="sun" size={100} color="black" />
        <Text style={temperature}>6</Text>
        <Text style={feels}>Feels like 5</Text>
        {/* <View style={styles.highLowWrapper}>
          <Text style={styles.highLow}>High: 8</Text>
          <Text style={styles.highLow}>Low: 6</Text>
        </View> */}
        <RowText
          messageOne={"High: 8"}
          messageTwo={"Low: 6"}
          containerStyles={highLowWrapper}
          messageOneStyles={highLow}
          messageTwoStyles={highLow}
        />
      </View>
      {/* <View style={bodyWrapper}>
        <Text style={description}>Its Sunny</Text>
        <Text style={message}>Its pefect t-shirt weather</Text>
      </View> */}
      <RowText
        messageOne={"Its sunny"}
        messageTwo={weatherType["Thunderstorm"].message}
        messageOneStyles={description}
        messageTwoStyles={message}
        containerStyles={bodyWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  temperature: {
    color: "black",
    fontSize: 48,
  },
  feels: {
    color: "black",
    fontSize: 30,
  },
  highLow: {
    color: "black",
    fontSize: 20,
  },
  highLowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 20,
  },
  description: {
    fontSize: 48,
  },
  message: {
    fontSize: 30,
  },
});
