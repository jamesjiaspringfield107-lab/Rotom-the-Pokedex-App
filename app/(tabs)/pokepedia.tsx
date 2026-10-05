import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function PokepediaScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search a Pokemon..."
          placeholderTextColor="#888888"
          style={styles.searchInputdesign}
        />
      </View>

      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.cardId}>#001</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Bulbasaur</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#002</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Ivysaur</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#003</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Venusaur</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#004</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Charmander</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#005</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Charmeleon</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#006</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Charizard</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#007</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Squirtle</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#007</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Wartortle</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardId}>#008</Text>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            }}
            style={styles.cardImage}
          />
          <Text style={styles.cardName}>Blastoise</Text>
        </View>
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
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 16,
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
