import { StyleSheet,Text,View  } from "react-native";
import { Link } from "expo-router";
const Roadmap=()=>{
    return (
        <View>
            <Link href="/"> check my Milestone</Link>
            <Text>Your Path To Getting It Done</Text>
            <Text> Each dot is a milestone . Follow the path -- one step at a time</Text>
        </View>
    )
}       
export default Roadmap;

const styles=StyleSheet.create({

})