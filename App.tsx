import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Fade from "./main/Fade";
import Movable from "./main/Movable";
import Bounce from "./main/Bounce";

export default function App() {
  let [value1, setValue1] = useState(0);
  return (
    <View style={styles.container}>
      <Text>{value1}</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Fade />
      <Button
        onPress={() =>
          setValue1(value1++ + 1 + (value1 / 2) * (value1 * value1 + 1))
        }
        title="dded"
      ></Button>
      <Movable />
      <Bounce />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
