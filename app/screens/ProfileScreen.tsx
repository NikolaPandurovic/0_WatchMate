import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

const ProfileScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/profile.jpg")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Nikola Pandurovic</Text>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },

  name: {
    fontSize: 22,
    fontWeight: "700",
  },
});
