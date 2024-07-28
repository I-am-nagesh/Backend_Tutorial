
/**
 * POST localhost:8888/ecomm/api/v1/auth/signup
 * 
 * i need to intercept this
 */


const authController = require("../controllers/auth.controller")

module.exports = (app) => {
    app.post("/ecomm/api/v1/auth/signup", authController.signup)
}