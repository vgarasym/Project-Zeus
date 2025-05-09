import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { router } from "expo-router";
import { supabase } from "../../lib/supabase";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignIn = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.replace("/(tabs)/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = (provider: string) => {
    // Implement social sign-in logic here
    Alert.alert("Coming Soon", `${provider} sign-in will be available soon!`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View className="flex-1 bg-white p-4 justify-center">
        <View className="items-center mb-24">
          <Image
            source={require("../../assets/logos/swipeatsblack.png")}
            className="w-[370px] h-[120px] mb-2"
          />
        </View>
        <View className="space-y-4">
          <TextInput
            className="bg-gray-100 p-4 rounded-lg"
            placeholder="Email"
            placeholderTextColor="#9CA3AF"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            className="bg-gray-100 p-4 rounded-lg mb-8"
            placeholder="Password"
            placeholderTextColor="#9CA3AF"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            className="bg-[#003863] p-4 rounded-lg mb-8"
            onPress={handleSignIn}
            disabled={loading}
          >
            <Text className="text-white text-center font-semibold">
              {loading ? "Signing in..." : "Sign in"}
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center my-2">
            <View className="flex-1 h-[1px] bg-gray-300" />
            <Text className="mx-4 text-gray-500">OR</Text>
            <View className="flex-1 h-[1px] bg-gray-300" />
          </View>

          <View className="flex-row justify-center space-x-4 pt-[-12px]">
            <TouchableOpacity
              className="p-3 bg-gray-100 rounded-full"
              onPress={() => handleSocialSignIn("Google")}
            >
              <Image
                source={require("../../assets/logos/google-logo.webp")}
                className="w-8 h-8"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="p-3 bg-gray-100 rounded-full"
              onPress={() => handleSocialSignIn("Facebook")}
            >
              <Image
                source={require("../../assets/logos/facebook-logo.png")}
                className="w-8 h-8"
              />
            </TouchableOpacity>

            <TouchableOpacity
              className="p-3 bg-gray-100 rounded-full"
              onPress={() => handleSocialSignIn("Twitter")}
            >
              <Image
                source={require("../../assets/logos/twitter-logo.jpg")}
                className="w-8 h-8"
              />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center py-12">
            <Text className="text-gray-600">Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text className="text-[#003863]">Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
