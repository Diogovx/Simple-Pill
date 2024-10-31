import express from 'express'
import path from 'path'
import patientRouter from './routes/patient.js'
const app = express()
const __dirname = path.resolve()
app.use(logger)

app.use(express.static(path.join(__dirname,'public')))
app.use(express.static(path.join(__dirname,'public/html')))
app.use(express.static(path.join(__dirname,'public/css')))
app.use('/Imagens', express.static(path.join(__dirname,'public/assets')))
app.use(express.static(path.join(__dirname,'public/js')))

app.get('/', (req, res) => {
    res.send('teste')
})

app.use('/patient', patientRouter)

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000, ()=> {
    console.log('Servidor rodando em: https://localhost:3000')
})