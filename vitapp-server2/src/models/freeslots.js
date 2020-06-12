const mongoose=require("mongoose");

const freeschema=new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'profuser'
	},
designation:{
type: String,
		required: true
}	,
	dateandtime: {
		type: Date,
		required: true
	},
	venue: {
		type:String,
		required: true

	}

}

);
mongoose.model('freeslots',freeschema);


//freeslots added by faculty hence ref profuser and viewed by student
//appoitnments added by student when he clicks on confirmslot and viewed by both student and prof