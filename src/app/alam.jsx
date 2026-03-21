import { View,Text,TextInput,Button } from "react-native";
import { Link } from "expo-router";

const Alam=()=>{

    const [time, setTime] = useState('');

    const handlesetalam=()=>{
        // the alam value will be takne fro milestone 
        
    }
    return (
        <View>      
<Text>Wake up--</Text>
<Text>It's time to focus</Text>



{/**  add a working alma here
 *  this is will work with gettime and settime functions  from javascript
 *  the user will set the time for the alarm and when the alarm goes off it will trigger this component to show up
 *  we need to sync the alarm between the user
 * so when both user shutoff the alrm then only the alrm get off
*/}

<Text> Prove You're Awake to Snooze</Text>
<Text> Complete your Task and upload a photo-- then you can snooze</Text>

{/** display the task here by fetching the task */}


            </View>
    )
}

export default Alam;