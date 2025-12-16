import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";
import TabNavigator from "./TabNavigator";
import WatchDetailScreen from "../screens/WatchDetailScreen";
import AddWatchCollection from "../screens/AddWatchCollection";

export type RootStackParamList = {
  SignIn: undefined;
  Register: undefined;

  Tabs: undefined;

  WatchDetailScreen: { watch: any };
  AddWatchCollection: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* LOGIN FIRST */}
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      {/* MAIN APP */}
      <Stack.Screen name="Tabs" component={TabNavigator} />

      <Stack.Screen name="WatchDetailScreen" component={WatchDetailScreen} />
      <Stack.Screen
        name="AddWatchCollection"
        component={AddWatchCollection}
        options={{ headerShown: true, title: "Neue Uhr hinzufügen" }}
      />
    </Stack.Navigator>
  );
}
