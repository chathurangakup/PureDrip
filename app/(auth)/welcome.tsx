import CustomButton from "@/components/CustomButton";
import Images from "@/constants/images";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <View className="flex-1">
      {/* Background Image */}
      <ImageBackground
        source={Images.Image_BG}
        resizeMode="cover"
        className="flex-1 justify-center items-center"
      >
        {/* Gradient Overlay */}
        <LinearGradient
          colors={[
            "rgba(0,0,0,0)", // top fully transparent
            "rgba(0,0,0,0.4)", // middle slightly dark
            "rgba(0,0,0,0.8)", // bottom darker
          ]}
          locations={[0, 0.5, 1]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
          }}
        />

        {/* Title and Subtitle */}

        <View className="absolute items-center mt-44">
          <Text className="text-white text-3xl font-bold text-center">Welcome to Drips Water</Text>
          <Text className="text-white text-lg mt-2 text-center">Water Delivery App</Text>
        </View>

        {/* Buttons */}

        <View className="absolute bottom-40 w-full items-center">
          <CustomButton
            title="CREATE AN ACCOUNT"
            onPress={() => {}}
            backgroundColor="bg-white"
            textColor="text-black"
            width={320}
            height={55}
            borderRadius={12}
            fontSize={14}
          />
          <View className="h-4" />
          <CustomButton
            title="LOGIN"
            onPress={() => router.push("/login")}
            backgroundColor="bg-black"
            textColor="text-white"
            containerStyle="border border-white"
            width={320}
            height={55}
            borderRadius={12}
            fontSize={14}
          />
        </View>

        {/* Continue as guest */}
        <TouchableOpacity className="absolute bottom-28" activeOpacity={0.7}>
          <Text className="text-white text-center underline">Continue as a Guest</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default WelcomeScreen;
