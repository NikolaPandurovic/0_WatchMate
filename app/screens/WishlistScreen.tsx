import React from "react";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

const WishlistScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.header}>
          <Text style={styles.headerText}>WISHLIST</Text>
          <Text style={styles.headerSub}>Watches: 3    Price: 17.342,50€</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>PANERAI PAM03312</Text>
          <Image source={require("../assets/panerai.png")} style={styles.image} />
          <Text style={styles.info}>Value: 7.600,00€</Text>
          <Text style={styles.info}>Type: Automatic</Text>
          <Text style={styles.info}>Date to buy: 15.12.2025</Text>
          <Text style={styles.info}>willhaben.at/hdfjs</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>BREITLING ENDURANCE</Text>
          <Image source={require("../assets/breitling.png")} style={styles.image} />
          <Text style={styles.info}>Value: 3.870,00€</Text>
          <Text style={styles.info}>Type: Automatic</Text>
          <Text style={styles.info}>Date to buy: 01.03.2026</Text>
          <Text style={styles.info}>chrono24.com/fhjjdhfjh</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12, backgroundColor: "#fff" },
  header: {
    backgroundColor: "#000",
    borderRadius: 14,
    padding: 20,
    marginBottom: 16,
  },
  headerText: { color: "#fff", fontSize: 20, fontWeight: "700" },
  headerSub: { color: "#fff", fontSize: 14, marginTop: 6 },

  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },

  title: { fontSize: 18, fontWeight: "700", marginBottom: 10 },

  image: { width: "100%", height: 150, resizeMode: "contain", marginBottom: 10 },

  info: { fontSize: 14, marginBottom: 4 },
});
