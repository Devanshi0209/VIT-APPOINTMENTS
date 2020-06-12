import React,{useState,useContext} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header,ListItem,Button,Divider} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import {NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';
import {Context as appointcontext} from '../context/appointcontext';

const myappstudent=()=>{
const {state,viewappointments}=useContext(appointcontext);
return(
	<SafeAreaView style={styles.container}>
	<NavigationEvents onWillFocus={viewappointments} />
		<Spacer>
	<Header

  centerComponent={{ text: 'MY APPOINTMENTS', style: { color: '#fff',fontSize: 16,alignItems:"center" } }}
  
/>
</Spacer>
<Divider style={{ backgroundColor: 'black' }} />
	<FlatList
	data={state}
	keyExtractor={item=>item._id}
	renderItem={({item})=>{
		return (
		<View>
		<ListItem
		title="Prof. Designation:"
		subtitle={item.designation}
		/>
		<ListItem
		title="Student Regno.:"
		subtitle={item.regno}
		/>
		<ListItem
		title="Date and Time:"
		subtitle={item.dateandtime}
		/>
		<ListItem
		title="Venue of Meeting:"
		subtitle={item.venue}
		/>
		<Divider style={{ backgroundColor: 'black' }} />
		</View>

		);
	}}
	/>

	</SafeAreaView>
	);
};

const styles=StyleSheet.create({
container:{
		flex:1,
		justifyContent:"center"
	}


});

export default myappstudent;