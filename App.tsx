import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import RootNavigator from "./app/navigation/Root";
import { ThemeProvider, useTheme } from "./app/theme/ThemeContext";

function AppContent() {
  const { colors } = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
