import express from 'express'
import cors from 'cors'
import reporteRoutes from './routes/report.js'

const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())
app.use(cors())

app.use('/reportes', reporteRoutes)

app.get('/', (req, res) => {
  res.send('Hola Mundo')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
