import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getPokepediaData } from "../../service/pokemonAPI";
import { PokemonData } from "../../types/pokemon";

export default function PokepediaScreen() {
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Fetch function
  const loadData = async () => {
    setLoading(true);
    setErrorMessage(null);

    const data = await getPokepediaData();
    if (data.length === 0) {
      setErrorMessage("Failed to load Pokémon. Check your network!");
    } else {
      setPokemonList(data);
    }
    setLoading(false);
  };

  // Run once when screen opens
  useEffect(() => {
    loadData();
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search Gen 1 Pokémon..."
          placeholderTextColor="#888888"
          style={styles.searchInput}
        />
      </View>

      {/* Conditional Rendering: Loading vs Error vs Data Grid */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#333333"
          style={{ marginTop: 40 }}
        />
      ) : errorMessage ? (
        <View style={styles.errorBox}>
          <Text style={styles.errorText}>⚠️ {errorMessage}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadData}>
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.grid}>
          {pokemonList.map((item) => (
            <View key={item.id} style={styles.card}>
              <Text style={styles.cardId}>
                #{item.id.toString().padStart(3, "0")}
              </Text>
              <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />
              <Text style={styles.cardName}>{item.name}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 20,
  },
  searchContainer: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 20,
    borderWidth: 1.5,
    borderColor: "#e5e5ea",
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  searchInput: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
  card: {
    width: "48%",
    backgroundColor: "#f2f2f7",
    borderRadius: 16,
    padding: 16,
    alignItems: "center",
    marginBottom: 16,
  },
  cardId: {
    alignSelf: "flex-end",
    fontSize: 12,
    fontWeight: "bold",
    color: "#333333",
  },
  cardImage: {
    width: 96,
    height: 96,
    marginVertical: 8,
  },
  cardName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333333",
    marginTop: 8,
    textTransform: "capitalize", // Capitalizes API names like "bulbasaur" -> "Bulbasaur"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
  },
  // Extra helper styles for error state
  errorBox: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#d9534f",
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: "#333333",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  retryText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
