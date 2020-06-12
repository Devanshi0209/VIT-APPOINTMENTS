import { AsyncStorage } from 'react-native';
import createdatacontext from './createdatacontext';
import React from 'react';
import appointerApi from '../api/appointer';
import {navigate} from '../navigationRef';

const authreducer=(state,action)=>{
	switch(action.type){
		case 'adderr':
		return {...state, errorMessage:action.payload};
		case 'signupstud':
		return {errorMessage:'',token:action.payload};
		case 'clearup':
		return {...state,errorMessage:''};
		case 'signoutstud':
		return {token: null, errorMessage:'',who:null};
		case 'adderr1':
		return {...state,errorMessage:action.payload};
		case 'signupp':
		return {errorMessage:'',token:action.payload};
		case 'signoutp':
		return {token: null, errorMessage:'', who:null}

		default:
		return state;
	}

};

const localsignin=dispatch=> async ()=>{
const token=await AsyncStorage.getItem('token');
const who=await AsyncStorage.getItem('who');
if (token){
	if (who=='student'){
	dispatch({type: 'signupstud',payload:token});
	navigate('studentmainflow');}
	if (who=='prof'){
		dispatch({type: 'signupp',payload:token});
	navigate('profmainflow');

	}
}
else{
	navigate('Home');
}
};

const clearerrormessage=dispatch=>()=>{
dispatch({type:'clearup'});
};

const signupstudent=dispatch=>{
return async ({vitemail,regno,password})=>{

	try{
		const response=await appointerApi.post('/signupstudent',{vitemail,regno,password});
		console.log({vitemail,regno,password});

		await AsyncStorage.setItem('token',response.data.token);
		await AsyncStorage.setItem('who','student');
		dispatch({type:'signupstud',payload:response.data.token});
		//console.log(`${regno}`);
		await AsyncStorage.setItem('regno',JSON.stringify(`${regno}`));
		navigate('studentmainflow');


	}
	catch(err){
		dispatch({type:'adderr', payload: "Something went wrong with sign up"});
		//console.log(err.message);

	}

};
};


const signinstudent=dispatch=>{
return async ({vitemail,regno,password})=>{
	try{
		const response=await appointerApi.post('/signinstudent',{vitemail,regno,password});
		await AsyncStorage.setItem('token',response.data.token);
		await AsyncStorage.setItem('who','student');
		dispatch({type:'signupstud',payload: response.data.token});
		await AsyncStorage.setItem('regno',JSON.stringify(`${regno}`));
		navigate('studentmainflow');


	}
	catch(err){
		dispatch({type: 'adderr', payload: "Something went wrong with sign in"});
	}

};
};

const signoutstudent=dispatch=>{
return async ()=>{
await AsyncStorage.removeItem('token');
await AsyncStorage.removeItem('who');
dispatch({type:'signoutstud'});
navigate('Home');
};
};

const signupprof=dispatch=>{
return async ({vitemail,designation,password})=>{
	try{
		const response=await appointerApi.post('/signupprof',{vitemail,designation,password});
		await AsyncStorage.setItem('who','prof');
		await AsyncStorage.setItem('token',response.data.token);
		dispatch({type:'signupp',payload:response.data.token});
		await AsyncStorage.setItem('designation',JSON.stringify(`${designation}`));
		//await AsyncStorage.setItem('designation',{designation});
		navigate('profmainflow');

	}
	catch(err){
		dispatch({type:'adderr1', payload: "Something went wrong with sign up"});
	}

};
};


const signinprof=dispatch=>{
return async ({vitemail,designation,password})=>{
	try{
		const response=await appointerApi.post('/signinprof',{vitemail,designation,password});
		await AsyncStorage.setItem('who','prof');
		await AsyncStorage.setItem('token',response.data.token);
		dispatch({type:'signupp',payload:response.data.token});
		//const des=`${designation}`;
		//console.log(des);

		//console.log({designation});
		await AsyncStorage.setItem('designation',JSON.stringify(`${designation}`));
		const t=await AsyncStorage.getItem('designation');
		console.log(t);
		navigate('profmainflow');

	}
	catch(err){
		dispatch({type:'adderr1', payload: "Something went wrong with sign in"});


	}

};
};

const signoutprof=dispatch=>{
return async ()=>{
	await AsyncStorage.removeItem('token');
await AsyncStorage.removeItem('who');
dispatch({type:'signoutp'});
navigate('Home');

};
};




export const {Provider,Context}=createdatacontext(
authreducer,
{signupstudent,signinstudent,signoutstudent,signupprof,signinprof,signoutprof,clearerrormessage,localsignin},
{token: null, errorMessage:'',who:null}

	);