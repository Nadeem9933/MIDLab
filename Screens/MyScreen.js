import { useEffect } from "react";
import { View,Text } from "react-native";
import Myhooks from "../CustomHooks/Myhooks";



const Myscreen = ()=>{
    const {myfun} = Myhooks();
useEffect(()=>{
    myfun('https://reactnative.dev/movies.json')
})


return(
    <View><Text>Meri Phli Screen</Text></View>
)
}
export default Myscreen;