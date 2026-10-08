import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { getPokepediaData } from "../../service/pokemonAPI";
import { PokemonData } from "../../types/pokemon";

const rotomErrorImage = require("../../assets/images/Rotom_Error_WIP.jpg");

export default function PokepediaScreen() {
  // ==========================================
  // State Management
  // ==========================================
  const [pokemonList, setPokemonList] = useState<PokemonData[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // ==========================================
  // API & Data Fetching
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

  useEffect(() => {
    loadData();
  }, []);

  // ==========================================
  // Helper Functions & Computed Data
  // ==========================================
  const getTypeColor = (type: string): string => {
    switch (type.toLowerCase()) {
      case "fire":
        return "#ff421d";
      case "water":
        return "#2b9aff";
      case "grass":
        return "#63bc5d";
      case "electric":
        return "#e3d841";
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
        return "#8e8e93ee";
    }
  };

  // ==========================================
  // Search Filtering Logic
  // ==========================================
  const filteredPokemon = pokemonList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // ==========================================
  // Rendering Individual Pokémon Card Component
  // ==========================================
  const renderPokemonCard = ({ item }: { item: PokemonData }) => (
    <View style={styles.card}>
      <Text style={styles.cardId}>#{item.id.toString().padStart(3, "0")}</Text>

      <Image source={{ uri: item.imageUrl }} style={styles.cardImage} />

      <Text style={styles.cardName}>{item.name}</Text>

      <View style={styles.typesContainer}>
        {item.types?.map((type) => (
          <View
            key={type}
            style={[styles.typeBadge, { backgroundColor: getTypeColor(type) }]}
          >
            <Text style={styles.typeText}>{type}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  // ==========================================
  // Render UI Components
  // ==========================================
  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search a Pokémon..."
          placeholderTextColor="#888888"
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Main FlatList Lazy-Loaded Content */}
      {loading ? (
        <ActivityIndicator
          size="large"
          color="#ff0000"
          style={{ marginTop: 40 }}
        />
      ) : errorMessage ? (
        <View style={styles.errorBox}>
          <Image
            source={rotomErrorImage}
            style={styles.errorImage}
            resizeMode="contain"
          />
          <Text style={styles.errorText}>⚠ {errorMessage}</Text>
          <TouchableOpacity style={styles.retryButton} onPress={loadData}>
            <Text style={styles.retryText}>Try Again</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <FlatList
          data={filteredPokemon}
          renderItem={renderPokemonCard}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          windowSize={5}
        />
      )}
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
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
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
  errorImage: {
    width: 220,
    height: 180,
    marginBottom: 12,
  },
});
