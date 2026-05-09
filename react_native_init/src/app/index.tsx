import { View, Text, Image, TextInput } from "react-native";
import { useState } from "react";

export default function HomeScreen() {
  const [name, setName] = useState("");
  return (
    <View>
      <Text numberOfLines={6}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eius
        laboriosam, illo aspernatur deleniti magnam quisquam hic delectus
        maiores maxime accusamus provident ad voluptates tempora totam
        consectetur! Similique reiciendis atque voluptate ipsum praesentium
        facilis nam eum? Tempore ex voluptate totam nobis et excepturi a
        eligendi, magni quod? Quis autem cupiditate modi, quas rerum architecto
        alias at perferendis molestiae enim itaque?
      </Text>
      {/* Three ways to load images */}
      {/* Remote image from internet */}
      <Image
        source={{
          uri: "https://cdn.dribbble.com/userupload/42554942/file/original-8c08872b10a618de098360d1ef04f0b7.png?resize=845x634&vertical=center",
        }}
        width={100}
        height={100}
      />
      {/* Local image from directory */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 100,
          width: 100,
        }}
        blurRadius={12}
      />
      <TextInput
        placeholder="enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"tomato"}
        style={{
          borderWidth: 1,
          borderColor: "#000",
          margin: 10,
          fontSize: 16,
          borderRadius: 6,
        }}
      />
    </View>
  );
}
