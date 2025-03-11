import { View, Text, FlatList } from 'react-native';

export default function Communities() {
  const dummyCommunities = [
    { id: '1', name: 'Vegetarian Foodies' },
    { id: '2', name: 'Italian Cuisine Lovers' },
    { id: '3', name: 'Healthy Eating' },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-5">Your Communities</Text>
      <FlatList
        data={dummyCommunities}
        renderItem={({ item }) => (
          <View className="p-4 bg-gray-100 rounded-lg mb-3">
            <Text className="text-base font-medium">{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}