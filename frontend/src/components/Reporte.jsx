import React, { useState } from 'react'
import axios from 'axios'

export const ReporteForm = () => {
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [precioAnterior, setPrecioAnterior] = useState('')
  const [precioActual, setPrecioActual] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    const nuevoReporte = {
      nombre,
      descripcion,
      precioAnterior: parseFloat(precioAnterior),
      precioActual: parseFloat(precioActual)
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/reportes',
        nuevoReporte
      )

      alert('Reporte agregado exitosamente!')
      console.log(response.data)
      setNombre('')
      setDescripcion('')
      setPrecioAnterior('')
      setPrecioActual('')
    } catch (error) {
      console.error('Error al agregar el reporte', error)
      alert('Hubo un error al agregar el reporte.')
    }
  }

  return (
    <div>
      <h2>Agregar Reporte</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type='text'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type='text'
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio anterior:</label>
          <input
            type='text'
            value={precioAnterior}
            onChange={e => setPrecioAnterior(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Precio actual:</label>
          <input
            type='text'
            value={precioActual}
            onChange={e => setPrecioActual(e.target.value)}
            required
          />
        </div>
        <button>Enviar</button>
      </form>
    </div>
  )
}
