const express = require('express');
const router = express.Router();

console.log('router loaded');

const home=require('../controllers/home_controller');


router.get('/',home.home);
router.post('/feedback',home.feedback);
module.exports=router;