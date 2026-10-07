import { StyleSheet, Text, View } from "react-native";

export default function FavoriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <Text style={styles.subtitle}>
        Your favorite Pokémon will appear here.
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
    color: "#ff3b30",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#8e8e93",
    textAlign: "center",
  },
});
