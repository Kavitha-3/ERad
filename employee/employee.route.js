const {Router}=require("express");
const router=Router();
const {employeehandler}=require("./employee.handler");

router.post("/create",employeehandler.createEmployee);
router.get("/",employeehandler.getEmployee);
router.get("/:id",employeehandler.getById);

module.exports={router};
