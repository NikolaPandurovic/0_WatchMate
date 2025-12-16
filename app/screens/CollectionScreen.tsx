import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import {
  BottomTabNavigationProp,
} from "@react-navigation/bottom-tabs";
import { TabParamList } from "../navigation/TabNavigator";
import { RootStackParamList } from "../navigation/Root";
import { StackNavigationProp } from "@react-navigation/stack";

import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { auth } from "../../firebase/firebaseAuth";


type NavProps = BottomTabNavigationProp<TabParamList, "Collection"> &
  StackNavigationProp<RootStackParamList>;

export default function CollectionScreen() {
  const navigation = useNavigation<NavProps>();
  const [watches, setWatches] = useState<any[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Collection",
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("AddWatchCollection")}
          style={{
            marginRight: 16,
            backgroundColor: "black",
            height: 40,
            width: 40,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Entypo name="plus" size={22} color="white" />
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) return;

    const ref = collection(db, "users", user.uid, "watches");

    const unsub = onSnapshot(ref, (snapshot) => {
      const data = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }));
      setWatches(data);
    });

    return unsub;
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <View
        style={{
          backgroundColor: "black",
          padding: 20,
          borderRadius: 16,
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontSize: 22, fontWeight: "800" }}>
          Deine Collection!
        </Text>
        <Text style={{ color: "white", marginTop: 6 }}>
          Watches: {watches.length}
        </Text>
      </View>

      {watches.map((w) => (
        <TouchableOpacity
          key={w.id}
          onPress={() =>
            navigation.navigate("WatchDetailScreen", { watch: w })
          }
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderRadius: 16,
            marginBottom: 20,
            borderWidth: 1,
            borderColor: "#ddd",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "800" }}>
            {w.brand?.toUpperCase()}
          </Text>
          <Text style={{ fontSize: 20, fontWeight: "800", marginBottom: 10 }}>
            {w.model?.toUpperCase()}
          </Text>

          {w.imageUrl ? (
            <Image
              source={{ uri: w.imageUrl }}
              style={{
                width: "100%",
                height: 180,
                resizeMode: "contain",
                marginBottom: 10,
              }}
            />
          ) : (
            <View style={{ height: 180 }} />
          )}

          <Text>Bought: {w.purchaseDate}</Text>
          <Text>Value: {w.price}</Text>

          <Text style={{ marginTop: 10, fontWeight: "600" }}>
            Description:
          </Text>
          <Text>{w.description}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
