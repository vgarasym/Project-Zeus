import { View, Text } from 'react-native';

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-2xl font-bold mb-2">Welcome Home</Text>
      <Text className="text-base text-gray-500">
        Discover new recipes and restaurants
      </Text>
    </View>
  );
}