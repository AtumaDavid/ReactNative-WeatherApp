# API from: openweatherapp. (https://openweathermap.org/forecast5)

# icons from (https://icons.expo.fyi/Index)

# Navigation (**React Navigation (Builtin In Expo)**) (https://reactnavigation.org/)

- npm install @react-navigation/native
- npx expo install react-native-screens react-native-safe-area-context

**For Bottom Tabs Navigation**

- `npm install @react-navigation/bottom-tabs`

# Calling Weather API

**API Call**

- `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`
  **To get Longitude and Latitude use `Expo Location`(App is created with Expo)**
- (Note: If app is not created with Expo, use Geo Location from react Native)
- `expo-location` allows reading geolocation information from the device. Your app can poll for the current location or subscribe to location update events.
- `npx expo install expo-location`

# .env

- `npm install -D react-native-dotenv`
- Go to babel config and add plugin
- Add ` Plugins: ["module:react-native-dotenv"],`(under presets)
- create `.env` file
  **NOTE: Reload Projet in terminal when Babel has been reconfigured with (`expo start --clear`)**

# FETCH DATA

- Using the fetch API from React Native to work with Networking
- Docs: `https://reactnative.dev/docs/network`
