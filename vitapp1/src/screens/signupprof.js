import React,{useState,useContext} from 'react';
import {Text,StyleSheet,View,Button} from 'react-native';
import {Input,Header} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/authcontext';
import {NavigationEvents} from 'react-navigation';

const signupprof=({navigation})=>{

const [vitemail,setemail]=useState('');
const [designation,setdesignation]=useState('');
const [password,setpassword]=useState('');

const {state, signupprof,clearerrormessage}=useContext(authcontext);

return(
	<View style={styles.container}>
	<NavigationEvents
	onWillBlur={clearerrormessage}

	 />
	<Spacer>
	<Header
  centerComponent={{ text: 'SIGN UP AS A PROFESSOR', style: { color: '#fff' } }}
/>
</Spacer>
<Spacer>
	<Input
	label='VIT Email id:'
	placeholder='designation.school@vit.ac.in' 
	value={vitemail}
	onChangeText={setemail}
	autoCapitalize="none"
	autoCorrect={false}
	/>

</Spacer>
<Spacer>
<Input
label='Designation:'
placeholder='eg.scopehod'
value={designation}
onChangeText={setdesignation}
autoCapitalize="none"
	autoCorrect={false}
 />

</Spacer>
<Spacer>
<Input
label='Password:'
placeholder='........'
value={password}
onChangeText={setpassword}
autoCapitalize="none"
	autoCorrect={false}
	secureTextEntry
 />

</Spacer>
 {state.errorMessage ? <Text style={styles.te1}>{state.errorMessage}</Text> : null}

 <Spacer>
	<Button
	title="Sign Up"
	onPress={()=>signupprof({vitemail,designation,password})}
	/>
</Spacer>

	<Spacer>
	<Button
	title="already have an account? Sign In"
	onPress={()=>navigation.navigate('Sip')}
	/>
</Spacer>
	</View>
	);
};

const styles=StyleSheet.create({

	container:{
	flex: 1,
	justifyContent: "center"
},
te1:{
	color:'red',
	justifyContent:"center",
	margin: 20
}
});

signupprof.navigationOptions=()=>{
return {
headerShown : false
};
};

export default signupprof;