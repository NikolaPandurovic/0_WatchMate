import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CollectionScreen from "../screens/CollectionScreen";
import AddWatchCollection from "../screens/AddWatchCollection";
import WatchDetailScreen from "../screens/WatchDetailScreen";

import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Collection" 
        component={CollectionScreen}
        options={{ title: "Collection" }}
      />

      <Stack.Screen 
        name="AddWatchCollection"
        component={AddWatchCollection}
        options={{ title: "Neue Uhr hinzufügen" }}
      />

      <Stack.Screen 
        name="WatchDetailScreen"
        component={WatchDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
