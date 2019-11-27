import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  animationView: {
    width: 100,
    height: 100,
    backgroundColor: "skyblue"
  },

  button: {
    backgroundColor: "steelblue",
    height: 45,
    marginTop: 20
  },
  buttonText: {
    color: "white",
    padding: 12,
    paddingHorizontal: 20,
    fontWeight: "bold",
    fontSize: 18
  },
  imageView: {
    width: 100,
    height: 100,
    backgroundColor: "transparent"
  }
});

export default styles;
