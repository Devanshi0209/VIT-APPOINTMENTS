import React,{useState,useContext} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header,ListItem,Button} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import {NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';
import {AsyncStorage} from 'react-native';

const viewprofstudent=({navigation})=>{
	const {state,removeexpiredslots,getoldslots}=useContext(slotcontext);


return(
	<SafeAreaView forceInset={{top:'always'}} style={styles.container}>
	<NavigationEvents onWillFocus={getoldslots}/>
	<Spacer>
	<Button title="SCOPE HOD" 
	onPress={()=>navigation.navigate('scopehod')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SCOPE DEAN" 
	onPress={()=>navigation.navigate('scopedean')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SITE HOD" 
	onPress={()=>navigation.navigate('sitehod')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SITE DEAN" 
	onPress={()=>navigation.navigate('sitedean')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SMEC HOD" 
	onPress={()=>navigation.navigate('smechod')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SMEC DEAN" 
	onPress={()=>navigation.navigate('smecdean')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SENSE HOD" 
	onPress={()=>navigation.navigate('sensehod')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SENSE DEAN" 
	onPress={()=>navigation.navigate('sensedean')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SELECT HOD" 
	onPress={()=>navigation.navigate('selecthod')}
	/>
	</Spacer>
	<Spacer>
	<Button title="SELECT DEAN" 
	onPress={()=>navigation.navigate('selectdean')}
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

viewprofstudent.navigationOptions=()=>{
return {
headerShown : false
};
};


export default viewprofstudent;