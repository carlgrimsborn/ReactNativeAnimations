import React, { SFC } from "react";
import { Animated, View, Text, TouchableOpacity, Easing } from "react-native";
import styles from "./styles";

const Movable: SFC = () => {
  const xValue = new Animated.Value(0);
  const moveAnimation = () => {
    Animated.timing(xValue, {
      toValue: 150,
      duration: 500,
      easing: Easing.linear
    }).start(() => {
      Animated.timing(xValue, {
        toValue: 0,
        duration: 500,
        easing: Easing.linear
      }).start(() => {
        Animated.timing(xValue, {
          toValue: -130,
          duration: 500,
          easing: Easing.linear
        }).start(() => {
          Animated.timing(xValue, {
            toValue: 0,
            duration: 500,
            easing: Easing.linear
          }).start();
        });
      });
    });
  };
  return (
    <View>
      <Animated.View
        style={[styles.animationView, { left: xValue }]}
      ></Animated.View>
      <TouchableOpacity onPress={moveAnimation} style={styles.button}>
        <Text style={styles.buttonText}>move box</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Movable;
