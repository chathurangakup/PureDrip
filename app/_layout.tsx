
import { useFonts } from "expo-font";
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
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
      <Stack>
        <Stack.Screen name="index" options={{headerShown:false}} />
        <Stack.Screen name="onboarding" options={{headerShown:false}} />
      </Stack>

  );
}
