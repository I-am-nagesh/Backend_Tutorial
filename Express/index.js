

const express = require('express')

console.log(typeof express)

const app = express()

/**
 * starting the express server
 */
app.listen(8000, () => {
    console.log("server started")
})


/**
 * req - res cycle
 */
app.get("/", (req, res) => {
    res.send("Hello from the express server")
})

