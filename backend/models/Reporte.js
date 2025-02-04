import fs from 'fs'


const reportesPath = './reportes.json'


export const leerReportes = () => {
  if (fs.existsSync(reportesPath)) {
    const data = fs.readFileSync(reportesPath)
    return JSON.parse(data)
  }
  return [] 
}


export const guardarReporte = reporte => {
  const reportes = leerReportes()
  reportes.push(reporte)
  fs.writeFileSync(reportesPath, JSON.stringify(reportes, null, 2))
}
