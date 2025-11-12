import { Link } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function OnBoardingPage() {
    
  return (
    <ImageBackground
      source={require("../images/avatars/onboarding.jpg")} // background image
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome To</Text>
        <Text style={styles.title}>Campus Buddy</Text>

        <Image
          source={{ uri: "https://avatars.githubusercontent.com/u/90274323?s=280&v=4" }}
          style={styles.logo}
        />
<Link href={'/Login/signup'} asChild>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
</Link>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height:"100%",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    color: "#315575",
    fontSize: 30,
    fontWeight: "600",
    paddingTop: 20,
  },
  title: {
    color: "#315575",
    fontSize: 40,
    fontWeight: "bold",
  },
  logo: {
    height: 250,
    aspectRatio: 1,
    borderRadius: 20,
    marginVertical: 50,
  },
  button: {
    backgroundColor: "#315575",
    width: "70%",
    height: "11%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 29,
  },
  buttonText: {
    fontWeight: "800",
    fontSize: 32,
    color: "white",
  },
});
