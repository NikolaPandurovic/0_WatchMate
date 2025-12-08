import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { RootStackParamList } from "../navigation/Root";


type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>WatchMate</Text>

      <View style={styles.box}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.subtitle}>Enter your email to sign up</Text>

        <TextInput
          placeholder="email@domain.com"
          style={styles.input}
          keyboardType="email-address"
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Tabs")}
        >
          <Text style={styles.btnText}>Continue</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.registerBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>Create account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  logo: {
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    marginVertical: 40,
  },
  box: {
    backgroundColor: "#F5F5F7",
    borderRadius: 16,
    padding: 22,
  },
  title: { fontSize: 20, fontWeight: "600" },
  subtitle: { fontSize: 13, color: "#777", marginBottom: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16, fontWeight: "600" },

  registerBtn: { marginTop: 14, alignItems: "center" },
  registerText: { color: "#000", fontSize: 14, fontWeight: "500" },
});
