const mongoose=require("mongoose");
// var aplhanumeric=require("alphanumeric-id");
const autoIncrement=require("mongoose-auto-increment");
// const { default: alphanumeric } = require("alphanumeric-id");

var connection = mongoose.createConnection("mongodb://localhost/employee");
autoIncrement.initialize(connection);


const employeeSchema=new mongoose.Schema({
    _id:{type:mongoose.Schema.ObjectId,auto:true},
    emp_id:{type:String},
    first_name:{type:String},
    last_name:{type:String},
    email:{type:String},
    mobile_number:{type:Number},
    Address:{street:{type:String},
             city:{type:String},
             state:{type:String},
             country:{type:String},
             pincode:{type:Number}
    },
});

//employeeSchema.plugin(autoIncrement);
employeeSchema.plugin(autoIncrement.plugin,{model:'employee',field:'emp_id',value:'ERAD00',startAt:'0',incrementBy:1});

const employee=mongoose.model('employee',employeeSchema,'employee');
const map1=
module.exports={employee};