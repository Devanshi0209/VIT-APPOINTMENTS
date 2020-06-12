const express=require("express");
const mongoose=require("mongoose");
const moment=require("moment");
const requireauth=require("../middlewares/requireauth");
const requireauthprof=require("../middlewares/requireauthprof");
const freeslots=mongoose.model('freeslots');


const router=express.Router();

//router.use(requireauth); //user should be signed in to create or list free slots
router.use(requireauthprof);

//fetch all the freeslots



router.delete('/delexpired/:id', async(req,res)=>{


	 try{
	 	console.log('reachedfrom');
const freeze= await freeslots.findByIdAndDelete(req.params.id);
res.send(freeze);


 }
 catch(err){
 	return res.status(422).send({error: err.message});
 }

});


router.get('/getoldslots',async (req,res)=>{
const x=new Date();
try{
const free=await freeslots.find({},'_id',function(err, docs) {}).where('dateandtime').lt(x);
res.send(free);
console.log(free);}
catch(err){
	console.log(err.message);
}
});


router.get('/all',async (req,res)=>{

const free=await freeslots.find({userId:req.user._id});
res.send(free);
});


router.get('/freeslotsscopehod',async (req,res)=>{

const free=await freeslots.find({designation:'scopehod'});
res.send(free);
});

router.get('/freeslotsscopedean',async (req,res)=>{
const free=await freeslots.find({designation:'scopedean'});
res.send(free);
});


router.get('/freeslotssitehod',async (req,res)=>{
	const free=await freeslots.find({designation:'sitehod'});
res.send(free);
});

router.get('/freeslotssitedean',async (req,res)=>{
	const free=await freeslots.find({designation:'sitedean'});
res.send(free);
});


router.get('/freeslotssmechod',async (req,res)=>{
	const free=await freeslots.find({designation:'smechod'});
res.send(free);
});

router.get('/freeslotssmecdean',async (req,res)=>{
	const free=await freeslots.find({designation:'smecdean'});
res.send(free);
});

router.get('/freeslotsensehod',async (req,res)=>{
	const free=await freeslots.find({designation:'sensehod'});
res.send(free);
});

router.get('/freeslotsensedean',async (req,res)=>{
	const free=await freeslots.find({designation:'sensedean'});
res.send(free);
});

router.get('/freeslotselecthod',async (req,res)=>{
	const free=await freeslots.find({designation:'selecthod'});
res.send(free);
});
router.get('/freeslotselectdean',async (req,res)=>{
	const free=await freeslots.find({designation:'selectdean'});
res.send(free);
});
router.get('/freeslotschemehod',async (req,res)=>{
	const free=await freeslots.find({designation:'schemehod'});
res.send(free);
});
router.get('/freeslotschemedean',async (req,res)=>{
	const free=await freeslots.find({designation:'schemedean'});
res.send(free);
});
router.get('/freeslotsbsthod',async (req,res)=>{
	const free=await freeslots.find({designation:'sbsthod'});
res.send(free);
});
router.get('/freeslotsbstdean',async (req,res)=>{
	const free=await freeslots.find({designation:'sbstdean'});
res.send(free);
});


router.post('/createfreeslots', async(req,res)=>{
 const {designation,dateandtime,venue}=req.body;
 if (!designation || !venue || !dateandtime){
 	return res.status(422).send({error: "You must provide all details"});
 }

 try{
const freeze=new freeslots({designation,venue,dateandtime, userId: req.user._id});
await freeze.save();
res.send(freeze);
 }
 catch(err){
 	return res.status(422).send({error: err.message});
 }
});




module.exports=router;
