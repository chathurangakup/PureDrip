import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Image, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Splash = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/onboarding"); // ✅ use relative path (no "/")
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-pure-blue">
      <Image
        source={require("../assets/images/icon.png")}
        className="w-32 h-32 mb-4"
        resizeMode="contain"
      />
      <Text
        className="text-3xl font-bold text-white"
        style={{ fontFamily: "PollerOneRegular" }}
      >
        Pure Drip
      </Text>
    </SafeAreaView>
  );
};

export default Splash;