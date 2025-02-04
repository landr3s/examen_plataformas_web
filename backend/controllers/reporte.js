import { guardarReporte } from '../models/Reporte.js'

export const agregarReporte = (req, res) => {
  const { nombre, descripcion, precioAnterior, precioActual } = req.body

  const inflacion = ((precioActual - precioAnterior) / precioAnterior) * 100


  const reporte = {
    nombre,
    descripcion,
    precioAnterior,
    precioActual,
    inflacion
  }


  guardarReporte(reporte)

  res.status(201).json({
    mensaje: 'Reporte agregado exitosamente',
    reporte
  })
}
