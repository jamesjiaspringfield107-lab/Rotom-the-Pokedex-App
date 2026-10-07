import { StyleSheet, Text, View } from "react-native";

export default function CollectionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Collection</Text>
      <Text style={styles.subtitle}>
        Your saved Pokémon collection will appear here.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#8e8e93",
    textAlign: "center",
  },
});
