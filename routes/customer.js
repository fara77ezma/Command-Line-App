const customerController =require( '../controllers/customerController.js');

const express = require ('express');
const router=express.Router();
router.get('/',(req,res)=>res.send('okkk'));
router.post('/',customerController.AddCustomer);
module.exports=router;
