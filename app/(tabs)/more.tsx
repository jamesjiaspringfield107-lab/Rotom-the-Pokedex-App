import { StyleSheet, Text, View } from "react-native";

export default function MoreSettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>More/Settings Screen WIP</Text>
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
