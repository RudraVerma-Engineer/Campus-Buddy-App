import { Link, useRouter } from "expo-router";
import { ArrowLeftIcon, ListIcon } from "phosphor-react-native";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Structure from "../comp/structure.jsx";

export default function HomePages(){
  const router = useRouter();
  const [openHandle,setOpenHandle] = useState(false);
  function openHandler(){
    return(
      setOpenHandle(true)
    )
  }
  return(
    <ScrollView>
      <View style={styles.logoView}>
        <TouchableOpacity onPress={() => router.back()}>
          <ArrowLeftIcon size={28} weight="bold" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openHandler}>
          <ListIcon size={32} weight="bold" />
        </TouchableOpacity>
        </View>
      <View style={styles.greetingsView} >
        <Text style={styles.greetings}>Good morning,</Text>
        <Text style={styles.greetings}>Rudra</Text>
      </View>

      <View>
      <Structure/>
      </View>
        

      <View style={{
        height:"50%",
        width:"100%",
      }}>
        <View>
          <Text style={{
            fontSize:26,
            color:"#1c5e94ff",
            fontWeight:"bold"
          }}>Today's Schedule</Text>
          <View style={{
            marginHorizontal:"5%"
          }}>
          <Text style={{
            fontSize:26,
            fontWeight:"bold",
            color:"#06c5f5bd",
          }}>AI Workshop</Text>
          <View style={{flexDirection:"row", gap:"5%"}}>
            <Text>11:00 AM</Text>
            <Text> Lab 2</Text>
          </View>
          <Text  style={{
            fontSize:26,
            fontWeight:"bold",
            color:"#06c5f5bd",
          }}>Computer Science</Text>
          <View style={{flexDirection:"row", gap:"5%"}}>
            <Text>1:00 PM</Text>
            <Text> Room 105</Text>
          </View>
          </View>
          <Text style={{
            fontSize:26,
            color:"#1c5e94ff",
            fontWeight:"bold"
          }}>Campus Updates</Text>
          <View style={{
            marginHorizontal:"5%"
          }}>
          <Text style={{
            fontSize:26,
            fontWeight:"bold",
            color:"#06c5f5bd",
          }}>AI Workshop</Text>
          <View style={{flexDirection:"row", gap:"5%"}}>
            <Text>11:00 AM</Text>
            <Text> Lab 2</Text>
          </View>
        
          </View>
        </View>
          
        </View>
        <View style={{
          backgroundColor:"#C1E4E8",
          height:50,
          width:"95%",
          alignSelf:"center",
        }}>
          <Link href="/Pages/addDetails" asChild>
          <TouchableOpacity style={{
            height:"100%",
            width:"100%",
            justifyContent:"center",
            alignItems:"center"
          }}><Text>
            Add Details
          </Text>

          </TouchableOpacity>
            </Link>
          

        </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  logo:{
    aspectRatio:1,
    height:45,
    borderRadius:50,
  },
    logoView:{
      width:"100%",
        height:50,
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
      },
      greetings:{
          fontSize:30,
          color:"#1c5e94ff",
          fontWeight:"bold",
        },
  greetingsView:{
        height:100,
        width:"100%",
      }
})