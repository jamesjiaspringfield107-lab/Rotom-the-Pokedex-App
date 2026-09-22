import { StyleSheet, Text, View } from "react-native";

export default function PokeOSScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>PokeOS Home Screen WIP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  text: {
    color: "#000000",
    fontWeight: "bold",
  },
});
