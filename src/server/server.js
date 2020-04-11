const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const myRoutes = require('./routes/index')

app.use(cors())
app.use(bodyParser.json())
app.use(myRoutes)


app.get('/', (req, res) => {
    res.json({ message: "Found me" })
})

app.listen(8000)