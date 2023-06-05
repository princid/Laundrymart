import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();
  const register = () => {
    if (email === "" || password === "" || phone === "") {
      Alert.alert(
        "Invalid Details",
        "Please fill all the details",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => console.log("OK Pressed") },
        ],
        { cancelable: false }
      );
    }
    createUserWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        console.log("user credential", userCredential);
        const user = userCredential._tokenResponse.email;
        const myUserUid = auth.currentUser.uid;

        setDoc(doc(db, "users", `${myUserUid}`), {
          email: user,
          phone: phone,
        });
      }
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        padding: 10,
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
            Register
          </Text>
          <Text style={{ fontSize: 16, marginTop: 8, fontWeight: "600" }}>
            Create a new account
          </Text>
        </View>
        {/* Email */}
        <View style={{ marginTop: 50 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Fontisto name="email" size={24} color="black" />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              //   placeholderTextColor={"black"}
              style={{
                fontSize: email ? 17 : 17,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 250,
                marginVertical: 15,
                // borderRadius: 5,
                marginLeft: 20,
              }}
            />
          </View>
          {/* Password */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons name="md-key-outline" size={24} color="black" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              style={{
                fontSize: password ? 17 : 17,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 250,
                marginVertical: 15,
                marginLeft: 20,
              }}
            />
          </View>
          {/* Phone Number */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Feather name="phone" size={24} color="black" />
            <TextInput
              placeholder="Phone Number"
              value={phone}
              onChangeText={(text) => setPhone(text)}
              style={{
                fontSize: password ? 17 : 17,
                borderBottomWidth: 1,
                borderBottomColor: "gray",
                width: 250,
                marginVertical: 15,
                marginLeft: 20,
              }}
            />
          </View>
          <Pressable
            onPress={register}
            style={{
              width: 170,
              backgroundColor: "#318ce7",
              padding: 10,
              borderRadius: 7,
              marginTop: 30,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                textAlign: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 20 }}
          >
            <Text
              style={{
                fontSize: 15,
                textAlign: "center",
                color: "gray",
                fontWeight: "500",
              }}
            >
              Already have an account?{" "}
              <Text style={{ color: "#318ce7" }}>Log In</Text>
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
