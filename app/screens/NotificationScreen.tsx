import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const NotificationScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>

        <View style={styles.card}>
          <Text style={styles.title}>Next appointments</Text>

          <View style={styles.item}>
            <Text style={styles.main}>Service - Rolex Date Just</Text>
            <Text style={styles.sub}>15.12.2025 - Wyld Linz</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.main}>Reperatur - Longiness Hydroquest</Text>
            <Text style={styles.sub}>09.11.2025 - Hübner Wels</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.main}>Abholung - Tag Heuer Aquaracer</Text>
            <Text style={styles.sub}>22.02.2026 - Tag Heuer Wien</Text>
          </View>

          <View style={styles.item}>
            <Text style={styles.main}>Besichtigung - Panerai</Text>
            <Text style={styles.sub}>22.02.2026 - Tag Heuer Wien</Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 12 },

  card: {
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 16,
    borderRadius: 14,
  },

  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  item: {
    marginVertical: 8,
  },

  main: {
    fontSize: 15,
    fontWeight: "600",
  },

  sub: {
    fontSize: 12,
    color: "#666",
  },
});
