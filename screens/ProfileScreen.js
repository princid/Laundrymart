import { StyleSheet, Text, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const user = auth.currentUser;
  const navigation = useNavigation();
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        navigation.replace("Login");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Pressable style={{ marginVertical: 10 }}>
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            color: "#088f8f",
            fontWeight: "bold",
          }}
        >
          Welcome! {user.email}
        </Text>
      </Pressable>

      <Pressable
        style={{
          width: 170,
          backgroundColor: "#DE3163",
          padding: 10,
          borderRadius: 7,
          marginTop: 30,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onPress={signOutUser}
      >
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Sign Out
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
