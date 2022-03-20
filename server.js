const {app}=require("./app");
/**
 * this refer to the port used by application
 */
const PORT=process.env.DB_PORT;
/**
 * starting app by refering to port
 */
app.listen(PORT,()=>{
    console.log("app started on port "+PORT);
})