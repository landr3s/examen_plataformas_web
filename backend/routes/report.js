import express from 'express'
import { agregarReporte } from '../controllers/reporte.js'

const router = express.Router()


router.post('/', agregarReporte)

export default router
