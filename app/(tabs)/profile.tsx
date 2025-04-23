import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "expo-router";

export default function Profile() {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/100"
  );
  const navigation = useNavigation();

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Sorry, we need camera roll permissions to make this work!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
      // Update the tab bar icon
      navigation.setOptions({
        tabBarIcon: ({ color, size }) => (
          <Image
            source={{ uri: result.assets[0].uri }}
            style={{ width: size, height: size, borderRadius: size / 2 }}
          />
        ),
      });
    }
  };

  return (
    <View className="flex-1 bg-[#F5F5F5]">
      <View className="items-center p-5 border-b border-gray-200">
        <TouchableOpacity onPress={pickImage}>
          <Image
            className="w-24 h-24 rounded-full mb-2"
            source={{ uri: profileImage }}
          />
          <Text className="text-center text-blue-500 mb-2">Change Photo</Text>
        </TouchableOpacity>
        <Text className="text-2xl font-bold mb-1">John Doe</Text>
        <Text className="text-base text-gray-500">john.doe@example.com</Text>
      </View>

      <View className="p-5">
        <TouchableOpacity className="py-4 border-b border-gray-200">
          <Text className="text-base">Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-4 border-b border-gray-200">
          <Text className="text-base">Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="py-4 border-b border-gray-200">
          <Text className="text-base">Help & Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
