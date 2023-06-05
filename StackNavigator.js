import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import PickUpScreen from "./screens/PickUpScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import { User, onAuthStateChanged } from "firebase/auth";
import { FIREBASE_AUTH } from "./firebase";
import ProfileScreen from "./screens/ProfileScreen";
import OrderScreen from "./screens/OrderScreen";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  // const InsideStack = createNativeStackNavigator();

  // function InsideLayout() {
  //   return (
  //     <InsideStack.Navigator>
  //       <InsideStack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <InsideStack.Screen
  //         name="PickUp"
  //         component={PickUpScreen}
  //         options={{ headerShown: false }}
  //       />
  //       <InsideStack.Screen
  //         name="Cart"
  //         component={CartScreen}
  //         options={{ headerShown: false }}
  //       />
  //     </InsideStack.Navigator>
  //   );
  // }

  // const {user, setUser} = useState();

  // useEffect(() => {
  //   onAuthStateChanged(FIREBASE_AUTH, (user) =>{
  //     console.log("user", user);
  //     setUser(user);
  //   });
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PickUp"
          component={PickUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Order" component={OrderScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
