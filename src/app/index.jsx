// expo router render file first -->entery point of the app
import {StyleSheet , Text, View,TextInput,Button} from "react-native"
import {Link} from "expo-router"
import { useState } from "react"
import Milestone from "./Milestone.jsx";

const Home=()=>{
const [ blockName, setBlockName] = useState('');
const [startTime, setStartTime] = useState('');
const [endTime, setEndTime] = useState('');
const [duration, setDuration] = useState('');

const handlesetBlockName=(name)=>{
setBlockName(name)
}
const handlesetStartTime=(start)=>{
setStartTime(start)
}
const handlesetEndTime=(end)=>{
    setEndTime(end)
}
const handlesetDuration=(duration)=>{
    setDuration(duration);
}
const handleAddBLock=(event)=>{
console.log(blockName)
console.log(startTime)
console.log(endTime)
console.log(duration)
}

    return (
<>
<View>
<Text>Step 1 of 2 - Build your system</Text>
<Text> Desing Your System</Text>
<Text> Name your focus session and set its duration . This becomes a repeatable unit in your daily system</Text>
</View>

        {/*Block code to set he name of the lbock and its durationa nd time*/}
<View>

<Text>Block Name</Text>
<TextInput
value={blockName}
  onChangeText={setBlockName}
 placeholder="Enter block name"
KeyboardType="default" 
/>

<Text> start time </Text>
<TextInput   
value ={startTime}
  onChangeText={setStartTime}
placeholder="Enter block start time eg 8:00 am"
keyboardType="numeric"
/>

<Text> end time </Text>
<TextInput  
value={endTime}
  onChangeText={setEndTime}
placeholder="Enter block end time eg 9:00 am"
keyboardType="numeric" 
/>

 <Text>Duration</Text>
<TextInput 
value={duration}
  onChangeText={setDuration}
placeholder="Enter block duration eg 1 hour"
keyboardType="numeric"
/>

<Button title="Add Block" onPress={handleAddBLock}/>

</View>
<Milestone/>

</>
    )
}
export default Home;

const styles =StyleSheet.create({


})