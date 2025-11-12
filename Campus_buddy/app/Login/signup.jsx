import { Link, useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, ImageBackground, Text, TextInput, TouchableOpacity, View } from "react-native";
export default function SignUp() {
    const router = useRouter();
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      password: "",
    });

    const dimensionScreen = Dimensions.get("screen");
    const heightScreen = dimensionScreen.height;
    const heightRequired = heightScreen / 2;

    const handleChange = (field, value) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
    };
  
    

    const handleSubmit = () => {
      console.log("Form Data:", formData);
      
    };

    return (
      <View style={{ width: "100%", height: "100%" }}>
        <ImageBackground
          source={require("../../images/colorbg.png")}
          style={{ height: "100%", width: "100%" }}
        >
          <View style={{ height: "100%", width: "100%" }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 32,
                textAlign: "center",
                paddingTop: 20,
              }}
            >
              Welcome to our App
            </Text>

            <View
              style={{
                backgroundColor: "rgba(130, 220, 249, 0.5)",
                width: "60%",
                alignSelf: "center",
                borderRadius: 12,
                top: heightRequired - 100,
                transform: [{ translateY: "-50%" }],
                shadowColor: "#82DCF9",
                shadowOpacity: 0.8,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 10,
                elevation: 8,
              }}
            >
              <View style={{ padding: 10 }}>
                <Text style={{ margin: 10, fontWeight: "bold" }}>Name:</Text>
                <TextInput
                  value={formData.name}
                  onChangeText={(text) => handleChange("name", text)}
                  placeholder="Enter your Name"
                  style={{
                    backgroundColor: "white",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    padding: 10,
                  }}
                />

                <Text style={{ margin: 10, fontWeight: "bold" }}>Email:</Text>
                <TextInput
                  value={formData.email}
                  onChangeText={(text) => handleChange("email", text)}
                  placeholder="Enter your Email"
                  style={{
                    backgroundColor: "white",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    padding: 10,
                  }}
                />

                <Text style={{ margin: 10, fontWeight: "bold" }}>Password:</Text>
                <TextInput
                  value={formData.phone}
                  onChangeText={(text) => handleChange("phone", text)}
                  placeholder="Enter your Mobile No."
                  keyboardType="phone-pad"
                  style={{
                    backgroundColor: "white",
                    width: "90%",
                    alignSelf: "center",
                    borderRadius: 10,
                    padding: 10,
                  }}
                />
              </View>
              <Link href='../main/basic' asChild>
              <TouchableOpacity onPress={handleSubmit} 
              style={{ 
                backgroundColor: "#315575", 
                margin: 20, 
                borderRadius: 10 
                }}>
                <Text style={{ color: "white", textAlign: "center", padding: 10 }}>Submit</Text>
              </TouchableOpacity>
              </Link>
            </View>
          
          </View>
        </ImageBackground>
      </View>
    );
  }
  
