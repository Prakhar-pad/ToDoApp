//require the library
const mongoose=require('mongoose');

//connect to the database
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/todo_list_db', {
// 	useNewUrlParser: true,
// 	useUnifiedTopology:true
// });

mongoose.connect('mongodb+srv://prakhar31:Pad@mongodb@cluster0.unksq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology:true
});

//acquire the connection(to check if it's successful)
const db=mongoose.connection;
//error 
db.on('error', function(err){console.log(err.message);});

//up and running then print the message
db.once('open', function(){

console.log("Successfully connected to the database");

});
