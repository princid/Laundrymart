import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (!authUser) {
        setLoading(false);
      }
      if (authUser) {
        navigation.replace("Home");
      }
    });

    return unsubscribe;
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      console.log("user credential", userCredential);
      const user = userCredential.user;
      console.log("user details", user);
    });
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
      {loading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flex: 1,
          }}
        >
          <Text style={{ marginRight: 10 }}>Loading</Text>
          <ActivityIndicator size="large" color={"red"} />
        </View>
      ) : (
        <KeyboardAvoidingView>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text
              style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}
            >
              Log In
            </Text>
            <Text style={{ fontSize: 16, marginTop: 8, fontWeight: "600" }}>
              Log In to your account
            </Text>
          </View>

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
                  // borderRadius: 5,
                  marginLeft: 20,
                }}
              />
            </View>
            <Pressable
              onPress={login}
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
                Login
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate("Register")}
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
                Don't have an account?{" "}
                <Text style={{ color: "#318ce7" }}>Sign Up</Text>
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
