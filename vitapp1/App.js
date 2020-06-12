import {createStackNavigator} from 'react-navigation-stack';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import React from 'react';

import homescreen from './src/screens/homescreen';
import signupstudent from './src/screens/signupstudent';
import signinstudent from './src/screens/signinstudent';
import viewprofstudent from './src/screens/viewprofstudent';
import viewslotstudent from './src/screens/viewslotstudent';
import myappstudent from './src/screens/myappstudent';
import accountstudent from './src/screens/accountstudent';
import signupprof from './src/screens/signupprof';
import signinprof from './src/screens/signinprof';
import createslotprof from './src/screens/createslotprof';
import myappprof from './src/screens/myappprof';
import accountprof from './src/screens/accountprof';
import viewslotprof from './src/screens/viewslotprof';
import confirm from './src/screens/confirm';
import loading from './src/screens/loading';
import helpage from './src/screens/helpage';
import {Provider as AuthProvider} from './src/context/authcontext';
import {Provider as SlotProvider} from './src/context/slotcontext';
import {Provider as AppointProvider} from './src/context/appointcontext';
import {Provider as AppointpProvider} from './src/context/appointpcontext';
import {setNavigator} from './src/navigationRef';
import sch from './src/screens/sch';
import scd from './src/screens/scd';
import sih from './src/screens/sih';
import sid from './src/screens/sid';
import smh from './src/screens/smh';
import smd from './src/screens/smd';
import selh from './src/screens/selh';
import seld from './src/screens/seld';
import senh from './src/screens/senh';
import send from './src/screens/send';


const switchNavigator=createSwitchNavigator({

  loading: loading,

  studentloginflow : createStackNavigator({
    Home: homescreen,
    help: helpage,
    Sus: signupstudent,
    Sis: signinstudent
  }),
  profloginflow : createStackNavigator({
    Home: homescreen,
    help: helpage,
    Sup: signupprof,
    Sip: signinprof
  }),
  studentmainflow : createBottomTabNavigator({
    MyStudAccount : accountstudent, //As
    MyStudAppointments : myappstudent,  //apps
    SelectSlot : createStackNavigator({ //selectslot
      Vp : viewprofstudent,
      scopehod : sch,
      scopedean : scd,
      sitehod : sih,
      sitedean : sid,
      smechod : smh,
      smecdean : smd,
      sensehod : senh,
      sensedean : send,
      selecthod : selh,
      selectdean : seld,
      conf: confirm

    })
  }),
  profmainflow : createBottomTabNavigator({
    MyProfAccount : accountprof, //As
    MyProfAppointments : myappprof, //appp
    CreateSlot : createStackNavigator({ //createslot
      Cs: createslotprof,
      Vs: viewslotprof
    })
  })
});

const App= createAppContainer(switchNavigator);

export default ()=>{
return (
  <AppointpProvider>
  <AppointProvider>
  <SlotProvider>
<AuthProvider>
<App ref={(navigator)=>{setNavigator(navigator)}}/>
</AuthProvider>
</SlotProvider>
</AppointProvider>
</AppointpProvider>

  );
};