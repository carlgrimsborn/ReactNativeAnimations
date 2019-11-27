import React, { SFC, useState } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";
import styles from "./styles";

const Fade: SFC = () => {
  const animationValue = new Animated.Value(1);
  const fadeAnimation = () => {
    Animated.timing(animationValue, {
      toValue: 0,
      duration: 1000
    }).start(() => {
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 1000
      }).start();
    });
  };
  return (
    <View>
      <Text>Hello World</Text>
      <Animated.View
        style={[styles.animationView, { opacity: animationValue }]}
      ></Animated.View>
      <TouchableOpacity style={styles.button} onPress={fadeAnimation}>
        <Text style={styles.buttonText}>animate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Fade;
