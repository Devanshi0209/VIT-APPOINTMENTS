
import React,{useState,useContext,useEffect} from 'react';
import {Text,StyleSheet,View,TouchableOpacity,ImageBackground} from 'react-native';
import {Input,Header,Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as authcontext} from '../context/authcontext';
import {NavigationEvents} from 'react-navigation';

const homescreen=({navigation})=>{

return(
	//<ImageBackground source={require('../../assets/bg.jpg')} style={{width: '100%', height: '100%'}}>


	<View style={styles.container}>
	<Spacer>
<Header

  leftComponent={{ icon: 'home', color: '#fff' }}
  centerComponent={{ text: 'VIT APPOINTMENTS', style: { color: '#fff',fontSize: 18,alignItems:"center" } }}
  
/>
</Spacer>
	<Spacer>
	<Button
	type="outline"
	title="SIGN UP AS A STUDENT"
	onPress={()=>navigation.navigate('Sus')}
	/>
	</Spacer>
<Spacer>
	<Button
	type="outline"
	title="SIGN IN AS A STUDENT"
	onPress={()=>navigation.navigate('Sis')}
	/>
	</Spacer>
<Spacer>
	<Button
	type="outline"
	title="SIGNUP AS A PROFESSOR"
	onPress={()=>navigation.navigate('Sup')}
	/>
	</Spacer>
<Spacer>
	<Button
	type="outline"
	title="SIGN IN AS A PROFESSOR"
	onPress={()=>navigation.navigate('Sip')}
	/>
	</Spacer>


<View>
<Spacer>
	<Button title="HELP" onPress={()=>{navigation.navigate('help')}} />
	</Spacer>
</View>

	</View>

	);
};

const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent: "center",
		marginVertical: 60

	},
	 backgroundImage: {
    flex: 1,
    resizeMode: 'stretch'
  }
});


homescreen.navigationOptions=()=>{
return {
headerShown: false
};
};

export default homescreen;