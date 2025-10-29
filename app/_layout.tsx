import { AuthProvider } from "@/context/AuthContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "./global.css";

SplashScreen.preventAutoHideAsync(); // 👈 Keeps splash visible

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PollerOneRegular: require("../assets/fonts/PollerOne-Regular.ttf"),
  });
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync(); // hide when fonts are ready
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}> </Stack>
    </AuthProvider>
  );
}
