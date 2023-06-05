# Laundrymart


## Dependencies to install :
Project Setup :
- `npx create-expo-app laundrymart`
- `cd laundrymart`
- `npx expo start`

Expo-Location (allows reading geolocation information from the device):
- `npx expo install expo-location`

For Carousel Box (react-native-image-slider-box):
- `npm i react-native-image-slider-box`

Redux Toolkit:
- `npm install @reduxjs/toolkit`
- `npm add react-redux`

For Navigation:
- `npm install @react-navigation/native`
- `npx expo install react-native-screens react-native-safe-area-context`
- `npm install @react-navigation/native-stack`

For Simple Date Picker:
- `npm install --save moment`

For Firebase:
- `npx expo install firebase`
- `npm install -g firebase-tools`

Order Placed Animation: (Lottie React Native)
- `npx expo install lottie-react-native`
- Also add `sparkle.json` & `thumbs.json` file in your assets folder.


## How to deploy:
- Run this command in your terminal `npm install -g expo-cli`
- then run `expo login`
- then put your login credentials (username & password)
- And once you're logged in, run `expo publish` to publish the app to the expo app store.
- then, if it will ask "In order to publish an update, expo-updates needs to be installed. Do you want to install it now?", then just simply click "Y". It will basically insall the expo-updates.

## Run the app:
- Install `Expo Go` app on your device.
- Then scan this QR-code: <br><br>
 ![image](https://github.com/princid/Laundrymart/assets/90444477/e839a37a-0a90-4140-8dd3-e22643807d24) <br>
 
- Or, open this link on your device: `exp://exp.host/@princid/laundrymart?release-channel=default`

## Resources used :
- [Expo Icons](https://icons.expo.fyi/)
- [Color Shades](https://htmlcolorcodes.com/color-picker/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Redux Toolkit](https://redux-toolkit.js.org/introduction/getting-started)
- [React Navigation](https://reactnavigation.org/docs/getting-started)
- [Image Slider Carousel Box](https://www.npmjs.com/package/react-native-image-slider-box)
- [Horizontal Date Picker](https://github.com/AwrminKhodaei/react-native-horizontal-datepicker)
- [Simple Date Picker in React Native](https://dev.to/kharioki/horizontal-calendar-a-simple-date-picker-for-react-native-4h2)
- [rneui/themed](https://www.npmjs.com/package/@rneui/themed)
- [React Native Config](https://www.npmjs.com/package/react-native-config)
- [Expo Firebase](https://docs.expo.dev/guides/using-firebase/)
- [Lottie React Native Animation](https://docs.expo.dev/versions/latest/sdk/lottie/)

