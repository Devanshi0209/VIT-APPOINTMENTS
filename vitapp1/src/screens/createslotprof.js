import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Button,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header,ListItem,Overlay} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import DateTimePicker from '@react-native-community/datetimepicker';
//import DatePicker from 'react-native-datepicker';
import Spacer from '../components/Spacer';
import { AsyncStorage } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";


const createslotprof=()=>{

const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => callback(state), [state, callback]);

  return [state, setState];
};



 const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };



const [desi,setdesi]=useState('');
AsyncStorage.getItem('designation').then(value => {
      setdesi(JSON.parse(value))
    }).done();
console.log({desi});
const [designation,setdesignation]=useState('');
const [dateandtime,setdateandtime]=useState(new Date());
const [venue,setvenue]=useState('');
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);


const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

   const handleConfirm = date => {
   	hideDatePicker();
    console.log("A date has been picked: ", date);
    setdateandtime(date);
    
  };






const {state,startcreating}=useContext(slotcontext);
console.log({designation,dateandtime,venue});

return(
	<SafeAreaView forceInset={{top:'always'}} style={styles.container}>
	<Spacer>
	<Header
  centerComponent={{ text: 'CREATE A NEW SLOT', style: { color: '#fff' } }}
/>
</Spacer>




<Spacer>
<Input
label='Venue:'
placeholder='eg. SJT 301'
value={venue}
onChangeText={setvenue}
autoCapitalize="none"
	autoCorrect={false}
 />
 </Spacer>

<Spacer>
<View style={{alignItems:"center"}}>
<Text style={{fontWeight: "bold", color:"grey"}}>Pick a date and time: </Text>
</View>
<Button title={` ${dateandtime}`} onPress={showDatePicker} />


<DateTimePickerModal
		isVisible={isDatePickerVisible}
        mode="datetime"
        date={dateandtime}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          is24Hour={true}
          display="default"
      />
</Spacer>





 <Button
	title="Create Slot"
	onPress={()=>{
		startcreating({designation: desi,dateandtime,venue});
		toggleOverlay();

	}}
	/>


 <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
 <View style={styles.container1}>
        <Text style={{fontSize: 20 }}>Slot Created!</Text>
        <Text>Press the backdrop to return.</Text>
        </View>
      </Overlay>


	</SafeAreaView>
	);
};

const styles=StyleSheet.create({

	container:{
		flex:1,
		justifyContent:"center"
	},
	container1:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"

	}
});


createslotprof.navigationOptions=()=>{
return {
headerShown: false
};
};

export default createslotprof;