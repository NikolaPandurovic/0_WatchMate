import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";

type WatchDetailRouteProp = RouteProp<RootStackParamList, "WatchDetailScreen">;
type NavProps = StackNavigationProp<RootStackParamList>;

type Props = {
  route: WatchDetailRouteProp;
};

export default function WatchDetailScreen({ route }: Props) {
  const { watch } = route.params;
  const navigation = useNavigation<NavProps>();
  const [tab, setTab] = useState<"detail" | "service" | "papers">("detail");

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* Back Button */}
      <TouchableOpacity style={{ padding: 16 }} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 26 }}>‹</Text>
      </TouchableOpacity>

      {/* Image */}
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          backgroundColor: "#fff",
          padding: 16,
          borderRadius: 16,
          shadowColor: "#000",
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 8,
          marginBottom: 20,
        }}
      >
        <Image
          source={{ uri: watch.imageUrl }}
          style={{
            width: "100%",
            height: 300,
            resizeMode: "contain",
            borderRadius: 12,
          }}
        />
      </View>

      {/* Title */}
      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "800" }}>
          {watch.brand.toUpperCase()}
        </Text>
        <Text style={{ fontSize: 26, fontWeight: "800", marginBottom: 12 }}>
          {watch.model.toUpperCase()}
        </Text>
      </View>

      {/* Tabs */}
      <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 16 }}>
        {["detail", "service", "papers"].map((t) => (
          <TouchableOpacity
            key={t}
            onPress={() => setTab(t as any)}
            style={{
              backgroundColor: tab === t ? "#E5E5E5" : "white",
              paddingVertical: 6,
              paddingHorizontal: 22,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#DDD",
            }}
          >
            <Text style={{ fontWeight: "600" }}>{t.toUpperCase()}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* DETAIL */}
      {tab === "detail" && (
        <View
          style={{
            width: "90%",
            alignSelf: "center",
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 18,
            marginBottom: 40,
            shadowColor: "#000",
            shadowOpacity: 0.08,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 6,
          }}
        >
          <Text>
            <Text style={{ fontWeight: "bold" }}>Bought: </Text>
            {watch.purchaseDate}
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Value: </Text>
            {watch.price}€
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Movement Type: </Text>
            {watch.movement}
          </Text>

          <Text style={{ fontWeight: "bold", marginTop: 12 }}>
            Reference Number: <Text style={{ color: "red" }}>{watch.reference}</Text>
          </Text>

          <Text style={{ fontWeight: "bold" }}>
            Serial Number: <Text style={{ color: "red" }}>{watch.serial}</Text>
          </Text>

          <Text style={{ marginTop: 16 }}>
            <Text style={{ fontWeight: "bold" }}>Production Year:</Text> {watch.productionYear}
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Country of Origin:</Text> {watch.origin}
          </Text>

          <Text style={{ marginTop: 16 }}>
            <Text style={{ fontWeight: "bold" }}>Power Reserve:</Text> {watch.powerReserve}
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Accuracy:</Text> {watch.accuracy}
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Water Resistance:</Text> {watch.waterResistance}
          </Text>

          <Text>
            <Text style={{ fontWeight: "bold" }}>Case Diameter:</Text> {watch.caseSize}
          </Text>

          <Text style={{ marginTop: 16 }}>
            <Text style={{ fontWeight: "bold" }}>Overall Condition:</Text> {watch.condition}
          </Text>

          <Text style={{ marginTop: 16, fontWeight: "bold" }}>Description:</Text>
          <Text>{watch.description}</Text>
        </View>
      )}
    </ScrollView>
  );
}
