import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import HeaderCard from "../components/HeaderCard";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <HeaderCard
          title="Hallo Max!"
          subtitle="Watches: 6\nWishlist: 3"
        />

        <View style={styles.row}>
          <View style={styles.smallCard}>
            <Text style={styles.cardTitle}>Collection</Text>
            <Text style={styles.bigNumber}>8 watches</Text>
            <Text style={styles.cardNote}>fgfgfgfg</Text>
          </View>

          <View style={styles.smallCard}>
            <Text style={styles.cardTitle}>Wishlist</Text>
            <Text style={styles.bigNumber}>5 watches</Text>
            <Text style={styles.cardNote}>-8% month over month</Text>
          </View>
        </View>

        <View style={styles.largeCard}>
          <Text style={styles.cardTitle}>Value</Text>
          <Text style={styles.valueText}>€39.4990,00</Text>
          <Text style={styles.cardNote}>fgfgfhfgsf</Text>
        </View>

        <View style={styles.largeCard}>
          <Text style={styles.cardTitle}>Next appointments</Text>

          <View style={styles.appointment}>
            <Text style={styles.appTitle}>Service - Rolex Date Just</Text>
            <Text style={styles.appSub}>15.12.2025 - Wyld Linz</Text>
          </View>

          <View style={styles.appointment}>
            <Text style={styles.appTitle}>Reperatur - Longiness Hydroquest</Text>
            <Text style={styles.appSub}>09.11.2025 - Hübner Wels</Text>
          </View>

          <View style={styles.appointment}>
            <Text style={styles.appTitle}>Abholung - Tag Heuer Aquaracer</Text>
            <Text style={styles.appSub}>22.02.2026 - Tag Heuer Wien</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  smallCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },

  largeCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
  },

  cardTitle: {
    fontSize: 14,
    fontWeight: "500",
  },

  bigNumber: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 4,
  },

  valueText: {
    fontSize: 26,
    fontWeight: "600",
    marginTop: 4,
  },

  cardNote: {
    fontSize: 12,
    marginTop: 4,
    color: "#555",
  },

  appointment: {
    marginTop: 10,
  },

  appTitle: {
    fontSize: 15,
    fontWeight: "600",
  },

  appSub: {
    fontSize: 12,
    color: "#666",
  },
});
