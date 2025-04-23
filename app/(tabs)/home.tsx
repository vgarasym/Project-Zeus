import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-[#F5F5F5]">
      <TouchableOpacity
        className="bg-[#003A63] px-32 py-4 rounded-full flex-row items-center"
        onPress={() => router.push("/game")}
      >
        <Text className="text-white text-3xl font-semibold">▶ Play</Text>
      </TouchableOpacity>
    </View>
  );
}
