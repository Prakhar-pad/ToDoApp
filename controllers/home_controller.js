const db=require('../config/mongoose');
const TodoList=require('../models/todo');


const taskList=[

	{
		taskName: "Book Reading",
		category: "Personal",
		dueDate: "11-02-2021"
	}
]


function home(req,res){

	// console.log(req.body);

	TodoList.find({}, function(err,toDoList){
		if(err){
			console.log('Error in fetching data from DB');
			return
		}
		return res.render('home', {
			title: "Home",
			Task_List: toDoList
		});
	})
}


function addTask(req,res){
	
	console.log('******',req.body);
	
	// taskList.push(req.body);
	TodoList.create({
		taskName:req.body.taskName,
		category:req.body.category,
		dueDate:req.body.dueDate
	},
		function(err, toDoList){
			if(err){
				console.log("Error in adding tasks");
				return
			}
			console.log('*******', toDoList);
			return res.redirect('back');
		}
	)	
	}

function deleteTask(req,res){

	console.log('***id**= ',req.body.id);
	TodoList.findByIdAndDelete(req.body.id, function(err){
		if(err){
			console.log("Error in deleting task");
			return
		}
		return res.redirect('back');
	})
}
module.exports={
	home:home,
	addTask:addTask,
	deleteTask:deleteTask
};