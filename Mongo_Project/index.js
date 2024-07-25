const mongoose = require('mongoose')
const studentModel = require("./models/student.model")

/**
 * write the code to connect with MongoDB
 */

mongoose.connect("mongodb://127.0.0.1/Mongo_Project")  //we can use localhost at place of number

const db = mongoose.connection  //start the connection with MongoDB

db.once("open",() => {
    console.log("Connected to MongoDB")
    //logic to insert data into the db
    init()
    //running the queries on MongoDB
    dbQueries()
})

db.on("error", () => {
    console.log("error while connecting to DB")
});

async function init(){
     //logic to insert data in the DB
     const student = {
        name: "Nagesh",
        age: 99,
        email: "nagesh@gmail.com",
        subjects : ["Maths", "Economics"]
     }
const std_obj = await studentModel.create(student)
console.log(std_obj)
}

async function dbQueries(){
    //read the student data
    console.log("Inside the dbqueries fundtion")
    //read the student data based on the id
    try{
        const student = await studentModel.findById("66a243fcc8b99daf8ed15962")
        console.log(student)
    }catch(err){
        console.log(err)
    }

    //search based on name
    try{
       const students = await studentModel.find({name: "Nagesh"})
       console.log(students)
    }catch(err){
        console.log(err)
    }
    }
   

