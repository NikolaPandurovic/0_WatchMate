import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { collection, doc } from "firebase/firestore";

import { db } from "../../firebase/firebaseConfig";
import { auth } from "../../firebase/firebaseAuth";
import { addWatch, updateWatch } from "../../firebase/firebaseFirestore";

export default function AddWatchCollection() {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const existingWatch = route.params?.watch;

  const [brand, setBrand] = useState(existingWatch?.brand || "");
  const [model, setModel] = useState(existingWatch?.model || "");
  const [price, setPrice] = useState(existingWatch?.price || "");
  const [purchaseDate, setPurchaseDate] = useState(
    existingWatch?.purchaseDate || ""
  );
  const [description, setDescription] = useState(
    existingWatch?.description || ""
  );

  async function handleSaveWatch() {
    try {
      const user = auth.currentUser;
      if (!user) {
        Alert.alert("Fehler", "Nicht eingeloggt");
        return;
      }

      if (!brand || !model) {
        Alert.alert("Fehler", "Brand und Model sind Pflichtfelder");
        return;
      }

      // ✏️ EDIT
      if (existingWatch) {
        await updateWatch(user.uid, existingWatch.id, {
          brand,
          model,
          price,
          purchaseDate,
          description,
        });
      }
      // ➕ ADD
      else {
        const watchId = doc(
          collection(db, "users", user.uid, "watches")
        ).id;

        await addWatch(user.uid, watchId, {
          brand,
          model,
          price,
          purchaseDate,
          description,

          imageUrl: "",
          movement: "",
          reference: "",
          serial: "",
          productionYear: "",
          origin: "",
          powerReserve: "",
          accuracy: "",
          waterResistance: "",
          caseSize: "",
          condition: "",
        });
      }

      navigation.goBack();
    } catch (e: any) {
      Alert.alert("Fehler", e.message);
    }
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 26, fontWeight: "800", marginBottom: 20 }}>
        {existingWatch ? "Uhr bearbeiten" : "Neue Uhr hinzufügen"}
      </Text>

      <Text>Brand</Text>
      <TextInput value={brand} onChangeText={setBrand} style={styles.input} />

      <Text style={{ marginTop: 16 }}>Model</Text>
      <TextInput value={model} onChangeText={setModel} style={styles.input} />

      <Text style={{ marginTop: 16 }}>Bought On</Text>
      <TextInput
        value={purchaseDate}
        onChangeText={setPurchaseDate}
        style={styles.input}
      />

      <Text style={{ marginTop: 16 }}>Value (€)</Text>
      <TextInput
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />

      <Text style={{ marginTop: 16 }}>Description</Text>
      <TextInput
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
        onPress={handleSaveWatch}
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
