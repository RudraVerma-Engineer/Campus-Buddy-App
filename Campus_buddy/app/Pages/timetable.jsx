import { useEffect } from "react";
import { useState } from "react";
import { Text, View } from "react-native";

export default function TimeTables(){

    const [timetableData,setTimeTableData] = useState([]);

    const Base_Url = "http://10.216.1.185:5000/api/timetables";

    useEffect(()=>{
        fetch(Base_Url).then((res)=>{
            res.json().then((data)=>{
                console.log(data);
                if(data){
                    setTimeTableData(data)
                    console.log(data.timetables[0].institute)
                }
            })
        })
    },[]);

    return(
        <View style={{
            width:"100%",
            height:"100%",

        }}>
            <View style={{
                alignItems:"center",
            }}>
                <Text>{timetableData.timetables[0].institute} </Text>
                <Text>Student Timetable:- 2025-26 (Odd Semester)</Text>
                <Text>w.e.f.-13/8/25</Text>
            </View>
            <View>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginHorizontal:"10",
                }}>
                    <Text>Semester:-5th</Text>
                    <Text>Section:-C</Text>
                </View>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"space-between",
                    marginHorizontal:"10",
                }}>
                    <Text>Class O.C.: Ms. Meenakshi Yadav</Text>
                    <Text> Counselor: Ms. Me</Text>
                </View>
            </View>
        </View>
    )
}