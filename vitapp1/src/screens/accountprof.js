import React,{useContext} from 'react';
import {Text,StyleSheet,View} from 'react-native';
import {Button,Header} from 'react-native-elements';
import {Context as authcontext } from '../context/authcontext';
import Spacer from '../components/Spacer';
import {SafeAreaView} from 'react-navigation';

const accountprof=()=>{
	const {state,signoutprof}=useContext(authcontext);
return(
	<SafeAreaView style={styles.container}>
	<Spacer>
	<Header

  centerComponent={{ text: 'MY PROF. ACCOUNT', style: { color: '#fff',fontSize: 16,alignItems:"center" } }}
  
/>
</Spacer>
	<Spacer>
	<Button
  title="Sign Out"
  onPress={signoutprof}
/>
</Spacer>
	</SafeAreaView>
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

export default accountprof;