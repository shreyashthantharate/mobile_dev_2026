import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";

const HomeScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView>
      <View>
        <Image
          source={require("@/assets/images/logo.png")}
          style={{
            height: 100,
            width: 100,
          }}
          blurRadius={12}
        />
        <Text
          style={{
            fontSize: 36,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Text>
        <Text
          style={{
            textAlign: "center",
            paddingTop: 8,
          }}
        >
          Let's experience the joy of telecare AI.
        </Text>
        <Text
          style={{
            fontWeight: "bold",
          }}
        >
          Email Address
        </Text>
        <TextInput
          // <Image source={require()}/>
          style={{
            fontSize: 20,
            // borderWidth: 1,
            shadowColor: "#000",
            shadowOpacity: 0.02,
            shadowRadius: 4,
            elevation: 1,
          }}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => alert("Button Pressed")}>
          {({ pressed }) =>
            pressed ? <Text>Signing In...</Text> : <Text>Sign In</Text>
          }
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
