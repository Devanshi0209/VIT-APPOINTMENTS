import React,{useContext} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {Button,Header} from 'react-native-elements';
import {Context as authcontext } from '../context/authcontext';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';
import {AsyncStorage} from 'react-native';


const accountstudent=()=>{
	const {state,signoutstudent}=useContext(authcontext);


return(
	<SafeAreaView style={styles.container}>
	<Spacer>
	<Header

  centerComponent={{ text: 'MY STUDENT ACCOUNT', style: { color: '#fff',fontSize: 16,alignItems:"center" } }}
  
/>
</Spacer>

	<Spacer>
	<Button
  title="Sign Out"
  onPress={signoutstudent}
/>
</Spacer>
	</SafeAreaView>
	);
};

const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center"
	}

});



export default accountstudent;