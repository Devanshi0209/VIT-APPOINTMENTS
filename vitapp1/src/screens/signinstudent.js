import React,{useState,useContext} from 'react';
import {Text,StyleSheet,View,Button} from 'react-native';
import {Input,Header} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/authcontext';
import {NavigationEvents} from 'react-navigation';


const signinstudent=({navigation})=>{
	const {state,signinstudent,clearerrormessage}=useContext(authcontext);

const [vitemail,setemail]=useState('');
const [regno,setregno]=useState('');
const [password,setpassword]=useState('');


return(
	
	<View style={styles.container}>
	<NavigationEvents
	onWillBlur={clearerrormessage}

	 />


	<Spacer>
	<Header
  centerComponent={{ text: 'SIGN IN AS A STUDENT', style: { color: '#fff' } }}

/>
</Spacer>
	
	<Spacer>
	<Input
	label='VIT Email id:'
	placeholder='firstname.lastname@vitstudent.ac.in' 
	value={vitemail}
	onChangeText={setemail}
	autoCapitalize="none"
	autoCorrect={false}
	/>
	</Spacer>

	<Spacer>
<Input
label='VIT Registration No:'
placeholder='eg. 17BCE0049'
value={regno}
onChangeText={setregno}
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
	title="Sign in"
	onPress={()=>signinstudent({vitemail,regno,password})} 
	/>
	</Spacer>


	<Spacer>
	<Button
	title="new user? signup first!"
	onPress={()=>navigation.navigate('Sus')} 
	/>
	</Spacer>



	</View>

	);
};

signinstudent.navigationOptions=()=>{
return {
headerShown : false
};
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

export default signinstudent;