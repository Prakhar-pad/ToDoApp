// ps aux | grep node--to kill port

const express=require('express');
const PORT=process.env.PORT || 8080;
const app=express();
const bodyParser=require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('Assets'));
app.use(express.urlencoded());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', require('./routes'));





app.listen(PORT, function(err){

	if(err){

	console.log(err, 'Error Occured');
	return;
	}
	console.log(`Server is running on port: ${PORT}`);


});

module.exports=app;