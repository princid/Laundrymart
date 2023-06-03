import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Services = () => {
    const services = [
      {
        id: "0",
        image: "https://cdn-icons-png.flaticon.com/128/3003/3003984.png",
        name: "Washing",
      },
      {
        id: "1",
        image: "https://cdn-icons-png.flaticon.com/128/2975/2975175.png",
        name: "Laundry",
      },
      {
        id: "2",
        image: "https://cdn-icons-png.flaticon.com/128/9753/9753675.png",
        name: "Wash & Iron",
      },
      {
        id: "3",
        image: "https://cdn-icons-png.flaticon.com/128/995/995016.png",
        name: "Cleaning",
      },
    ];
  return (
    <View style={{padding:10}}>
        <Text style={{fontSize: 16, fontWeight: "500", marginBottom: 7}}>Services Available</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {services.map((service, index) => (
            <Pressable style={{margin:10, backgroundColor: "#fff", padding: 20, borderRadius: 7, alignItems: "center"}} key={index}>
              <Image
                source={{ uri: service.image }}
                style={{ width: 70, height: 70, marginBottom: 10 }}
              />

              <Text>{service.name}</Text>
            </Pressable>
          ))}
      </ScrollView>
    </View>
  );
}

export default Services

const styles = StyleSheet.create({})