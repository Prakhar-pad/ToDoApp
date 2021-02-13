const mongoose=require('mongoose');

const contactSchema=new mongoose.Schema({

taskName: {
	type: String,
	required: true
},

category: {
	type: String,
	required: true
},

dueDate: {
	type: String
}

})

const TodoList=mongoose.model('TodoList', contactSchema);
module.exports=TodoList;