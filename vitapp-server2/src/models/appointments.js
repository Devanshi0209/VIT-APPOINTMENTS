const mongoose=require("mongoose");

const appointschema=new mongoose.Schema({
userId:{
	type: mongoose.Schema.Types.ObjectId,
	ref: 'freeslots'
},
venue:{
	type: String,
	required: true

},
dateandtime:{
	type: Date,
	required: true
},

designation:{
	type: String,
	required: true
},

regno:{
	type: String,
	required: true
}
	});

mongoose.model('appointments',appointschema);
