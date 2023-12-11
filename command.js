#!/usr/bin/env node

const program=require('commander');
const {AddCustomer,
findCustomer,
updateCustomer,
removeCustomer,
listAllCustomers
} = require('./app');
const { prompt } =  require('inquirer');
const questions=[{
  type:'input',
  name:'firstname',
  message:'Customer First Name'
},

{
  type:'input',
  name:'lastname',
  message:'Customer Last Name'
},
{
  type:'input',
  name:'phone',
  message:'Customer Phone Number'
},
{
  type:'input',
  name:'email',
  message:'Customer Email Address'
},
]

program
.version('1.0.0')
.description('Customer Managment System');

// program
// .command('add <firstname> <lastname> <phone> <email>')
// .alias('a')
// .description('Add New Customer')
// .action((firstname,lastname,phone,email)=>{
//   AddCustomer({firstname,lastname,phone,email});
// });
//Add Customer
// program
// .command('add')
// .alias('a')
// .description('Add New Customer')
// .action(()=>prompt(questions)
// .then(answers=>AddCustomer(answers))
//
// )

program
  .command('add')
  .alias('a')
  .description('Add New Customer')
  .action(() => prompt(questions)
    .then(answers => AddCustomer(answers))
    .catch(error => {
      console.error('Error adding customer:', error.message);
      process.exit(1); // Exit with a non-zero status code to indicate an error
    })
  )
//Find Customer

program
.command('find <name> ')
.alias('f')
.description('Find Customer')
.action((name)=>{
  findCustomer(name);
})
//Update Customer
program
.command('update <_id>')
.alias('u')
.description('Update A Customer')
.action((_id)=>prompt(questions)
.then(answers=>updateCustomer(_id,answers))
.catch(err=>console.log(err))
)
//Remove Customer
program
.command('remove <_id> ')
.alias('r')
.description('Remove A Customer')
.action((_id)=>{
  removeCustomer(_id);
})


//List All Customers
program
.command('list')
.alias('l')
.description('List All Customers')
.action(()=>{
  listAllCustomers();
})
program.parse(process.argv);
