import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* 1. Main Bottom Tab Navigation Group (Hides stack header so tabs take over) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

      {/* 2. Standalone Collection Screen */}
      <Stack.Screen
        name="collection"
        options={{
          title: "Collection",
          headerBackTitle: "Back",
          headerTintColor: "#000000",
          headerStyle: { backgroundColor: "#ffffff" },
          headerTitleStyle: { fontWeight: "bold" },
          headerShadowVisible: false,
        }}
      />

      {/* 3. Standalone Favorite Screen */}
      <Stack.Screen
        name="favorite"
        options={{
          title: "Favorites",
          headerBackTitle: "Back",
          headerTintColor: "#ff3b30",
          headerStyle: { backgroundColor: "#ffffff" },
          headerTitleStyle: { fontWeight: "bold" },
          headerShadowVisible: false,
        }}
      />
    </Stack>
  );
}
