const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const Customer = require('./models/customer');





//using json data in whole application

mongoose.Promise=global.Promise;

mongoose.connect("mongodb://127.0.0.1:27017/customers", {});




  const AddCustomer=(customer)=>{
  const user=new Customer(customer);
  user.save().
  then(()=>{console.info("New Customer added");
  }).
  catch((err)=>console.log(err));

  }
  const findCustomer =(name)=>{
  const search=new RegExp(name,'i');

  Customer.find({$or:[{firstname:search},{lastname:search}]}).
  then((customer)=>{console.info(customer);
    console.info(`${customer.length} matches`);

  }).
  catch((err)=>console.log(err));

  }
  const updateCustomer =(_id,customer)=>{

  Customer.findOneAndUpdate({_id},customer).
  then((customer)=>{
    console.info("Customer Updated");
    console.info(`new data ${customer}`);
  }).
  catch((err)=>console.log(err));

  }
  const removeCustomer =(_id)=>{

  Customer.findByIdAndDelete({_id}).
  then((customer)=>{console.info("Customer Removed");

  }).
  catch((err)=>console.log(err));

  }

  const listAllCustomers =()=>{

  Customer.find().
  then((customer)=>{console.info(customer);
    console.info(`${customer.length} matches`);

  }).
  catch((err)=>console.log(err));

  }
  module.exports={
    AddCustomer,
    findCustomer,
    updateCustomer,
    removeCustomer,
    listAllCustomers
  };
