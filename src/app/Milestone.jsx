import { View, Text, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';
import { useState,memo, useRef } from 'react';
import { StyleSheet } from 'react-native';
// here we are using ref beause we dont wna the comepnt of milestone to be render multiple times when we interact wit the component of index js and also we dont want to use state here because we dont want the component to re-render when we set the value of the milestone name and duration
const Milestone = () => {
  const NameRef = useRef("");
  const DurationRef = useRef("");
  console.log("Milestone rendered");

  // const [milestoneName,setMilestoneName] = useState();
  // const [duration, setDuration] = useState();


// const handleSetTime = (milestoneName) => {
//    setMilestoneName(milestoneName);
//   };
// const handleSetDuration = (duration) => {
//   setDuration(duration);
//  }
const handlesetmilestone = () => {
  console.log(NameRef.current);
  console.log(DurationRef.current);
}

  return (
    <>
      <View style={styles.card}>
        <Text style={styles.fieldLabel}>Small steps make big tasks easy</Text>

        <TextInput 
        style={styles.input}
          placeholder="Milestone name"
          // value={milestoneName}
          onChangeText={(text) => NameRef.current = text}
        />

        <Text style={styles.fieldLabel}>Duration of the milestone</Text>

        <TextInput
          style={styles.input}
          placeholder="30 min"
          keyboardType="numeric"
          // value={duration}
          onChangeText={(text) => DurationRef.current = text}
        />

        <Button title="Add Milestone" onPress={handlesetmilestone}  color="#4A7A98" />
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
  })
