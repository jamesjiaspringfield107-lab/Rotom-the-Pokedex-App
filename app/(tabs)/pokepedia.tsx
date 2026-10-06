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
  // ==========================================
  // STEP 1: State Management
  // ==========================================
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ==========================================
  // STEP 2: API & Data Fetching
  // ==========================================
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

  // Run automatically when the screen opens
  useEffect(() => {
    loadData();
  }, []);

  // ==========================================
  // STEP 3: Helper Functions & Computed Data
  // ==========================================
  // Returns hex color based on Pokémon element type
  const getTypeColor = (type: string): string => {
    switch (type.toLowerCase()) {
      case "fire":
        return "#ff421d";
      case "water":
        return "#2b9aff";
      case "grass":
        return "#63bc5d";
      case "electric":
        return "#fbf041";
      case "poison":
        return "#9553cd";
      case "bug":
        return "#9fa426";
      case "normal":
        return "#a0a29f";
      case "flying":
        return "#89a2f5";
      case "ground":
        return "#d3b158";
      case "rock":
        return "#b7a058";
      case "ice":
        return "#72d7f4";
      case "dragon":
        return "#7662e7";
      case "psychic":
        return "#ea447e";
      case "fighting":
        return "#9a3d24";
      case "ghost":
        return "#6262b4";
      case "dark":
        return "#4a3c3c";
      case "steel":
        return "#bdbfbf";
      case "fairy":
        return "#f4b1f4";
      default:
        return "#8e8e93";
    }
  };

  // Filter list in real-time based on search input
  const filteredPokemon = pokemonList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // ==========================================
  // STEP 4: Render UI Components
  // ==========================================
  return (
    <View style={styles.container}>
      {/* 4.1 Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search a Pokémon..."
          placeholderTextColor="#888888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* 4.2 Main Scrollable Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Loading Spinner */}
        {loading ? (
          <ActivityIndicator
            size="large"
            color="#333333"
            style={{ marginTop: 40 }}
          />
        ) : errorMessage ? (
          /* Error State */
          <View style={styles.errorBox}>
            <Text style={styles.errorText}>⚠ {errorMessage}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={loadData}>
              <Text style={styles.retryText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        ) : (
          /* Pokémon Grid */
          <View style={styles.grid}>
            {filteredPokemon.map((item) => (
              <View key={item.id} style={styles.card}>
                {/* ID Tag */}
                <Text style={styles.cardId}>
                  #{item.id.toString().padStart(3, "0")}
                </Text>

                {/* Pokémon Image */}
                <Image
                  source={{ uri: item.imageUrl }}
                  style={styles.cardImage}
                />

                {/* Pokémon Name */}
                <Text style={styles.cardName}>{item.name}</Text>

                {/* Pokémon Type Badges */}
                <View style={styles.typesContainer}>
                  {item.types?.map((type) => (
                    <View
                      key={type}
                      style={[
                        styles.typeBadge,
                        { backgroundColor: getTypeColor(type) },
                      ]}
                    >
                      <Text style={styles.typeText}>{type}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

// ==========================================
// STEP 5: Stylesheet Definition
// ==========================================
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
    marginBottom: 10,
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
  scrollContent: {
    paddingBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
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
    backgroundColor: "#e2dfdf",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
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
    marginTop: 4,
    textTransform: "capitalize",
  },
  typesContainer: {
    flexDirection: "row",
    gap: 6,
    marginTop: 8,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  typeBadge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  typeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
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
