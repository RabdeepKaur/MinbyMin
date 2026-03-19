// expo router render file first -->entery point of the app
import {StyleSheet , Text, View,TextInput,Button} from "react-native"
import {Link} from "expo-router"
import { useState } from "react"

const Milestone=()=>{
const [time,setTime]=useState('');

const handleSetTime=()=>{
    // asycn fucntion that will store the value of the milestone time int he database
    
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
<Text> Block Deatils</Text>

<TextInput>
    <Text>Block Name</Text>
    placeholder="Enter block name"
    KeyboardType="default"
</TextInput>

<TextInput>
    <Text> start time </Text>
    placeholder="Enter block start time"
    KeyboardType="numeric"
</TextInput>

<TextInput>
    <Text> end time </Text>

    placeholder="Enter block end time"

    KeyboardType="numeric"
</TextInput>

<TextInput>
    <Text>Duration</Text>

    placeholder="Enter block duration"
  
    KeyboardType="numeric"
</TextInput>

 </View>

 {/** Mile stone break down */}

 <View>
    <Text>Break it into Milestone</Text>
    <Text> small steps make big task easy</Text>

<TextInput>
        <Text>Milestone name</Text>
        placeholder="e.g Get up time"
</TextInput>

<TextInput>
    <Text> Duration of the milestone</Text>

    placeholder=" 30 min"
    keyboardType="numeric"
</TextInput>
{/** here we need the function to take the alrm vlaue and pass the vlaue to alam.jsx file */}
<Button title="Add Milestone" onPress={()=>{}}/>

 </View>

 <View>
    <Link href="/roadmap"> Roadmap of success</Link>
<Button title="View roadmap of success" onPress={()=>{}}/>
 </View>
        </>
    )
}
export default Milestone;

const styles =StyleSheet.create({})