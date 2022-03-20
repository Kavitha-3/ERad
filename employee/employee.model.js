const mongoose=require("mongoose");

const autoIncrement=require("mongoose-auto-increment");


var connection = mongoose.createConnection("mongodb://localhost/employees");
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
employeeSchema.plugin(autoIncrement.plugin,{model:'employee',field:'emp_id',startAt:'1',incrementBy:1});

const employee=mongoose.model('employee',employeeSchema,'employee');

module.exports={employee};