import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack screenOptions={{ headerShown: false }} />;
}
// screenOptions={{ headerShown: false }}
// this hides the header from android screen
