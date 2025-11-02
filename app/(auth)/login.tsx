import CustomButton from "@/components/CustomButton";
import CustomTextInput from "@/components/CustomTextInput";
import { useAuth } from "@/hooks/useAuth";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  const { login, loading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      Alert.alert("Success", "Logged in successfully!");
      router.replace("/(tabs)/home");
    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };
  return (
    <View className="flex-1 bg-white items-center pt-44 px-6 relative">
      <TouchableOpacity onPress={() => {}} className="absolute left-6 top-24">
        <Ionicons name="arrow-back" size={28} color="#38BDF8" />
      </TouchableOpacity>
      <View className="pb-10">
        <Text className="text-[20px] font-bold text-left text-pure-blue mb-2 px-6">
          Welcome Back!
        </Text>
        <Text className="text-[#625D5D] text-left mb-8 px-6 text-[14px]">
          Please fill in your email and password to login to your account.
        </Text>
      </View>
      {/* Inputs */}
      <CustomTextInput
        placeholder="Email"
        keyboardType="email-address"
        inputName="Email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomTextInput
        placeholder="Password"
        secureTextEntry
        inputName="Password"
        value={password}
        onChangeText={setPassword}
      />

      {/* Fogot Password */}
      <TouchableOpacity className="self-end mr-[20px] mb-20" onPress={() => {}}>
        <Text className="text-pure-gray-2 font-semibold">Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login button */}
      <CustomButton title={loading ? "Logging in..." : "Login"} onPress={handleLogin} />

      {/* Sign Up Link */}
      <View className="flex-row mt-6">
        <Text className="text-pure-gray-2">Don’t have an account? </Text>
        <TouchableOpacity onPress={() => router.push("/signup")}>
          <Text className="text-pure-blue font-semibold">Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
