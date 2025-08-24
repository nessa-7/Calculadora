const express = require('express')
const router = express.Router()


router.get('/suma/:n1/:n2', (req, res) => {
  const n1 = Number(req.params.n1)
  const n2 = Number(req.params.n2)
  const suma = n1 + n2
  res.send(suma)
})

router.get('/resta/:n1/:n2', (req, res) => {
  const n1 = Number(req.params.n1)
  const n2 = Number(req.params.n2)
  const resta = n1 - n2
  res.send(resta)
})
  
router.get('/multiplicacion/:n1/:n2', (req, res) => {
  const n1 = Number(req.params.n1)
  const n2 = Number(req.params.n2)
  const multiplicacion = n1 * n2
  res.send(multiplicacion)
})

router.get('/division/:n1/:n2', (req, res) => {
  const n1 = Number(req.params.n1)
  const n2 = Number(req.params.n2)
  const division = n1 / n2
  res.send(division)
})

module.exports = router