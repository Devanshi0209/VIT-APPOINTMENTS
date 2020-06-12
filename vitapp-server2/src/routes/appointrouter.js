const express=require("express");
const mongoose=require("mongoose");
const requireauth=require("../middlewares/requireauth");
const requireauthprof=require("../middlewares/requireauthprof");
const appointments=mongoose.model('appointments');

const router=express.Router();

router.use(requireauth); //user should be signed in to create or list free slots
//router.use(requireauthprof);


router.get('/myappointments',async(req,res)=>{
const free=await appointments.find( {userId : req.user._id} );
res.send(free);
});

router.get('/myappointmentsp/:des',async(req,res)=>{

	console.log("tt");
const free=await appointments.find( {designation: req.params.des} );
console.log(free);
res.send(free);
});


router.post('/confirmslot', async(req,res)=>{
 const {designation,regno,dateandtime,venue}=req.body;
 if (!designation || !venue || !dateandtime || !regno){
 	return res.status(400).send({error: "You must provide all details"});
 }

 try{
const freeze=new appointments({designation,regno,dateandtime,venue, userId: req.user._id});
await freeze.save();
res.send(freeze);
 }
 catch(err){
 	return res.status(400).send({error: err.message});
 }
});



module.exports=router;

