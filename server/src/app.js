const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()

app.use(cors)

app.use(express.json())

app.get("/api/", (req, res) => {
  res.send({ success: true })
})

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`)
})
