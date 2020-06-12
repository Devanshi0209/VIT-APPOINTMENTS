import React,{useState,useContext} from 'react';
import {StyleSheet,View,FlatList,TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Text,Input,Header,ListItem,Button,Divider,Overlay} from 'react-native-elements';
import {Context as slotcontext} from '../context/slotcontext';
import {NavigationEvents} from 'react-navigation';
import Spacer from '../components/Spacer';
import { AsyncStorage } from 'react-native';


const smh=({navigation})=>{
	const {state,fetchslotsmechod,confirmtheslot,removeexpiredslots}=useContext(slotcontext);
	const [r,setr]=useState('');

	const [regi,setregi]=useState('');
AsyncStorage.getItem('regno').then(value => {
      setregi(JSON.parse(value))
    }).done();




 const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
return (
	<SafeAreaView forceInset={{top:'always'}} style={styles.container}>
	<NavigationEvents onWillFocus={fetchslotsmechod} />
	<Spacer>
	<Header
  centerComponent={{ text: 'FREE SLOTS', style: { color: '#fff' } }}
/>
</Spacer>


<Divider style={{ backgroundColor: 'black' }} />
	<FlatList
	data={state}
	keyExtractor={item=>item._id}
	renderItem={({item})=>{
		return (
			<View>


			<TouchableOpacity onPress={()=>{
				confirmtheslot({designation: item.designation,regno: regi,dateandtime: item.dateandtime,venue: item.venue, id: item._id  })
removeexpiredslots({id :item._id });
toggleOverlay();
			}}>
			<ListItem
		title="Prof. Designation:"
		subtitle={item.designation}
		/>
		<ListItem
		title="Date and Time:"
		subtitle={item.dateandtime}
		/>
		<ListItem
		title="Venue of Meeting:"
		subtitle={item.venue}
		/>
			 		
			</TouchableOpacity>
			<Divider style={{ backgroundColor: 'black' }} />

 <Overlay isVisible={visible} onBackdropPress={()=>navigation.navigate('Vp')}>
 <View style={styles.container1}>
        <Text style={{fontSize: 20 }}>Slot Confirmed!</Text>
        <Text>Press the backdrop to return.</Text>
        </View>
      </Overlay>

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
	},
	container1:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"

	}

});


smh.navigationOptions=()=>{
return {
headerShown : false
};
};




export default smh;