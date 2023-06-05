import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
  Pressable,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Carousel from "../components/Carousel";
import Services from "../components/Services";
import ClothItem from "../components/ClothItem";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../ProductReducer";
import { useNavigation } from "@react-navigation/native";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const HomeScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);

  const [items, setItems] = useState([]);

  const total = cart.map((item) => item.quantity * item.price).reduce((current, previous) => current + previous, 0);

  const navigation = useNavigation();

  //state to be initialized, so that we can store our address here.
  const [displayCurrentAddress, setDisplayCurrentAddress] = useState(
    "Waiting for your current location..."
  );
  const [locationServicesEnabled, setLocationServicesEnabled] = useState(false);

  //function to check if location is enabled, it will run once because of the empty array as second argument.
  useEffect(() => {
    checkIfLocationEnabled();
    getCurrentLocation();
  }, []);

  checkIfLocationEnabled = async () => {
    let enabled = await Location.hasServicesEnabledAsync();
    if (!enabled) {
      Alert.alert(
        "Location Services are not enabled!",
        "Please enable Location Services to continue",
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
    } else {
      setLocationServicesEnabled(enabled);
    }
  };

  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted!",
        "Allow the app to use the location services.",
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

    //get the current location and getCurrentPositionAsync is gonna give us the latitude and longitude of the user's current location.
    const { coords } = await Location.getCurrentPositionAsync();
    // console.log(coords);

    if (coords) {
      const { latitude, longitude } = coords;

      //reverse geocoding is the process of converting geographic coordinates into a human-readable address(exact address).
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      // console.log(response);

      for (let item of response) {
        let address = `${item.name}, ${item.street}, ${item.district}, ${item.city}, ${item.region}, ${item.postalCode}`;
        setDisplayCurrentAddress(address);
        // break;
      }
    }
  };

  const products = useSelector((state) => state.products.products);
  //   console.log("Products array", products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (products.length > 0) return;

    const fetchProducts = async () => {
      const colRef = collection(db, "types");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        items.push(doc.data());
      });
      items?.map((service) => dispatch(getProducts(service)));
    };
    fetchProducts();
  }, []);


  const services = [
    {
      id: "0",
      image: "https://cdn-icons-png.flaticon.com/128/4643/4643574.png",
      name: "Shirts",
      quantity: 0,
      price: 30,
    },
    {
      id: "1",
      image: "https://cdn-icons-png.flaticon.com/128/892/892458.png",
      name: "T-Shirts",
      quantity: 0,
      price: 20,
    },
    {
      id: "2",
      image: "https://cdn-icons-png.flaticon.com/128/9609/9609161.png",
      name: "Dresses",
      quantity: 0,
      price: 50,
    },
    {
      id: "3",
      image: "https://cdn-icons-png.flaticon.com/128/599/599388.png",
      name: "Jeans",
      quantity: 0,
      price: 40,
    },
    {
      id: "4",
      image: "https://cdn-icons-png.flaticon.com/128/9431/9431166.png",
      name: "Sweater",
      quantity: 0,
      price: 45,
    },
    {
      id: "5",
      image: "https://cdn-icons-png.flaticon.com/128/3345/3345397.png",
      name: "Shorts",
      quantity: 0,
      price: 10,
    },
    {
      id: "6",
      image: "https://cdn-icons-png.flaticon.com/128/293/293241.png",
      name: "Sleeveless",
      quantity: 0,
      price: 25,
    },
  ];

  return (
    <>
      <ScrollView
        style={{
          backgroundColor: "#F0F0F0",
          flex: 1,
          marginTop: StatusBar.currentHeight,
        }}
      >
        {/* Location & Profiling */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Entypo name="location" size={30} color="#fd5c63" />
          <View style={{ padding: 10, marginLeft: 10, marginRight: 5 }}>
            <Text style={{ fontSize: 15, fontWeight: 600 }}>Home</Text>
            <Text style={{ width: 250, fontSize: 12 }}>
              {displayCurrentAddress}
            </Text>
          </View>
          {/* Main Profile pic */}
          <Pressable onPress={() => navigation.navigate("Profile")} style={{ marginLeft: "auto", marginRight: 10 }}>
            <Image
              style={{ width: 40, height: 40, borderRadius: 20 }}
              source={{
                uri: "https://images.unsplash.com/photo-1685674594159-6c61ee041ae1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
              }}
            />
          </Pressable>
        </View>

        {/* Search bar */}
        <View
          style={{
            padding: 10,
            margin: 10,
            marginTop: 0,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 0.8,
            borderColor: "#c0c0c0",
            borderRadius: 7,
            backgroundColor: "#f2f2f2",
          }}
        >
          <TextInput placeholder="Search for items or more..." />
          <Feather name="search" size={24} color="#fd5c63" />
        </View>

        {/* Image Carousel coming from Components */}
        <Carousel />

        {/* Services coming from Components */}
        <Services />

        {/* Rendering all the products */}
        {products.map((item, index) => (
          <ClothItem item={item} key={index} />
        ))}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable
          style={{
            backgroundColor: "#088f8f",
            padding: 10,
            margin: 15,
            borderRadius: 7,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              {cart.length} items | ₹ {total}/-
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "white",
                marginVertical: 4,
              }}
            >
              extra charges may apply
            </Text>
          </View>

          <Pressable onPress={() => navigation.navigate("PickUp")}>
            <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
              Proceed to pickup
            </Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
