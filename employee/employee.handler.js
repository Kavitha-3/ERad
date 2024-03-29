const { employee } = require("./employee.model");

const employeehandler = {
    async createEmployee(req, res) {
        try {
            const {
                firstName,
                lastName,
                email,
                mobileNumber, address } = req.body;

            const employeedetail = await employee.findOne({ email: email });
            if (employeedetail) {
                throw new Error("User with same email already exists");
            }

            const newemployee = await employee.create({
                first_name: firstName, last_name: lastName,
                email: email, mobile_number: mobileNumber, Address: address
            })
           
            res.status(201).json({
                data: newemployee
            });
            return
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: error
            })
        }

    },

    async getEmployee(req, res) {
        try {
            console.log("get all employee details");
            const data = await employee.find(req.query);
            let result = data.map((e) => {
                let el = JSON.parse(JSON.stringify(e))
                el.emp_id = `ERAD00${el.emp_id}`
                return el
            })
            res.status(200).json({
                users: result
            })
        } catch (error) {
            res.status(500).json({
                error: {
                    message: error
                }
            })

        }
    },

    async getById(req, res) {
        try {
            const id = req.params.id;
            const data = await employee.findOne({ _id: id });
            res.status(200).json({
                data
            })
        } catch (error) {
            console.log(error);
            res.status(500).json({
                error: { message: error }

            })
        }
    },
  
}
module.exports = { employeehandler };
