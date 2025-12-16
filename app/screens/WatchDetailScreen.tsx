import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../types/navigation";
import { StackNavigationProp } from "@react-navigation/stack";
import { auth } from "../../firebase/firebaseAuth";

import { deleteWatch } from "../../firebase/firebaseFirestore";

type WatchDetailRouteProp = RouteProp<
  RootStackParamList,
  "WatchDetailScreen"
>;
type NavProps = StackNavigationProp<RootStackParamList>;

type Props = {
  route: WatchDetailRouteProp;
};

export default function WatchDetailScreen({ route }: Props) {
  const { watch } = route.params;
  const navigation = useNavigation<NavProps>();
  const [tab, setTab] = useState<"detail" | "service" | "papers">("detail");

  async function handleDelete() {
    const user = auth.currentUser;
    if (!user) return;

    Alert.alert(
      "Uhr löschen?",
      "Diese Aktion kann nicht rückgängig gemacht werden.",
      [
        { text: "Abbrechen" },
        {
          text: "Löschen",
          style: "destructive",
          onPress: async () => {
            await deleteWatch(user.uid, watch.id);
            navigation.goBack();
          },
        },
      ]
    );
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableOpacity style={{ padding: 16 }} onPress={() => navigation.goBack()}>
        <Text style={{ fontSize: 26 }}>‹</Text>
      </TouchableOpacity>

      <View style={{ paddingHorizontal: 20 }}>
        <Text style={{ fontSize: 26, fontWeight: "800" }}>
          {watch.brand?.toUpperCase()}
        </Text>
        <Text style={{ fontSize: 26, fontWeight: "800" }}>
          {watch.model?.toUpperCase()}
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate("AddWatchCollection", { watch })
          }
        >
          <Text style={{ marginTop: 12, color: "blue" }}>
            Edit Watch
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDelete}>
          <Text style={{ marginTop: 8, color: "red" }}>
            Delete Watch
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
