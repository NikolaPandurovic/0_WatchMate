import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";

export default function AddWatchCollection() {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 26, fontWeight: "800", marginBottom: 20 }}>
        Neue Uhr hinzufügen
      </Text>

      <Text>Brand</Text>
      <TextInput
        placeholder="Rolex"
        value={brand}
        onChangeText={setBrand}
        style={styles.input}
      />

      <Text style={{ marginTop: 16 }}>Model</Text>
      <TextInput
        placeholder="Datejust 41"
        value={model}
        onChangeText={setModel}
        style={styles.input}
      />

      <Text style={{ marginTop: 16 }}>Bought On</Text>
      <TextInput
        placeholder="10.07.2024"
        value={purchaseDate}
        onChangeText={setPurchaseDate}
        style={styles.input}
      />

      <Text style={{ marginTop: 16 }}>Value (€)</Text>
      <TextInput
        placeholder="13500"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={{ marginTop: 16 }}>Description</Text>
      <TextInput
        placeholder="my first Rolex"
        value={description}
        onChangeText={setDescription}
        multiline
        style={[styles.input, { height: 100 }]}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "black",
          padding: 14,
          borderRadius: 12,
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 16, fontWeight: "600" }}>
          Save Watch
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = {
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
};
