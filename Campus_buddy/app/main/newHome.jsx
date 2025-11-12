import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ClockIcon} from "phosphor-react-native";

export default function NewHome() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "beige",
          padding:"10",
          gap:10,
        }}
      >
        <Text style={{
            color:"blue",
            fontWeight:"bold",
            fontSize:26,
        }}>Welcome Back, Student</Text>
        <Text>Here's your Campus overview</Text>
        <View style={{
            alignSelf:"center",
            justifyContent:"center",
             width: "90%",
              height: "20%"
        }}>
          <View
            style={{
             width:"100%",
             height:"100%",
              backgroundColor: "lightblue",
              borderRadius:10,
              padding:10,
              gap:10
            }}
          >
            <View>
                <View style={{
                    flexDirection:"row",
                }}>

                <ClockIcon size={26} />
                <Text style={{
                    fontWeight:"500",
                    fontSize:26,
                }}>
                Current Class</Text>
                </View>
                <Text style={{
                    fontSize:20,
                }}>10:45 AM - 12:15 PM</Text>
                <Text style={{
                    fontWeight:"bold",
                    fontSize:24
                }}>Software Engineering (Lab)</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent:"space-between"
              }}
            ><Text>Prof.B.Jones</Text>
            <Text>S204</Text>
             </View>
          </View>
        </View>
        <View style={{
            width:"100%",
            height:"35%",
            backgroundColor:"red",
        }}>
              <Text style={{
                fontSize:23
              }}>Quick Access</Text>
              <View style={{
                height:"80%",
                width:"100%",
                gap:5,
              }}>
                <View style={{
                    width:"100%",
                    height:"50%",
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}>
                    <View style={{
                        backgroundColor:"white",
                        width:"30%",
                        height:"100%",
                    }}><Text>high</Text></View>
                    <View style={{
                        backgroundColor:"white",
                        width:"10%",
                        height:"100%",
                    }}></View>
                    <View style={{
                        backgroundColor:"white",
                        width:"10%",
                        height:"100%",
                    }}></View>
                </View>
                <View style={{
                    width:"100%",
                    height:"50%",
                    flexDirection:"row",
                    justifyContent:"space-between"
                }}>
                    <View style={{
                        backgroundColor:"white",
                         width:"10%",
                        height:"100%",
                    }}></View>
                    <View style={{
                        backgroundColor:"white",
                         width:"10%",
                        height:"100%",
                    }}></View>
                    <View style={{
                        backgroundColor:"white",
                        width:"10%",
                        height:"100%",
                    }}><Text>low</Text></View>
                </View>
              </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
