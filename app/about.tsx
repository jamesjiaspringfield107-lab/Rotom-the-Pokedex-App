import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Ionicons
          name="information-circle"
          size={48}
          color="#ff000039"
          style={styles.icon}
        />
        <Text style={styles.title}>About Me</Text>
        <Text style={styles.subtitle}>Rotom Pokédex Project</Text>

        <View style={styles.divider} />

        <Text style={styles.label}>Developer</Text>
        <Text style={styles.value}>Marceliano Manalo</Text>

        <Text style={styles.label}>Program & Section</Text>
        <Text style={styles.value}>BSCS-3A</Text>

        <Text style={styles.label}>Email</Text>
        <Text style={styles.value}>jamesjiaspringfield107@gmail.com</Text>

        <Text style={styles.label}>GitHub / Username</Text>
        <Text style={styles.value}>jamesjiaspringfield107-lab</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 16,
  },
  card: {
    backgroundColor: "#f2f2f7",
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    alignItems: "center",
  },
  icon: {
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
  },
  subtitle: {
    fontSize: 14,
    color: "#666666",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: "#e5e5ea",
    marginVertical: 12,
  },
  label: {
    fontSize: 12,
    color: "#888888",
    marginTop: 8,
    textTransform: "uppercase",
    fontWeight: "600",
  },
  value: {
    fontSize: 16,
    color: "#333333",
    fontWeight: "500",
  },
});
