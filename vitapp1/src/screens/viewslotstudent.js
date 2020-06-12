import React,{useState,useContext} from 'react';
import {StyleSheet,View,Button} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import {NavigationEvents} from 'react-navigation';


const viewslotstudent=()=>{
	const {state,fetchslotscopehod}=useContext(slotcontext);
return(
	<View>
	<NavigationEvents onWillFocus={fetchslotscopehod}/>
	<Text>viewslotstudent</Text>


	</View>
	);
};

const style=StyleSheet.create({});

export default viewslotstudent;