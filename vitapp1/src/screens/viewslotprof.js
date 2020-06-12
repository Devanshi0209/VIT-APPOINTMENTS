import React,{useState,useContext} from 'react';
import {StyleSheet,View,Button,FlatList,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header,ListItem,Overlay} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import {NavigationEvents} from 'react-navigation';

import Spacer from '../components/Spacer';

const viewslotprof=()=>{
	const {state,fetchslotscopehod}=useContext(slotcontext);

console.log(state);

	return (

<SafeAreaView forceInset={{top:'always'}} style={styles.container}>


      <Text style={{fontSize: 30}}>Slot Created!</Text>


</SafeAreaView>

		);

};

const styles=StyleSheet.create({
container:{
		flex:1,
		justifyContent:"center",
		marginVertical: 80
	}


});


viewslotprof.navigationOptions=()=>{
return {
headerShown : false
};
};
export default viewslotprof;