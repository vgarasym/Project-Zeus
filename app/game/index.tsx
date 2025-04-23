import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import { router } from "expo-router";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function GameMode() {
  return (
    <View className="flex-1">
      <SafeAreaView className="bg-[#003A63]" />
      <View className="flex-1 bg-[#F5F5F5]">
        <View className="bg-[#003863] py-4 px-4 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <FontAwesome name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <View className="flex-1 items-center">
            <Image
              source={require("../../assets/logos/swipeatsheaderlogo.png")}
              className="w-32 h-8 resize-contain"
            />
          </View>
        </View>
        <View className="p-6 flex-1">
          <Text className="text-2xl font-bold mb-6">Solo</Text>
          <TouchableOpacity
            className="bg-white p-8 rounded-2xl mb-8 border border-gray-200"
            onPress={() => console.log("Solo mode selected")}
          >
            <Text className="text-[#003A63] text-2xl font-bold text-center">
              Start Now!
            </Text>
          </TouchableOpacity>

          <Text className="text-2xl font-bold mb-6">Host</Text>
          <TouchableOpacity
            className="bg-white p-8 rounded-2xl border border-gray-200"
            onPress={() => console.log("Host mode selected")}
          >
            <Text className="text-[#003863] text-2xl font-bold text-center">
              Invite Friends!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
