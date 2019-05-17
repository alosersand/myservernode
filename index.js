const express = require ('express')
const app = express()
const todos = require('./routes/todos')

let port = process.argv[2] || 2223

app.use(express.urlencoded({extended: false}))

app.use('/api/v1/todos', todos)

app.use((req, res) => {
    res.status(404).send('ERROR 404 :)')
})

app.listen(port)
