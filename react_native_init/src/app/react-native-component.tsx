// import { View, Text, Image, TextInput, Pressable } from "react-native";
// import { useState } from "react";

// export default function HomeScreen() {
//   const [name, setName] = useState("");
//   return (
//     <View>
//       <Text numberOfLines={6}>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur eius
//         laboriosam, illo aspernatur deleniti magnam quisquam hic delectus
//         maiores maxime accusamus provident ad voluptates tempora totam
//         consectetur! Similique reiciendis atque voluptate ipsum praesentium
//         facilis nam eum? Tempore ex voluptate totam nobis et excepturi a
//         eligendi, magni quod? Quis autem cupiditate modi, quas rerum architecto
//         alias at perferendis molestiae enim itaque?
//       </Text>
//       {/* Three ways to load images */}
//       {/* Remote image from internet */}
//       <Image
//         source={{
//           uri: "https://cdn.dribbble.com/userupload/42554942/file/original-8c08872b10a618de098360d1ef04f0b7.png?resize=845x634&vertical=center",
//         }}
//         width={100}
//         height={100}
//       />
//       {/* Local image from directory */}
//       <Image
//         source={require("@/assets/images/icon.png")}
//         style={{
//           height: 100,
//           width: 100,
//         }}
//         blurRadius={12}
//       />
//       <TextInput
//         placeholder="enter your name"
//         value={name}
//         onChangeText={setName}
//         placeholderTextColor={"tomato"}
//         style={{
//           borderWidth: 1,
//           borderColor: "#000",
//           margin: 10,
//           fontSize: 16,
//           borderRadius: 6,
//         }}
//       />

//       <Pressable
//         // onLongPress={}
//         // onPressIn={}
//         // onPressOut={}
//         onPress={() => alert("Button Pressed")}
//         style={({ pressed }) => ({
//           backgroundColor: pressed ? "#f97474" : "#87fd54",
//           color: "#fff",
//         })}
//         hitSlop={{
//           top: 10,
//           bottom: 10,
//           right: 10,
//           left: 10,
//         }}
//       >
//         {({ pressed }) =>
//           pressed ? <Text>Processing</Text> : <Text>Pressed</Text>
//         }
//         {/* <Text>Press Me</Text> */}
//       </Pressable>
//     </View>
//   );
// }

// //////////////////////////////

// import {
//   StyleSheet,
//   Text,
//   View,
//   ScrollView,
//   Button,
//   Switch,
// } from "react-native";
// import React from "react";
// import { useState } from "react";

// const HomeScreen = () => {
//   const items = Array.from({ length: 200 }, (_, i) => `Item ${i + 1}`);

//   const [isDarkMode, setIsDarkMode] = useState(false);

//   return (
//     <ScrollView
//       style={{ flex: 1, backgroundColor: "tomato" }}
//       contentContainerStyle={{
//         padding: 16,
//         alignItems: "center",
//       }}
//     >
//       {items.map((item) => (
//         <View
//           key={item}
//           style={{
//             backgroundColor: "white",
//             padding: 16,
//             borderRadius: 10,
//             marginBottom: 10,
//             shadowColor: "#000", // used for IOS shadow
//             shadowOpacity: 0.05, // used for IOS shadow
//             shadowRadius: 4, // used for IOS shadow
//             elevation: 2, // used for Android shadow
//           }}
//         >
//           <Text style={{ fontSize: 16 }}>{item}</Text>
//         </View>
//       ))}
//       <Button
//         title="Hello i am button"
//         color={"green"}
//         onPress={() => alert("Hello world")}
//       />
//       <Switch
//         value={isDarkMode}
//         onValueChange={setIsDarkMode}
//         trackColor={{ false: "#ddd", true: "#6c62ff" }}
//         thumbColor={"gold"}
//       />
//     </ScrollView>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});

// /////////////////////////
// import { StyleSheet, Text, View, FlatList } from "react-native";
// import React from "react";

// const HomeScreen = () => {
//   const USERS = [
//     { id: "1", name: "Alice Johnson", role: "Designer" },
//     { id: "2", name: "Bob Smith", role: "Developer" },
//     { id: "3", name: "Carol White", role: "Manager" },
//     { id: "4", name: "David Brown", role: "Developer" },
//     { id: "5", name: "Eve Davis", role: "Designer" },
//   ];

//   return (
//     <FlatList
//       style={{
//         backgroundColor: "red",
//       }}
//       data={USERS}
//       horizontal // make view horizontal
//       keyExtractor={(item) => item.id}
//       contentContainerStyle={{ padding: 16, backgroundColor: "green" }}
//       renderItem={({ item }) => <Text>{item.name}</Text>}
//       ItemSeparatorComponent={() => (
//         <View style={{ height: 1, backgroundColor: "black" }} />
//       )}
//     />
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({});
