import { View, Animated, TouchableOpacity, Text } from "react-native";
import React from "react";
import styles from "./styles";
const Bounce = () => {
  const springValue = new Animated.Value(0.3);
  const springAnimation = () => {
    Animated.spring(springValue, {
      toValue: 1,
      friction: 1
    }).start();
  };
  return (
    <View>
      <Animated.Image
        source={require("../assets/soccer-ball-clip-art-png-3.png")}
        style={[
          styles.imageView,
          { transform: [{ scale: springValue }], alignSelf: "center" }
        ]}
      ></Animated.Image>
      <TouchableOpacity style={styles.button} onPress={springAnimation}>
        <Text style={styles.buttonText}>bounce</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bounce;
