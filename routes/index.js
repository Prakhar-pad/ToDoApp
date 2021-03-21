const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');



// handling routes
router.route('/').get(homeController.home); 
router.route('/add-task').post(homeController.addTask);
router.route('/delete-task').get(homeController.deleteTask);
router.route('/edit-task').get(homeController.editTask);
router.route('/update-task').post(homeController.updateTask);
router.route('*').get(homeController.pageNotFound);
console.log('router loaded');
module.exports=router;
