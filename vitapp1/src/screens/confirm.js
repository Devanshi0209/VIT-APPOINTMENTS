import React,{useState,useContext} from 'react';
import {StyleSheet,View,Button,FlatList,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header,ListItem} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import {NavigationEvents} from 'react-navigation';
import {navigate} from '../navigationRef';
import Spacer from '../components/Spacer';

const confirm=()=>{
	const {state}=useContext(slotcontext);


	return (

<SafeAreaView forceInset={{top:'always'}} style={styles.container}>



<Text>Slot confirmed!</Text>

</SafeAreaView>

		);

};

const styles=StyleSheet.create({
container:{
		flex:1,
		justifyContent:"center"
	}


});
export default confirm;