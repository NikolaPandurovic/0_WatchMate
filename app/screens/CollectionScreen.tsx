import React, { useLayoutEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";

type NavProps = StackNavigationProp<RootStackParamList, "Collection">;

export default function CollectionScreen() {
  const navigation = useNavigation<NavProps>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("AddWatchCollection")}
          style={{
            marginRight: 16,
            backgroundColor: "black",
            height: 42,
            width: 42,
            borderRadius: 21,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="plus" size={22} color="white" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "800", marginBottom: 20 }}>
        Deine Collection!
      </Text>

      {/* TODO: Watches List */}
    </ScrollView>
  );
}
