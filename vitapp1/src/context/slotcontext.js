import { AsyncStorage } from 'react-native';
import createdatacontext from './createdatacontext';
import React from 'react';
import appointerApi from '../api/appointer';
import {navigate} from '../navigationRef';

const slotreducer=(state,action)=>{
	switch(action.type){
		case 'get':
		return action.payload;
	// remove one particular slot not the whole one
		default:
		return state;
	}
};



const getoldslots=dispatch=>{
return async()=>{
try{
const response=await appointerApi.get('/getoldslots');
console.log("reachedtoto");
for( var i in response.data){
	const id=response.data[i]._id;
	console.log(id);
	const response1=appointerApi.delete('/delexpired/'+`${id}`);
	
}
}
catch(err){
//console.log(err.response);	
console.log("error1");
}
};
};



const confirmtheslot=dispatch=>{
return async ({designation,regno,dateandtime,venue,id})=>{
	try{

	const response=await appointerApi.post('/confirmslot',{designation,regno,dateandtime,venue});
	//dispatch({type: 'remove'}); remove the slots selected, display the state correctly, dateandtime expiry
	//navigate('conf');
	//removeexpiredslots.call({id});
	//console.log({id});
}
catch(err){
	console.log(err.response);
}


};
};


const removeexpiredslots=dispatch=>{
	return async ({id})=>{
		try{
		console.log("reached");
		const response=await appointerApi.delete('/delexpired/'+`${id}`);
	}
	catch(err){
		console.log(err.message);
		console.log("reached1");
	}

	};
};





const fetchslotscopehod=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotsscopehod');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};

const fetchslotscopedean=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotsscopedean');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotsitehod=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotssitehod');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotsitedean=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotssitedean');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotsmechod=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotssmechod');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotsmecdean=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotssmecdean');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotsensehod=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotsensehod');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotsensedean=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotsensedean');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotselecthod=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotselecthod');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};


const fetchslotselectdean=dispatch=>{
return async ()=>{
	try{
const response=await appointerApi.get('/freeslotselectdean');
dispatch({type:'get',payload:response.data});
}
catch(err){
	console.log(err.message);
}
};
};

















const startcreating=dispatch=>{
return async ({designation,dateandtime,venue})=>{
	try{
await appointerApi.post('/createfreeslots',{designation,dateandtime,venue});
//console.log({designation,dateandtime,venue});
//navigate('Vs');

}
catch(err){
	console.log(err.message);
}
};
};



export const {Context, Provider}=createdatacontext(
	slotreducer,
	{getoldslots,removeexpiredslots,confirmtheslot,startcreating,fetchslotscopehod,fetchslotscopedean,fetchslotsitehod,fetchslotsitedean,fetchslotsmechod,fetchslotsmecdean,fetchslotsensehod,fetchslotsensedean,fetchslotselecthod,fetchslotselectdean},
	[]
	);

