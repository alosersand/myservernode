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

router.post('/form', (req, res) => {
    const body = req.body
    const {
        id,
        titolo,
        descrizione
    } = req.body

    status = {}

    if (titolo) {
        status.code = 'success'
        status.message = `Aggiunto '${titolo}' alla lista`
    } else {
        status.code = 'error'
        status.message = 'titolo assente'
        status.campo = 'titolo'
    }

    res.send(status)
})

router.put('/form', (req, res) => {
    status = {}

    status.code = 'success'
    status.message = `Database aggiornato`

    res.send(status)
})

router.delete('/form', (req, res) => {
    const body = req.body
    const {
        id
    } = req.body

    status = {}

    if (id) {
        status.code = 'success'
        status.message = `Eliminato il todo ${id} dalla lista`
    } else {
        status.code = 'error'
        status.message = 'id assente'
        status.campo = 'titolo'
    }

    res.send(status)
})

module.exports = router