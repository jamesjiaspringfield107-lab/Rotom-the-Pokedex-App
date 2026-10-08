import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router"; // 1. Import useRouter
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MoreScreen() {
  const router = useRouter(); // 2. Initialize router

  const handleAlert = (title: string) => {
    Alert.alert("Work in Progress", `${title} button is still in WIP`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.grayCard}>
        {/* Header Badge */}
        <View style={styles.titleBadge}>
          <Text style={styles.cardHeader}>General</Text>
        </View>

        {/* Settings Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAlert("Settings")}
        >
          <View style={styles.buttonContent}>
            <Ionicons
              name="settings-outline"
              size={20}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Settings</Text>
          </View>
        </TouchableOpacity>

        {/* Appearance Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAlert("Appearance")}
        >
          <View style={styles.buttonContent}>
            <Ionicons
              name="sparkles-outline"
              size={20}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Appearance</Text>
          </View>
        </TouchableOpacity>

        {/* About Button - Now navigates to /about */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/about")} // 3. Navigate to About screen
        >
          <View style={styles.buttonContent}>
            <Ionicons
              name="information-circle-outline"
              size={20}
              color="#333"
              style={styles.icon}
            />
            <Text style={styles.buttonText}>About</Text>
          </View>
        </TouchableOpacity>
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
  grayCard: {
    backgroundColor: "#f2f2f7",
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  titleBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 12,
  },
  cardHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333333",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fefeff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#000000",
  },
});
