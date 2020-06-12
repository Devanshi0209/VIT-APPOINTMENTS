import React,{useState,useContext,useEffect} from 'react';
import {StyleSheet,View,Button,TouchableOpacity} from 'react-native';
import {Text,Input,Header,SocialIcon,Divider} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/authcontext';
import {NavigationEvents} from 'react-navigation';

const helpage=({navigation})=>{
	return (
		<View style={styles.container}>
		<Spacer>
	<Header
  centerComponent={{ text: 'HELP', style: { color: '#fff', flex:1, justifyContent: "center", fontSize:20 } }}

/>
</Spacer>


<Spacer>

<Text>ABOUT US</Text>
<Divider style={{ backgroundColor: 'black' }} />
</Spacer>
<Spacer>
	<Text>VIT APPOINTMENTS is a mobile application that helps students and professors of VIT to manage and create their appointments with each other. A professor on a certain designation is allowed to create slots whenever he/she is free. The students can navigate through these slots and choose to confirm a slot which creates an appointment successfully. The appointmentsfor each user are visible under the My Appointments Tab </Text>
</Spacer>




<Spacer>

<Text>CONTACT US</Text>
<Divider style={{ backgroundColor: 'black' }} />
</Spacer>

<Spacer>
<Text>Ph.no: 9600755589</Text>
<Text>Email ID: devanshichadha@gmail.com</Text>
</Spacer>


</View>
);
}

const styles=StyleSheet.create({

	container:{
		flex:1,
		justifyContent: "center",
		marginVertical: 60

	}
});
helpage.navigationOptions=()=>{
return {
headerShown: false
};
};

export default helpage;