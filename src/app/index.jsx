// expo router render file first -->entery point of the app
import {StyleSheet , Text, View,TextInput,Button, TouchableOpacity} from "react-native"
import {Link} from "expo-router"
import { useEffect, useState } from "react"
import Milestone from "./Milestone.jsx";
import { Avatar, Card, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TimerPickerModal } from "react-native-timer-picker";
import { ScrollView } from "react-native/types_generated/index";

const Home=()=>{
const [ blockName, setBlockName] = useState('');
const [blockcard,setblockcard] = useState([]);  // here we have create an array besue we cna add as many block we want 
// this null state show that beofre the value in filled ont he statemnt no value should be shown here 
const [duration, setDuration] = useState('');
const[isFormVisible,setFormVisible]=useState(true); // this state is for the milestone form to show and hide it when we click on add milestone button
const [showPickerstart,setShowPickerstart]=useState(false);// this pick the start time for the librabry
const [showPickerend,setShowPickerend]=useState(false); // same for end
const [alaramStringstart,setAlaramStringstart]=useState(null)// this store the alram time in string for start int he library
const [alaramStringend,setAlaramStringend]=useState(null)//same for end


// thi sis the fucntion for the library whoch help sus format hr and mina nd verift it in array 
const formatTime=({ hours, minutes, seconds }
 )=>{
  const timeParts=[];
  if(hours !==undefined){
    timeParts.push(hours.toString().padStart(2,0));
  }
  if(minutes !==undefined){
    timeParts.push(minutes.toString().padStart(2,0));
  }
  if(seconds !==undefined){
    timeParts.push(seconds.toString().padStart(2,0)); // there is create an array and conver the number to string and if its two didta add azeo in fron tof it
  }
  return timeParts.join(":");
}

// here we have to add the set auto matic set duration function
// 1> first we have to take the value from alramstart and alramend and sub then 
// 2> should susb of hour  and min be diffrent and what about am and pm? --> we have to convert it into  since this is a 24 hr format --> i think this is still creating problem
//3> then pass the function in the return text duration input form // we are using useeffect so no nned to pass the pvlaue but remeber  the fucntion 

// futher porblem --> what if the user  does setting time black start from one day to anther day , how are we goignt o tackel that ?
// maybe create a speate block for each day beasue we  are usng 24 hr format ranter than am or pm format 

useEffect(()=>{
  if(alaramStringstart != null && alaramStringend != null){
const timeArraystart = alaramStringstart.split(":").map(Number);
const hoursdurationstart = timeArraystart[0];
const minutesdurationstart = timeArraystart[1];

const timeArrayend = alaramStringend.split(":").map(Number);
const hoursdurationend = timeArrayend[0];
const minutesdurationend = timeArrayend[1];
console.log("start parts:", alaramStringstart.split(":").map(Number))
console.log("end parts:", alaramStringend.split(":").map(Number))

const diff_in_hr=Math.abs(hoursdurationend-hoursdurationstart);
const diff_in_min=Math.abs(minutesdurationend-minutesdurationstart);
console.log(diff_in_hr,diff_in_min)
const totalduration=diff_in_hr+"hr"+diff_in_min+"min";
setDuration(totalduration);
}
},[alaramStringstart,alaramStringend])


const handlesetBlockName=(name)=>{
setBlockName(name)
}

const handlesetStartTime=(start)=>{
setShowPickerstart(start)
}
const handlesetEndTime=(end)=>{
    setShowPickerend(end)
} 


const handlesetDuration=(duration)=>{
    setDuration(duration);
}

const handleAddBlock = () => {
  setblockcard(prev => [...prev, {
    name: blockName,
    start: alaramStringstart,
    end: alaramStringend,
    duration: duration,
  }])
  console.log(alaramStringstart, alaramStringend, duration, blockName)  
  setFormVisible(false);
  setBlockName('')
setAlaramStringstart(null)
setAlaramStringend(null)
setDuration('')
};


    return (
<SafeAreaView style={styles.safeArea}>
  {isFormVisible ? (
    <>
    <ScrollView>
<View style={styles.headerContainer}>
<Text style={styles.stepTag}>Step 1 of 2 - Build your system</Text>
<Text style={styles.screenTitle}>Desing <Text style={{color:"black"}}>Your system </Text></Text>
<Text style={styles.screenSubtitle}>Name your focus session and set its duration.</Text>
<Text style={styles.screenSubtitle}>This becomes a repeatable unit in your daily system</Text>
</View>

        {/*Block code to set he name of the lbock and its durationa nd time*/}
<View style={styles.card}>

<Text style={styles.fieldLabel}>Time block name</Text>
<TextInput
style={styles.input}
value={blockName}
  onChangeText={setBlockName}
 placeholder="Enter block name"
placeholderTextColor="#A8C4D8"
KeyboardType="default" 
/>
<Text style={styles.fieldLabel}> start time </Text>
<TouchableOpacity onPress={() => setShowPickerstart(true)}>
  <View style={styles.input} pointerEvents="none">
    <Text style={showPickerstart ? { color: '#000' } : { color: '#A8C4D8' }}>
      {alaramStringstart ?? "Enter block start time eg 8:00 am"}
    </Text>
  </View>
</TouchableOpacity>

<TimerPickerModal
  closeOnOverlayPress
  onCancel={() => setShowPickerstart(false)}
  onConfirm={(pickerDuration) => {
    setAlaramStringstart(formatTime(pickerDuration));
    setShowPickerstart(false);
  }}
  setIsVisible={setShowPickerstart}
  visible={showPickerstart}
/>

<Text style={styles.fieldLabel}> end time </Text>
<TouchableOpacity onPress={() => setShowPickerend(true)}>
  <View style={styles.input} pointerEvents="none">
    <Text style={showPickerend ? { color: '#000' } : { color: '#A8C4D8' }}>
      {alaramStringend ?? "Enter block start time eg 8:00 am"}
    </Text>
  </View>
</TouchableOpacity>
<TimerPickerModal
  closeOnOverlayPress
  onCancel={() => setShowPickerend(false)}
  onConfirm={(pickerDuration) => {
    setAlaramStringend(formatTime(pickerDuration));
    setShowPickerend(false);
  }}
  setIsVisible={setShowPickerend}
  visible={showPickerend}
/>

 <Text style={styles.fieldLabel}>Duration</Text>
<TextInput 
style={styles.input}
value={duration}
placeholder="Enter block duration eg 1 hour"
placeholderTextColor="#A8C4D8"
keyboardType="numeric"
/>

<Button title="Add Block" onPress={handleAddBlock} color="#4A7A98" style={{padding:10}}/>

</View>
</ScrollView>
</>

  ):(
<View>
  <Button title="Add new block" onPress={() => setFormVisible(true)} />
</View>
  )}
{/*we need to make a block here , for that we are using statemanagement and event handler
 and this min=lestone will be render after we have create the block  
 like the milestone is insted the block 
*/} 
{blockcard && (
  blockcard.map((block,index) => (

  <View style={styles.cardblock}>
    <View style={styles.accentBar} />
    <View style={styles.cardContent}>

      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{block.name}</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Add Milestone</Text>
        </View>
      </View>

      <View style={styles.timeRow}>
        <View style={styles.timeBox}>
          <Text style={styles.timeLabel}>Start time</Text>
          <Text style={styles.timeValue}>{block.start}</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={styles.timeLabel}>End time</Text>
          <Text style={styles.timeValue}>{block.end}</Text>
        </View>
      </View>

      <View style={styles.durationBox}>
        <Text style={styles.timeLabel}>Duration</Text>
        <Text style={styles.timeValue}>{block.duration}</Text>
      </View>

    </View>
  </View>

  ))
)}

</SafeAreaView>

    )
}
export default Home;

const styles =StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F2E8DA',
    padding: 10,
  },
  headerContainer: {
    backgroundColor: '#F2E8DA',
    paddingHorizontal: 14,
    marginBottom: 20,
  },
  stepTag: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#6B9AB8',
    paddingVertical: 4,
  },
  screenTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4A7A98',
    marginBottom: 8,
  },
  screenSubtitle: {
    fontSize: 14,
    fontWeight: '400',
    color: '#6B9AB8',
    lineHeight: 21,
    paddingHorizontal: 2,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 4,
    marginBottom: 16,
    shadowColor: '#4A7A98',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.10,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(107, 154, 184, 0.18)',
  },
  fieldLabel: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    color: '#6B9AB8',
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderWidth: 1.5,
    borderColor: 'rgba(107, 154, 184, 0.28)',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1E1E1E',
  },
  cardblock: {
  backgroundColor: '#fff',
  borderRadius: 12,
  borderWidth: 0.5,
  borderColor: '#e0e0e0',
  flexDirection: 'row',
  overflow: 'hidden',
  marginTop: 16,
},
accentBar: {
  width: 4,
  backgroundColor: '#378ADD',
},
cardContent: {
  flex: 1,
  padding: 16,
},
cardHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 14,
},
cardTitle: {
  fontSize: 16,
  fontWeight: '500',
},
badge: {
  backgroundColor: '#E6F1FB',
  borderRadius: 99,
  paddingHorizontal: 10,
  paddingVertical: 3,
},
badgeText: {
  fontSize: 11,
  fontWeight: '500',
  color: '#185FA5',
},
timeRow: {
  flexDirection: 'row',
  gap: 12,
  marginBottom: 12,
},
timeBox: {
  flex: 1,
  backgroundColor: '#f5f5f5',
  borderRadius: 8,
  padding: 10,
},
durationBox: {
  backgroundColor: '#f5f5f5',
  borderRadius: 8,
  padding: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
timeLabel: {
  fontSize: 11,
  color: '#888',
  marginBottom: 4,
},
timeValue: {
  fontSize: 15,
  fontWeight: '500',
},
})