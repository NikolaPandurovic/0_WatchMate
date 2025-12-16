// app/screens/SignInScreen.tsx
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { RootStackParamList } from "../navigation/Root";
import { loginUser } from "../../firebase/firebaseAuth.js";


type Props = NativeStackScreenProps<RootStackParamList, "SignIn">;

const SignInScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      await loginUser(email, password);
      navigation.replace("Tabs"); // nach erfolgreichem Login in die App
    } catch (error: any) {
      Alert.alert("Login fehlgeschlagen", error.message);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>WatchMate</Text>

      <View style={styles.box}>
        <Text style={styles.title}>Welcome back!</Text>
        <Text style={styles.subtitle}>Log in to continue</Text>

        <TextInput
          placeholder="email@domain.com"
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 14 }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>
            Noch keinen Account?{" "}
            <Text style={{ fontWeight: "700" }}>Jetzt registrieren</Text>
          </Text>
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
  registerText: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
  },
});
