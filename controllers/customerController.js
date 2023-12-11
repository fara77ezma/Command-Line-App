

const Customer = require('../models/customer.js');

const AddCustomer=(customer)=>{
const user=new Customer(customer);
user.save().
then(()=>{console.info("New Customer added");
db.close();
}).
catch((err)=>console.log(err));

}
const findCustomer =(name)=>{
const search=new RegExp(name,'i');

Customer.find({$or:[{firstname:search},{lastname:search}]}).
then((customer)=>{console.info(customer);
  console.info(`${customer.length} matches`);
  db.close();

}).
catch((err)=>console.log(err));

}
const updateCustomer =(_id,customer)=>{

Customer.update({_id},customer).
then((customer)=>{console.info("Customer Updated");
  console.info(`new data ${customer}`);
  db.close();
}).
catch((err)=>console.log(err));

}
const removeCustomer =(_id)=>{

Customer.remove({_id}).
then((customer)=>{console.info("Customer Removed");
db.close();

}).
catch((err)=>console.log(err));

}

const listAllCustomers =()=>{

Customer.find().
then((customer)=>{console.info(customer);
  console.info(`${customer.length} matches`);
  db.close();

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
