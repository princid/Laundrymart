import { StyleSheet, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";

const Carousel = () => {
  const images = [
    "https://images.unsplash.com/photo-1626806819282-2c1dc01a5e0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGF1bmRyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1638949493140-edb10b7be2f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxhdW5kcnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhdW5kcnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1604335398549-1b80aadd00a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxhdW5kcnl8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60",
  ];
  return (
    <View>
      <SliderBox
        images={images}
        autoPlay
        circleLoop
        dotColor="#13274f"
        inactiveDotColor="#90A4AE"
        ImageComponentStyle={{
          borderRadius: 7,
          width: "95%",
        }}
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({});
