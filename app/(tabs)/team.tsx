import { ScrollView, StyleSheet, TextInput, View } from "react-native";

export default function PokemonTeamScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search a Team..."
          placeholderTextColor="#888888"
          style={styles.searchInputdesign}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  },
  searchInputdesign: {
    backgroundColor: "#f2f2f7",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333333",
  },
  searchContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#e5e5ea",
    shadowColor: "#000000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
});
