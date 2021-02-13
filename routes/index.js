const express=require('express');
const router=express.Router();

const homeController=require('../controllers/home_controller');

router.route('/').get(homeController.home); 
router.route('/add-task').post(homeController.addTask);
router.route('/delete-task').post(homeController.deleteTask);
console.log('router loaded');
module.exports=router;
