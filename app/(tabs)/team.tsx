import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PokemonData } from "../../types/pokemon";

interface TeamSlot {
  slotId: number;
  pokemon: PokemonData | null;
}

export default function TeamScreen() {
  const router = useRouter();

  // 1. Initialize 6 empty team slots
  const [team, setTeam] = useState<TeamSlot[]>([
    { slotId: 1, pokemon: null },
    { slotId: 2, pokemon: null },
    { slotId: 3, pokemon: null },
    { slotId: 4, pokemon: null },
    { slotId: 5, pokemon: null },
    { slotId: 6, pokemon: null },
  ]);

  // 2. Delete Pokémon from slot confirmation
  const handleDeletePokemon = (slotId: number) => {
    Alert.alert(
      "Remove Pokémon",
      `Are you sure you want to remove the Pokémon from Team Slot ${slotId}?`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setTeam((prevTeam) =>
              prevTeam.map((slot) =>
                slot.slotId === slotId ? { ...slot, pokemon: null } : slot,
              ),
            );
          },
        },
      ],
    );
  };

  // 3. WIP placeholders for Add Slot and Share
  const handleWipAction = (actionName: string) => {
    Alert.alert("WIP Placeholder", `${actionName} button is still in WIP`);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* ========================================== */}
        {/* TOP BUTTONS: Collection & Favorite (Stack Nav) */}
        {/* ========================================== */}
        <View style={styles.topNavContainer}>
          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push("../collection")}
          >
            <Ionicons name="albums-outline" size={18} color="#333" />
            <Text style={styles.navButtonText}>Collection</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.navButton}
            onPress={() => router.push("../favorite")}
          >
            <Ionicons name="heart-outline" size={18} color="#ff3b30" />
            <Text style={styles.navButtonText}>Favorite</Text>
          </TouchableOpacity>
        </View>

        {/* ========================================== */}
        {/* MY TEAM BOX: 6 Slots Grid */}
        {/* ========================================== */}
        <View style={styles.teamContainer}>
          <View style={styles.teamHeader}>
            <Ionicons name="people-circle-outline" size={24} color="#333" />
            <Text style={styles.teamTitle}>My Team</Text>
          </View>

          {/* 2-Column Grid */}
          <View style={styles.gridContainer}>
            {team.map((slot) => (
              <View key={slot.slotId} style={styles.slotCard}>
                <Text style={styles.slotLabel}>Team {slot.slotId}</Text>

                {slot.pokemon ? (
                  /* Occupied Slot View */
                  <View style={styles.occupiedSlot}>
                    <Image
                      source={{ uri: slot.pokemon.imageUrl }}
                      style={styles.pokemonImage}
                    />
                    <Text style={styles.pokemonName}>{slot.pokemon.name}</Text>

                    <TouchableOpacity
                      style={styles.deleteButton}
                      onPress={() => handleDeletePokemon(slot.slotId)}
                    >
                      <Ionicons name="trash-outline" size={12} color="#fff" />
                      <Text style={styles.deleteText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ) : (
                  /* Empty Slot View */
                  <TouchableOpacity
                    style={styles.emptySlot}
                    onPress={() => router.push("/pokepedia")}
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={32}
                      color="#8e8e93"
                    />
                    <Text style={styles.addText}>Pick Pokémon</Text>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </View>

          {/* ========================================== */}
          {/* ACTION BUTTONS: Add Slot & Share (WIP) */}
          {/* ========================================== */}
          <View style={styles.actionButtonsRow}>
            <TouchableOpacity
              style={styles.actionButton}
              onPress={() => handleWipAction("Add Slot")}
            >
              <Ionicons name="add-outline" size={18} color="#fff" />
              <Text style={styles.actionButtonText}>Add Slot</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.actionButton, styles.shareButton]}
              onPress={() => handleWipAction("Share Team")}
            >
              <Ionicons name="share-social-outline" size={18} color="#fff" />
              <Text style={styles.actionButtonText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 30,
  },
  topNavContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    gap: 10,
  },
  navButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f7",
    paddingVertical: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    gap: 6,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333333",
  },
  teamContainer: {
    backgroundColor: "#f9f9fb",
    borderRadius: 20,
    padding: 16,
    borderWidth: 1.5,
    borderColor: "#e5e5ea",
  },
  teamHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333333",
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  slotCard: {
    width: "48%",
    backgroundColor: "#ffffff",
    borderRadius: 14,
    padding: 12,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#e5e5ea",
    minHeight: 130,
  },
  slotLabel: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#8e8e93",
    alignSelf: "flex-start",
    marginBottom: 4,
  },
  emptySlot: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  addText: {
    fontSize: 12,
    color: "#8e8e93",
    marginTop: 4,
    fontWeight: "500",
  },
  occupiedSlot: {
    alignItems: "center",
    width: "100%",
  },
  pokemonImage: {
    width: 56,
    height: 56,
  },
  pokemonName: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#333333",
    textTransform: "capitalize",
    marginVertical: 2,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ff3b30",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    gap: 4,
    marginTop: 2,
  },
  deleteText: {
    color: "#ffffff",
    fontSize: 10,
    fontWeight: "bold",
  },
  actionButtonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    gap: 10,
  },
  actionButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007aff",
    paddingVertical: 12,
    borderRadius: 12,
    gap: 6,
  },
  shareButton: {
    backgroundColor: "#34c759",
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
  },
});
