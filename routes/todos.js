const express = require('express')
const router = express.Router()
const lista = require('../data/lista')

router.get('/', (req, res) => {
    let todos = lista.todos
    res.json(todos)

})

router.get('/:id', (req, res) => {
    let todos = lista.todos
    const id = Number(req.params.id)

    res.json(todos.filter((todo) => todo.id === id))
})


module.exports = router