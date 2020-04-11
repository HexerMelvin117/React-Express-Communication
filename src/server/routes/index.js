const app = module.exports = require('express')()
const myFunctions = require('../functions/index')

let myArray = []

app.get('/test', (req, res) => {
    res.json(myArray)
})

app.post('/test', (req, res) => {
    try {
        let test = req.body
        console.log(test)
        myFunctions.getTest(test.id, test.name, myArray)
        res.json(myArray)
    } catch(err) {
        res.json({ message: `An error has ocurred, details: ${err}` })
    }
})

app.delete('/test/:id', (req, res) => {
    try {
        let idDel = req.params.id
        myFunctions.delTest(idDel, myArray)
    } catch (err) {
        console.log(err)
    }

})