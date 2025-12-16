import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Switch,
} from "react-native";
import { useTheme } from "../theme/ThemeContext";

const ProfileScreen: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: isDark ? "#000" : "#fff" },
      ]}
    >
      <View
        style={[
          styles.card,
          {
            backgroundColor: isDark ? "#111" : "#fff",
            borderColor: isDark ? "#333" : "#ddd",
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            { color: isDark ? "#fff" : "#000" },
          ]}
        >
          Appearance
        </Text>

        <View style={styles.row}>
          <Text
            style={{
              color: isDark ? "#fff" : "#000",
              fontSize: 16,
            }}
          >
            Dark Mode
          </Text>

          <Switch value={isDark} onValueChange={toggleTheme} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },

  card: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 20,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
