import { AsyncStorage } from 'react-native';
import createdatacontext from './createdatacontext';
import React from 'react';
import appointerApi from '../api/appointer';
import {navigate} from '../navigationRef';




const appointreducer=(state,action)=>{
	switch(action.type){
		case 'get':
		return action.payload;
		default:
		return state;
	}
};





const viewappointments=dispatch=>{
return async ()=>{
const response=await appointerApi.get('/myappointments');
	dispatch({type: 'get',payload: response.data});

};
};


const viewappointmentspro=dispatch=>{
return async ({designation})=>{
	try{
	console.log("here");
	console.log({designation});
const response=await appointerApi.get('/myappointmentsp/'+`${designation}`);
console.log(response.data);
	dispatch({type: 'get',payload: response.data});
}
catch(err){
	console.log("errr");
}

};
};




export const {Context, Provider}=createdatacontext(
	appointreducer,
	{viewappointments,viewappointmentspro},
	[]
	);

