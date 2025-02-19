/**
 * i need to write the controller / logic to register a user
 */

const bcrypt = require("bcryptjs")
const user_model = require("../models/user.model")

exports.signup = async(req, res) => {
    /**
     * logic to create user
     */

    //1.read the request body
    const request_body = req.body 

    //2. insert the data in the users collection in mongoDB
    const userObj = {
        name : request_body.name,
        userId : request_body.userId,
        email : request_body.email,
        userType : request_body.userType,
        password : bcrypt.hashSync(request_body.password, 8)
    }

    try{

        const user_created = await user_model.create(userObj)
        /**
         * return this user
         */
        const res_obj = {
            name : user_created.name,
            userId : user_created.userId,
            email : user_created.email,
            userType : user_created.userType,
            createdAt : user_created.createdAt,
            updateAt : user_created.updateAt
        }
        res.status(201).send(res_obj)

    }catch(err){
        console.log("Error while registring the user", err)
        res.status(500).send({
            message : "some error happened while registring the user"
        })
    }
}