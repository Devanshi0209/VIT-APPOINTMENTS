import { AsyncStorage } from 'react-native';
import createdatacontext from './createdatacontext';
import React from 'react';
import appointerApi from '../api/appointer';
import {navigate} from '../navigationRef';


const appointpreducer=(state,action)=>{
	switch(action.type){
		case 'get':
		return action.payload;
		default:
		return state;
	}
};


const viewappointmentsp=dispatch=>{
return async ()=>{
	console.log("tata");
const response=await appointerApi.get('/myappointments');
	dispatch({type: 'get',payload: response.data});

};
};



export const {Context, Provider}=createdatacontext(
	appointpreducer,
	{viewappointmentsp},
	[]
	);

