const express = require('express')
const app = express()
const PORT = 3000

const a = 12
const b = 5

app.get('/suma', (req, res) => {
  const suma = a + b
  res.send(suma)
})

app.get('/resta', (req, res) => {
  const resta = a - b
  res.send(resta)
})
  
app.get('/multiplicacion', (req, res) => {
  const multiplicacion = a * b
  res.send(multiplicacion)
})

app.get('/division', (req, res) => {
  const division = a / b
  res.send(division)
})


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
