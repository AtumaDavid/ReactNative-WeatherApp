// import { StatusBar } from "expo-status-bar";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { Feather } from "@expo/vector-icons";
// import CurrentWeather from "./src/screens/CurrentWeather";
// import UpcomingWeather from "./src/screens/UpcomingWeather";
// import City from "./src/screens/City";
// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
      {/* <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "grey",
        }}
      >
        <Tab.Screen
          name={"Current"}
          component={CurrentWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"droplet"}
                size={25}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"Upcoming"}
          component={UpcomingWeather}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"clock"}
                size={25}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
        <Tab.Screen
          name={"City"}
          component={City}
          options={{
            tabBarIcon: ({ focused }) => (
              <Feather
                name={"home"}
                size={25}
                color={focused ? "blue" : "black"}
              />
            ),
          }}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
