import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import React from "react";

const HomeScreen = () => {
  const items = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "tomato" }}
      contentContainerStyle={{
        padding: 16,
        alignItems: "center",
      }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000", // used for IOS shadow
            shadowOpacity: 0.05, // used for IOS shadow
            shadowRadius: 4, // used for IOS shadow
            elevation: 2, // used for Android shadow
          }}
        >
          <Text style={{ fontSize: 16 }}>{item}</Text>
        </View>
      ))}
      <Button
        title="Hello i am button"
        color={"green"}
        onPress={() => alert("Hello world")}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
