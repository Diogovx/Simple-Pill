import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send('patient list')
})
router.get('/new', (req, res) => {
    res.send('new patient list')
})
router.route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`achou o paciente ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`atualizou o paciente ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`apagou o paciente ${req.params.id}`)
    })

const patient = [{name: 'Joao'}, {name: 'Diogo'}]
router.param('id', (req, res, next, id) => {
    req.user = patient[id]
    next()
})

export default router