import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  bought: string;
  value: string;
  type: string;
  description: string;
  image: any;
}

const WatchCard: React.FC<Props> = ({
  title,
  bought,
  value,
  type,
  description,
  image,
}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <Image source={image} style={styles.image} resizeMode="contain" />

      <Text style={styles.info}>Bought: {bought}</Text>
      <Text style={styles.info}>Value: {value}</Text>
      <Text style={styles.info}>Type: {type}</Text>

      <Text style={styles.descTitle}>Description:</Text>
      <Text style={styles.desc}>{description}</Text>
    </View>
  );
};

export default WatchCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 16,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 12,
  },

  image: {
    width: "100%",
    height: 180,
    marginBottom: 14,
  },

  info: {
    fontSize: 14,
    marginBottom: 4,
  },

  descTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "600",
  },

  desc: {
    fontSize: 13,
    color: "#444",
  },
});
