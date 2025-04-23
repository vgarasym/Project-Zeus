import * as Font from "expo-font";

export async function loadFonts() {
  try {
    await Font.loadAsync({
      "SF-Pro-Display-Regular": require("../assets/fonts/SFPRODISPLAYREGULAR.OTF"),
      "SF-Pro-Display-Medium": require("../assets/fonts/SFPRODISPLAYMEDIUM.OTF"),
    });
    console.log("Fonts loaded successfully");
  } catch (error) {
    console.error("Error loading fonts:", error);
  }
}
