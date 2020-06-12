import React,{useEffect,useContext} from 'react';
import {Context as authcontext} from '../context/authcontext';

const loading=()=>{
	const {state,localsignin}=useContext(authcontext);
	useEffect(()=>{
		localsignin();

	},[]);
	return null;

};
export default loading;