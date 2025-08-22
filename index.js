const express = require('express')
const app = express()
const PORT = 3000

const a = 12
const b = 5

app.get('/', (req, res) => {
  res.send("Menu:"+ `<br>` + "/1 : Suma" + `<br>` + " /2 : Resta" + `<br>` + " /3 : Multiplicacion" + `<br>` + " /4 : Division")
})


app.get('/1', (req, res) => {
  const suma = a + b
  res.send(suma)
})

app.get('/2', (req, res) => {
  const resta = a - b
  res.send(resta)
})
  
app.get('/3', (req, res) => {
  const multiplicacion = a * b
  res.send(multiplicacion)
})

app.get('/4', (req, res) => {
  const division = a / b
  res.send(division)
})


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
})
