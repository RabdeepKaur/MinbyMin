import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { useState,memo, useRef } from 'react';

const Milestone = () => {
  const NameRef = useRef("");
  const DurationRef = useRef("");
  console.log("Milestone rendered");

  // const [milestoneName,setMilestoneName] = useState();
  // const [duration, setDuration] = useState();


const handleSetTime = (milestoneName) => {
   setMilestoneName(milestoneName);
  };
const handleSetDuration = (duration) => {
  setDuration(duration);
 }
const handlesetmilestone = () => {
  console.log(NameRef.current);
  console.log(DurationRef.current);
}

  return (
    <>
      <View style={{ padding: 10, backgroundColor: '#eee' }}>
        <Text>Break it into Milestones</Text>
        <Text>Small steps make big tasks easy</Text>

        <TextInput
          placeholder="Milestone name"
          // value={milestoneName}
          onChangeText={(text) => NameRef.current = text}
          style={{ borderWidth: 1, marginVertical: 5 }}
        />

        <Text>Duration of the milestone</Text>

        <TextInput
          placeholder="30 min"
          keyboardType="numeric"
          // value={duration}
          onChangeText={(text) => DurationRef.current = text}
          style={{ borderWidth: 1, marginVertical: 5 }}
        />

        <Button title="Add Milestone" onPress={handlesetmilestone} />
      </View>

      <View>
        <Link href="/roadmap">Roadmap of success</Link>
        <Button title="View roadmap of success" />
      </View>
    </>
  );
  
};
// using memo here beause the milesotne get rederning every we interavtive wiht index js comepent to 
// ths memo help in imporve preformace issues
export default memo (Milestone);