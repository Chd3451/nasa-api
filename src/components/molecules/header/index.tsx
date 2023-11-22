import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Explore</Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../../../assets/nasa-logo.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
});
