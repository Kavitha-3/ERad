const {connect} = require('mongoose');
const autoIncrement=require("mongoose-auto-increment");
/**
 * this config is to connect with database
 * @returns {Promise<any>} Returns Mongoose connection as promise
 */
 

const DBConnection =() =>{
return connect( `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
}
module.exports={
  DBConnection
}