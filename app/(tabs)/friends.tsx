import { View, Text, FlatList } from 'react-native';

export default function Friends() {
  const dummyFriends = [
    { id: '1', name: 'John Doe', status: 'Online' },
    { id: '2', name: 'Jane Smith', status: 'Offline' },
    { id: '3', name: 'Mike Johnson', status: 'Online' },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold mb-5">Friends List</Text>
      <FlatList
        data={dummyFriends}
        renderItem={({ item }) => (
          <View className="flex-row justify-between p-4 bg-gray-100 rounded-lg mb-3">
            <Text className="text-base font-medium">{item.name}</Text>
            <Text className="text-gray-500">{item.status}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}