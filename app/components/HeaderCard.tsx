import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  title: string;
  subtitle?: string;
}

const HeaderCard: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
      {subtitle && <Text style={styles.headerSub}>{subtitle}</Text>}
    </View>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    padding: 22,
    borderRadius: 14,
    marginBottom: 18,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
  },

  headerSub: {
    color: "#fff",
    fontSize: 14,
    marginTop: 4,
  },
});
